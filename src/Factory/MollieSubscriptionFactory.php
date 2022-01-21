<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Entity\ProductVariantInterface;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class MollieSubscriptionFactory implements MollieSubscriptionFactoryInterface
{
    private FactoryInterface $decoratedFactory;
    private MollieSubscriptionScheduleFactoryInterface $subscriptionScheduleFactory;

    public function __construct(
        FactoryInterface $decoratedFactory,
        MollieSubscriptionScheduleFactoryInterface $subscriptionScheduleFactory
    )
    {
        $this->decoratedFactory = $decoratedFactory;
    }

    public function createNew(): MollieSubscriptionInterface
    {
        /** @var MollieSubscriptionInterface $subscriptionTemplate */
        $subscriptionTemplate = $this->decoratedFactory->createNew();

        return $subscriptionTemplate;
    }

    public function createFromFirstOrder(OrderInterface $order): MollieSubscriptionInterface
    {
        $subscriptionTemplate = $this->createNew();

        $subscriptionTemplate->setCustomer($order->getCustomer());
        $subscriptionTemplate->addOrder($order);

        foreach ($order->getPayments() as $payment) {
            $subscriptionTemplate->addPayment($payment);
        }

        return $subscriptionTemplate;
    }

    public function createFromFirstOrderWithOrderItem(
        OrderInterface $order,
        OrderItemInterface $orderItem
    ): MollieSubscriptionInterface
    {
        $variant = $orderItem->getVariant();
        if (false === $variant instanceof ProductVariantInterface) {
            throw new \InvalidArgumentException(
                sprintf('Variant should be instance of "%s::class".', ProductVariantInterface::class)
            );
        }

        $subscriptionTemplate = $this->createFromFirstOrder($order);
        $subscriptionTemplate->setInterval($variant->getInterval());
        $subscriptionTemplate->setNumberOfRepetitions($variant->getTimes());
        $subscriptionTemplate->setOrderItem($orderItem);

        return $subscriptionTemplate;
    }
}
