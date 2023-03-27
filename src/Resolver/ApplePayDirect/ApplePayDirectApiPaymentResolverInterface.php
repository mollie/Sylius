<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver\ApplePayDirect;

use SyliusMolliePlugin\Entity\OrderInterface;

interface ApplePayDirectApiPaymentResolverInterface
{
    public function resolve(OrderInterface $order, array $details): void;
}
