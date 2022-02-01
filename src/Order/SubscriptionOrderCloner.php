<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Order;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Core\Model\ShipmentInterface;
use Sylius\Component\Core\OrderCheckoutStates;
use Sylius\Component\Core\OrderPaymentStates;
use Sylius\Component\Core\OrderShippingStates;
use Sylius\Component\Order\Model\OrderInterface as SyliusOrderInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;
use Sylius\Component\Resource\Generator\RandomnessGeneratorInterface;

final class SubscriptionOrderCloner implements SubscriptionOrderClonerInterface
{
    private OrderItemClonerInterface $orderItemCloner;
    private FactoryInterface $orderFactory;
    private RandomnessGeneratorInterface $generator;

    public function __construct(
        OrderItemClonerInterface $orderItemCloner,
        FactoryInterface $orderFactory,
        RandomnessGeneratorInterface $generator
    )
    {
        $this->orderItemCloner = $orderItemCloner;
        $this->orderFactory = $orderFactory;
        $this->generator = $generator;
    }

    public function clone(
        MollieSubscriptionInterface $subscription,
        OrderInterface $order,
        OrderItemInterface $orderItem
    ): OrderInterface
    {
        $rootOrder = $subscription->getFirstOrder();

        /** @var OrderInterface $clonedOrder */
        $clonedOrder = $this->orderFactory->createNew();
        $ordersCount = $subscription->getOrders()->count();
        $orderNumberSequence = $ordersCount + 1;
        $clonedOrder->setNumber(
            sprintf('%s-%d-%d', $rootOrder->getNumber(), $subscription->getId(), $orderNumberSequence)
        );
        $clonedOrder->setRecurringSequenceIndex($ordersCount);
        $clonedOrder->setState(SyliusOrderInterface::STATE_NEW);
        $clonedOrder->setNotes($order->getNotes());
        $clonedOrder->setAbandonedEmail($order->isAbandonedEmail());
        $clonedOrder->setChannel($order->getChannel());
        $clonedOrder->setCheckoutState(OrderCheckoutStates::STATE_COMPLETED);
        $clonedOrder->setCheckoutCompletedAt(new \DateTime());
        $clonedOrder->setCustomer($order->getCustomer());
        $clonedOrder->setCreatedAt(new \DateTime());
        $clonedOrder->setCurrencyCode($order->getCurrencyCode());
        $clonedOrder->setCustomerIp($order->getCustomerIp());
        $clonedOrder->setLocaleCode($order->getLocaleCode());
        $clonedOrder->setPaymentState(OrderPaymentStates::STATE_AWAITING_PAYMENT);
        $clonedOrder->setPromotionCoupon($order->getPromotionCoupon());
        $clonedOrder->setShippingAddress(clone $order->getShippingAddress());
        $clonedOrder->setBillingAddress(clone $order->getBillingAddress());
        $clonedOrder->setShippingState(OrderShippingStates::STATE_READY);
        $clonedOrder->setTokenValue($this->generator->generateUriSafeString(10));

        foreach ($order->getShipments() as $shipment) {
            $clonedShipment = clone $shipment;
            $clonedShipment->setState(ShipmentInterface::STATE_READY);
            $clonedShipment->setTracking(null);
            $clonedShipment->setShippedAt(null);
            $clonedShipment->setOrder($clonedOrder);
            $clonedOrder->addShipment($clonedShipment);
        }

        $item = $this->orderItemCloner->clone($orderItem, $clonedOrder);
        $clonedOrder->addItem($item);
        $clonedOrder->recalculateAdjustmentsTotal();
        $clonedOrder->recalculateItemsTotal();

        return $clonedOrder;
    }
}
