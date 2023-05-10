<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Factory;

use SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use SyliusMolliePlugin\Entity\OrderInterface;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

interface MollieSubscriptionFactoryInterface extends FactoryInterface
{
    public function createFromFirstOrder(OrderInterface $order): MollieSubscriptionInterface;

    public function createFromFirstOrderWithOrderItemAndPaymentConfiguration(
        OrderInterface $order,
        OrderItemInterface $orderItem,
        array $paymentConfiguration = [],
        string $mandateId = null
    ): MollieSubscriptionInterface;
}
