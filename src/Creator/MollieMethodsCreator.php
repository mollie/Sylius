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
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayConfigFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Form\Type\MollieGatewayConfigurationType;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Payments\Methods;
use BitBag\SyliusMolliePlugin\Payments\Methods\MethodInterface;
use Doctrine\ORM\EntityManagerInterface;
use Mollie\Api\Resources\MethodCollection;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class MollieMethodsCreator implements MollieMethodsCreatorInterface
{
    /** @var Methods */
    private $methods;

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
        Methods $methods,
        EntityManagerInterface $entityManager,
        MollieLoggerActionInterface $loggerAction,
        MollieApiClient $mollieApiClient,
        RepositoryInterface $gatewayConfigRepository,
        MollieGatewayConfigFactoryInterface $factory
    ) {
        $this->methods = $methods;
        $this->entityManager = $entityManager;
        $this->loggerAction = $loggerAction;
        $this->mollieApiClient = $mollieApiClient;
        $this->gatewayConfigRepository = $gatewayConfigRepository;
        $this->factory = $factory;
    }

    public function create(): void
    {
        /** @var GatewayConfigInterface $gateway */
        $gateway = $this->gatewayConfigRepository->findOneBy(['factoryName' => MollieGatewayFactory::FACTORY_NAME]);

        $config = $gateway->getConfig();
        $environment = true === $config['environment'] ?
            MollieGatewayConfigurationType::API_KEY_LIVE :
            MollieGatewayConfigurationType::API_KEY_TEST;

        $client = $this->mollieApiClient->setApiKey($config[$environment]);

        $allMollieMethods = $client->methods->allActive(self::PARAMETERS);
        $this->createMethods($allMollieMethods, $gateway);

        $this->loggerAction->addLog(sprintf('Downloaded all methods from mollie API'));
    }

    private function createMethods(MethodCollection $allMollieMethods, GatewayConfigInterface $gateway): void
    {
        foreach ($allMollieMethods as $mollieMethod) {
            if (in_array($mollieMethod->id, self::UNSUPPORTED_METHODS)) {
                continue;
            }

            $this->methods->add($mollieMethod);
        }

        /** @var MethodInterface $method */
        foreach ($this->methods->getAllEnabled() as $method) {
            $gatewayConfig = $this->factory->create($method, $gateway);

            $this->entityManager->persist($gatewayConfig);
            $this->entityManager->flush();
        }
    }
}
