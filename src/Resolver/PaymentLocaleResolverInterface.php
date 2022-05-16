<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use Sylius\Component\Core\Model\OrderInterface;

interface PaymentLocaleResolverInterface
{
    public function resolveFromOrder(OrderInterface $order): ?string;
}
