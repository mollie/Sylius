<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\GatewayFactory;

final class MollieSubscriptionGatewayFactory extends GatewayFactory
{
    const FACTORY_NAME = 'mollie_subscription';

    /**
     * {@inheritdoc}
     */
    protected function populateConfig(ArrayObject $config): void
    {
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
                'api_key',
                'interval',
            ];

            $config['payum.api'] = function (ArrayObject $config) {
                $config->validateNotEmpty($config['payum.required_options']);

                /** @var MollieApiClient $mollieApiClient */
                $mollieApiClient = $config['payum.http_client'];

                $mollieApiClient->setApiKey($config['api_key']);
                $mollieApiClient->setConfig($config->toUnsafeArray());
                $mollieApiClient->setIsRecurringSubscription(true);

                return $mollieApiClient;
            };
        }
    }
}
