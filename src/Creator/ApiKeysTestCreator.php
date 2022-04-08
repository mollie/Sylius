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
use BitBag\SyliusMolliePlugin\Form\Type\MollieGatewayConfigurationType;
use BitBag\SyliusMolliePlugin\Resolver\MollieMethodsResolverInterface;
use Mollie\Api\Resources\MethodCollection;
use Symfony\Contracts\Translation\TranslatorInterface;

final class ApiKeysTestCreator implements ApiKeysTestCreatorInterface
{
    /** @var MollieApiClient */
    private $mollieApiClient;

    /** @var TranslatorInterface */
    private $translator;

    public function __construct(
        MollieApiClient $mollieApiClient,
        TranslatorInterface $translator
    ) {
        $this->mollieApiClient = $mollieApiClient;
        $this->translator = $translator;
    }

    public function create(string $keyType, string $key = null): ApiKeyTest
    {
        $apiKeyTest = new ApiKeyTest(
            $keyType,
            null !== $key && '' !== $key
        );

        if (null === $key || '' === (trim($key))) {
            $apiKeyTest->setStatus(self::ERROR_STATUS);
            $apiKeyTest->setMessage($this->translator->trans('bitbag_sylius_mollie_plugin.ui.inser_you_key_first'));

            return $apiKeyTest;
        }

        if (MollieGatewayConfigurationType::API_KEY_TEST === $apiKeyTest->getType() && !str_starts_with($key, self::TEST_PREFIX)) {
            $apiKeyTest->setStatus(self::ERROR_STATUS);
            $apiKeyTest->setMessage($this->translator->trans('bitbag_sylius_mollie_plugin.ui.api_key_start_with_api_key_test'));

            return $apiKeyTest;
        }

        if (MollieGatewayConfigurationType::API_KEY_LIVE === $apiKeyTest->getType() && !str_starts_with($key, self::LIVE_PREFIX)) {
            $apiKeyTest->setStatus(self::ERROR_STATUS);
            $apiKeyTest->setMessage($this->translator->trans('bitbag_sylius_mollie_plugin.ui.api_key_start_with_api_key_live'));

            return $apiKeyTest;
        }

        return $this->testApiKey($apiKeyTest, $key);
    }

    private function testApiKey(ApiKeyTest $apiKeyTest, string $apiKey): ApiKeyTest
    {
        try {
            $client = $this->mollieApiClient->setApiKey($apiKey);

            /** @var MethodCollection $methods */
            $methods = $client->methods->allActive(MollieMethodsResolverInterface::PARAMETERS);
            $apiKeyTest->setMethods($methods);

            return $apiKeyTest;
        } catch (\Exception $exception) {
            $apiKeyTest->setStatus(self::ERROR_STATUS);

            if (0 === $exception->getCode()) {
                $apiKeyTest->setMessage($this->translator->trans(
                    \sprintf('bitbag_sylius_mollie_plugin.ui.api_key_start_with_%s', $apiKeyTest->getType())
                ));

                return $apiKeyTest;
            }

            $apiKeyTest->setMessage($this->translator->trans(''));

            return $apiKeyTest;
        }
    }
}
