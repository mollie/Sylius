<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver;

use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItem;

interface TaxUnitItemResolverInterface
{
    public function resolve(OrderInterface $order, OrderItem $item): ?float;
}
