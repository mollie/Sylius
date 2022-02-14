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

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    /** @var MollieApiClient */
    private $mollieApiClient;

    /** @var RepositoryInterface */
    private $gatewayConfigRepository;

    /** @var MollieMethodsCreatorHelperInterface */
    private $helper;

    public function __construct(
        MollieLoggerActionInterface $loggerAction,
        MollieApiClient $mollieApiClient,
        RepositoryInterface $gatewayConfigRepository,
        MollieMethodsCreatorHelperInterface $helper
    )
    {
        $this->loggerAction = $loggerAction;
        $this->mollieApiClient = $mollieApiClient;
        $this->gatewayConfigRepository = $gatewayConfigRepository;
        $this->helper = $helper;
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

            $this->helper->createMethods($baseCollection, $gateway);
        } elseif (MollieGatewayFactory::FACTORY_NAME === $gateway->getFactoryName()) {
            $allMollieMethods = $client->methods->allActive(self::PARAMETERS);
            $this->helper->createMethods($allMollieMethods, $gateway);
        } else {
            $this->loggerAction->addLog(sprintf('Unable to download methods for "%s"', $gateway->getGatewayName()));

            return;
        }

        $this->loggerAction->addLog(sprintf('Downloaded all methods from mollie API'));
    }


}
