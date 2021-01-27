<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Creator\ApiKeysTestCreatorInterface;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Form\Type\MollieGatewayConfigurationType;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\HttpFoundation\Request;

final class ApiKeysTestResolver implements ApiKeysTestResolverInterface
{
    /** @var RepositoryInterface */
    private $gatewayConfigRepository;

    /** @var ApiKeysTestCreatorInterface */
    private $apiKeysTestCreator;

    public function __construct(
        RepositoryInterface $gatewayConfigRepository,
        ApiKeysTestCreatorInterface $apiKeysTestCreator
    ) {
        $this->gatewayConfigRepository = $gatewayConfigRepository;
        $this->apiKeysTestCreator = $apiKeysTestCreator;
    }

    public function fromRequest(Request $request): array
    {
        $testApiKey = $request->get(MollieGatewayConfigurationType::API_KEY_TEST);

        /** @var GatewayConfigInterface $gateway */
        $gateway = $this->gatewayConfigRepository->findOneBy(['factoryName' => MollieGatewayFactory::FACTORY_NAME]);
        $config = $gateway->getConfig();

        $liveApiKey = $config[MollieGatewayConfigurationType::API_KEY_LIVE] ?? null;

        return [
            $this->apiKeysTestCreator->create(MollieGatewayConfigurationType::API_KEY_TEST, $testApiKey),
            $this->apiKeysTestCreator->create(MollieGatewayConfigurationType::API_KEY_LIVE, $liveApiKey),
        ];
    }
}
