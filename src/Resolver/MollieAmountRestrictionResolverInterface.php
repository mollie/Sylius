<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use Sylius\Component\Core\Model\OrderInterface;

interface MollieAmountRestrictionResolverInterface
{
    public function resolve(MollieGatewayConfigInterface $paymentMethod, array $methods, OrderInterface $order): array;
}
