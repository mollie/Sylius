<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Form\Type\MollieGatewayConfigurationType;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\GatewayFactory;

final class MollieSubscriptionGatewayFactory extends GatewayFactory
{
    public const FACTORY_NAME = 'mollie_subscription';

    public const CURRENCIES_AVAILABLE = ['EUR'];

    protected function populateConfig(ArrayObject $config): void
    {
        $environment = true === $config['environment'] ?
            MollieGatewayConfigurationType::API_KEY_LIVE :
            MollieGatewayConfigurationType::API_KEY_TEST;

        $config->defaults([
            'payum.factory_name' => self::FACTORY_NAME,
            'payum.factory_title' => 'Mollie subscription',
            'payum.http_client' => '@bitbag_sylius_mollie_plugin.mollie_api_client',
        ]);

        if (false === (bool) $config['payum.api']) {
            $config['payum.default_options'] = [
                'api_key' => null,
                'interval' => null,
                'times' => null,
            ];

            $config->defaults($config['payum.default_options']);

            $config['payum.required_options'] = [
                $environment,
                'interval',
            ];

            $config['payum.api'] = function (ArrayObject $config) use ($environment) {
                $config->validateNotEmpty($config['payum.required_options']);

                /** @var MollieApiClient $mollieApiClient */
                $mollieApiClient = $config['payum.http_client'];
                $mollieApiClient->setApiKey($config[$environment]);
                $mollieApiClient->setConfig($config->toUnsafeArray());
                $mollieApiClient->setIsRecurringSubscription(true);

                return $mollieApiClient;
            };
        }
    }
}
