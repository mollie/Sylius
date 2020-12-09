<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Form\Type\MollieGatewayConfigurationType;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use Mollie\Api\Exceptions\ApiException;
use Sylius\Component\Resource\Exception\UpdateHandlingException;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class MollieApiClientKeyResolver implements MollieApiClientKeyResolverInterface
{
    /** @var RepositoryInterface */
    private $gatewayConfigRepository;

    /** @var MollieApiClient */
    private $mollieApiClient;

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    public function __construct(
        RepositoryInterface $gatewayConfigRepository,
        MollieApiClient $mollieApiClient,
        MollieLoggerActionInterface $loggerAction
    ) {
        $this->gatewayConfigRepository = $gatewayConfigRepository;
        $this->mollieApiClient = $mollieApiClient;
        $this->loggerAction = $loggerAction;
    }

    public function getClientWithKey(): MollieApiClient
    {
        /** @var GatewayConfigInterface $gateway */
        $gateway = $this->gatewayConfigRepository->findOneBy([
            'factoryName' => MollieGatewayFactory::FACTORY_NAME,
        ]);
        $config = $gateway->getConfig();

        $environment = true === $config['environment'] ?
            MollieGatewayConfigurationType::API_KEY_LIVE :
            MollieGatewayConfigurationType::API_KEY_TEST;

        try {
            return $this->mollieApiClient->setApiKey($config[$environment]);
        } catch (ApiException $e) {
            $this->loggerAction->addNegativeLog(sprintf('API call failed: %s', $e->getMessage()));

            throw new UpdateHandlingException(sprintf('API call failed: %s', htmlspecialchars($e->getMessage())));
        }
    }
}
