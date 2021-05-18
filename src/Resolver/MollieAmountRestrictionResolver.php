<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;


use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use Sylius\Component\Core\Model\OrderInterface;

final class MollieAmountRestrictionResolver implements MollieAmountRestrictionResolverInterface
{
    public function resolve(MollieGatewayConfigInterface $paymentMethod, array $methods, OrderInterface $order): array
    {
        if ($order->getTotal() < $paymentMethod->getMinimumAmount() ||
            $order->getTotal() > $paymentMethod->getMaximumAmount()) {
            return $this->removePaymentMethod($paymentMethod, $methods);
        }
        return $methods;
    }

    private function removePaymentMethod(MollieGatewayConfigInterface $paymentMethod, array $methods): array
    {
        unset(
            $methods['data'][$paymentMethod->getName()],
            $methods['image'][$paymentMethod->getMethodId()],
            $methods['issuers'][$paymentMethod->getMethodId()],
            $methods['paymentFee'][$paymentMethod->getMethodId()]
        );

        return $methods;
    }
}
