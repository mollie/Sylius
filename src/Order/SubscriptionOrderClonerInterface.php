<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Order;

use SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use SyliusMolliePlugin\Entity\OrderInterface;
use Sylius\Component\Core\Model\OrderItemInterface;

interface SubscriptionOrderClonerInterface
{
    public function clone(
        MollieSubscriptionInterface $subscription,
        OrderInterface $order,
        OrderItemInterface $orderItem
    ): OrderInterface;
}
