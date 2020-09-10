<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\GatewayFactory;
use Sylius\Bundle\CoreBundle\Application\Kernel;

final class MollieGatewayFactory extends GatewayFactory
{
    public const FACTORY_NAME = 'mollie';

    protected function populateConfig(ArrayObject $config): void
    {

        $environment = true === $config['environment'] ? "api_key_live": "api_key_test";
        $config->defaults([
            'payum.factory_name' => self::FACTORY_NAME,
            'payum.factory_title' => 'Mollie',
            'payum.http_client' => '@bitbag_sylius_mollie_plugin.mollie_api_client',
        ]);

        if (false === (bool) $config['payum.api']) {
            $config['payum.default_options'] = [
                'api_key' => null,
            ];

            $config->defaults($config['payum.default_options']);

            $config['payum.required_options'] = [
                $environment,
            ];

            $config['payum.api'] = function (ArrayObject $config) use ($environment) {
                $config->validateNotEmpty($config['payum.required_options']);

                /** @var MollieApiClient $mollieApiClient */
                $mollieApiClient = $config['payum.http_client'];
                $mollieApiClient->setApiKey($config[$environment]);
                $mollieApiClient->setConfig($config->toUnsafeArray());
                $mollieApiClient->addVersionString('Sylius/' .  Kernel::VERSION);
                $mollieApiClient->addVersionString('BitBagSyliusMolliePlugin/' . $mollieApiClient->getVersion());

                return $mollieApiClient;
            };
        }
    }
}
