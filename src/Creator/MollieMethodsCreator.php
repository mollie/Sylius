<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Creator;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MethodsFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayConfigFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use BitBag\SyliusMolliePlugin\Form\Type\MollieGatewayConfigurationType;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Payments\Methods\MethodInterface;
use Doctrine\ORM\EntityManagerInterface;
use Mollie\Api\Resources\Method;
use Mollie\Api\Resources\MethodCollection;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class MollieMethodsCreator implements MollieMethodsCreatorInterface
{
    /** @var MethodsFactoryInterface */
    private $methodsFactory;

    /** @var EntityManagerInterface */
    private $entityManager;

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    /** @var MollieApiClient */
    private $mollieApiClient;

    /** @var RepositoryInterface */
    private $gatewayConfigRepository;

    /** @var MollieGatewayConfigFactoryInterface */
    private $factory;

    public function __construct(
        MethodsFactoryInterface $methodsFactory,
        EntityManagerInterface $entityManager,
        MollieLoggerActionInterface $loggerAction,
        MollieApiClient $mollieApiClient,
        RepositoryInterface $gatewayConfigRepository,
        MollieGatewayConfigFactoryInterface $factory
    )
    {
        $this->methodsFactory = $methodsFactory;
        $this->entityManager = $entityManager;
        $this->loggerAction = $loggerAction;
        $this->mollieApiClient = $mollieApiClient;
        $this->gatewayConfigRepository = $gatewayConfigRepository;
        $this->factory = $factory;
    }

    public function create(): void
    {
        /** @var GatewayConfigInterface $gateway */
        $gateways = $this->gatewayConfigRepository->findBy([
            'factoryName' => [
                MollieGatewayFactory::FACTORY_NAME,
            ],
        ]);

        foreach ($gateways as $gateway) {
            $this->createForGateway($gateway);
        }
    }

    public function createForGateway(GatewayConfigInterface $gateway): void
    {
        $config = $gateway->getConfig();
        $environment = true === $config['environment'] ?
            MollieGatewayConfigurationType::API_KEY_LIVE :
            MollieGatewayConfigurationType::API_KEY_TEST;

        $recurring = array_key_exists('times', $config) && array_key_exists('interval', $config);
        $client = $this->mollieApiClient->setApiKey($config[$environment]);
        $client->setIsRecurringSubscription($recurring);

        if (MollieSubscriptionGatewayFactory::FACTORY_NAME === $gateway->getFactoryName()) {
            $baseCollection = $client->methods->allActive(self::PARAMETERS);
            $recurringCollection = $client->methods->allActive(self::PARAMETERS_RECURRING);
            foreach ($recurringCollection as $recurringEntry) {
                $baseCollection->append($recurringEntry);
            }

            $this->createMethods($baseCollection, $gateway);
        } elseif (MollieGatewayFactory::FACTORY_NAME === $gateway->getFactoryName()) {
            $allMollieMethods = $client->methods->allActive(self::PARAMETERS);
            $this->createMethods($allMollieMethods, $gateway);
        } else {
            $this->loggerAction->addLog(sprintf('Unable to download methods for "%s"', $gateway->getGatewayName()));

            return;
        }

        $this->loggerAction->addLog(sprintf('Downloaded all methods from mollie API'));
    }

    private function createMethods(MethodCollection $allMollieMethods, GatewayConfigInterface $gateway): void
    {
        $methods = $this->methodsFactory->createNew();

        foreach ($allMollieMethods as $mollieMethod) {
            if (in_array($mollieMethod->id, self::UNSUPPORTED_METHODS)) {
                continue;
            }

            if (
                MollieSubscriptionGatewayFactory::FACTORY_NAME === $gateway->getFactoryName() &&
                (
                    false === in_array($mollieMethod->id, self::RECURRING_PAYMENT_SUPPORTED_METHODS) &&
                    false === in_array($mollieMethod->id, self::RECURRING_PAYMENT_INITIAL_METHODS)
                )
            ) {
                continue;
            }

            $methods->add($mollieMethod);
        }

        /** @var MethodInterface $method */
        foreach ($methods->getAllEnabled() as $key => $method) {
            $gatewayConfig = $this->factory->create($method, $gateway, $key);

            $this->entityManager->persist($gatewayConfig);
            $this->entityManager->flush();
        }
    }
}
