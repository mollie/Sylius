<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactoryInterface;
use Sylius\Component\Core\Model\OrderInterface;

final class PaymentLocaleResolver implements PaymentLocaleResolverInterface
{
    public function resolveFromOrder(OrderInterface $order): ?string
    {
        /** @var string $orderLocale */
        $orderLocale = $order->getLocaleCode();

        if (false === array_key_exists($orderLocale, MollieGatewayFactoryInterface::LOCALES_AVAILABLE_MAP)) {
            return null;
        }

        return MollieGatewayFactoryInterface::LOCALES_AVAILABLE_MAP[$orderLocale];
    }
}
