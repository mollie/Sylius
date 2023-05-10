<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver\ApplePayDirect;

use SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use SyliusMolliePlugin\Entity\OrderInterface;

interface ApplePayDirectApiOrderPaymentResolverInterface
{
    public function resolve(
        OrderInterface $order,
        MollieGatewayConfigInterface $mollieGatewayConfig,
        array $details
    ): void;
}
