<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Checker\Gateway;

use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use Payum\Core\Model\GatewayConfigInterface;

final class MollieGatewayFactoryChecker implements MollieGatewayFactoryCheckerInterface
{
    private const MOLLIE_GATEWAYS = [
      MollieGatewayFactory::FACTORY_NAME,
      MollieSubscriptionGatewayFactory::FACTORY_NAME,
    ];

    public function isMollieGateway(GatewayConfigInterface $gateway): bool
    {
        if (in_array($gateway->getFactoryName(), self::MOLLIE_GATEWAYS, true)) {
            return true;
        }

        return false;
    }
}
