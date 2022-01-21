<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Entity\ProductVariantInterface;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

interface MollieSubscriptionFactoryInterface extends FactoryInterface
{
    public function createFromFirstOrder(OrderInterface $order): MollieSubscriptionInterface;

    public function createFromFirstOrderWithOrderItem(
        OrderInterface $order,
        OrderItemInterface $orderItem
    ): MollieSubscriptionInterface;
}
