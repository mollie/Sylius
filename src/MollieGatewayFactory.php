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

use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\GatewayFactory;

final class MollieGatewayFactory extends GatewayFactory
{
    const FACTORY_NAME = 'mollie';
    const LOCALES_AVAILABLE = ['en_US', 'de_AT', 'de_CH', 'de_DE', 'es_ES', 'fr_BE', 'fr_FR', 'nl_BE', 'nl_NL'];
    const CURRENCIES_AVAILABLE = ['EUR'];

    /**
     * {@inheritdoc}
     */
    protected function populateConfig(ArrayObject $config): void
    {
        $config->defaults([
            'payum.factory_name' => self::FACTORY_NAME,
            'payum.factory_title' => 'Mollie',
        ]);

        if (false === (bool) $config['payum.api']) {
            $config['payum.default_options'] = [
                'api_key' => null,
            ];

            $config->defaults($config['payum.default_options']);

            $config['payum.required_options'] = [
                'api_key',
            ];

            $config['payum.api'] = function (ArrayObject $config) {
                $config->validateNotEmpty($config['payum.required_options']);

                /** @var \Mollie_API_Client $mollieApiClient */
                $mollieApiClient = $config['payum.http_client'];

                $mollieApiClient->setApiKey($config['api_key']);

                return $mollieApiClient;
            };
        }
    }
}
