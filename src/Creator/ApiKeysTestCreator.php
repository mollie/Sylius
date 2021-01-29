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
use BitBag\SyliusMolliePlugin\DTO\ApiKeyTest;
use Mollie\Api\Resources\MethodCollection;

final class ApiKeysTestCreator implements ApiKeysTestCreatorInterface
{
    /** @var MollieApiClient */
    private $mollieApiClient;

    public function __construct(MollieApiClient $mollieApiClient)
    {
        $this->mollieApiClient = $mollieApiClient;
    }

    public function create(string $keyType, string $key = null): ApiKeyTest
    {
        if (null !== $key && !empty(trim($key))) {
            return new ApiKeyTest(
                $keyType,
                $key ? true : false,
                $this->testApiKey($key)
            );
        }

        return new ApiKeyTest(
            $keyType,
        );
    }

    private function testApiKey(string $apiKey): MethodCollection
    {
        $client = $this->mollieApiClient->setApiKey($apiKey);

        return $client->methods->allActive(MollieMethodsCreatorInterface::PARAMETERS);
    }
}
