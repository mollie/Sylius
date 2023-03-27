<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver\Order;

use SyliusMolliePlugin\Entity\OrderInterface;

interface PaymentCheckoutOrderResolverInterface
{
    public function resolve(): OrderInterface;
}
