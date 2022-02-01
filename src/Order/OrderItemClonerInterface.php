<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Order;

use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItemInterface;

interface OrderItemClonerInterface
{
    public function clone(OrderItemInterface $orderItem, OrderInterface $order): OrderItemInterface;
}
