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
use BitBag\SyliusMolliePlugin\Form\Type\MollieGatewayConfigurationType;
use Symfony\Component\HttpFoundation\Request;

final class ApiKeysTestResolver implements ApiKeysTestResolverInterface
{
    /** @var ApiKeysTestCreatorInterface */
    private $apiKeysTestCreator;

    public function __construct(
        ApiKeysTestCreatorInterface $apiKeysTestCreator
    ) {
        $this->apiKeysTestCreator = $apiKeysTestCreator;
    }

    public function fromRequest(Request $request): array
    {
        $testApiKey = $request->get(MollieGatewayConfigurationType::API_KEY_TEST);
        $liveApiKey = $request->get(MollieGatewayConfigurationType::API_KEY_LIVE);

        return [
            $this->apiKeysTestCreator->create(MollieGatewayConfigurationType::API_KEY_TEST, $testApiKey),
            $this->apiKeysTestCreator->create(MollieGatewayConfigurationType::API_KEY_LIVE, $liveApiKey),
        ];
    }
}
