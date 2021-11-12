<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactoryInterface;
use Sylius\Component\Core\Model\OrderInterface;

final class PaymentLocaleResolver implements PaymentLocaleResolverInterface
{
    public function resolveFromOrder(OrderInterface $order): ?string
    {
        $orderLocale = $order->getLocaleCode();

        if (false === in_array($orderLocale, MollieGatewayFactoryInterface::LOCALES_AVAILABLE, true)) {
            return null;
        }

        return $orderLocale;
    }
}
