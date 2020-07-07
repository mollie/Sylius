<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action\StateMachine;

use BitBag\SyliusMolliePlugin\PartialShip\CreatePartialShipFromMollieInterface;
use BitBag\SyliusMolliePlugin\Transitions\PartialShip\ShipmentTransitions as ShipmentTransitionsPartial;
use Mollie\Api\Resources\Order;
use SM\Factory\FactoryInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\ShipmentInterface;
use Sylius\Component\Core\Repository\OrderRepositoryInterface;
use Sylius\Component\Order\OrderTransitions;
use Sylius\Component\Shipping\ShipmentTransitions;

final class SetStatusOrderAction
{
    /** @var FactoryInterface */
    private $factory;

    /** @var OrderRepositoryInterface */
    private $orderRepository;

    /** @var CreatePartialShipFromMollieInterface */
    private $createPartialShipFromMollie;

    public function __construct
    (
        FactoryInterface $factory,
        OrderRepositoryInterface $orderRepository,
        CreatePartialShipFromMollieInterface $createPartialShipFromMollie
    ) {
        $this->factory = $factory;
        $this->orderRepository = $orderRepository;
        $this->createPartialShipFromMollie = $createPartialShipFromMollie;
    }

    public function execute(Order $order): void
    {
        if (!$order->orderNumber) {
            return;
        }
        /** @var OrderInterface $orderSylius */
        $orderSylius = $this->orderRepository->findOneBy(['id' => $order->orderNumber]);

        /** @var ShipmentInterface $shipment */
        $shipment = $orderSylius->getShipments()->first();

        if ($order->isCompleted()) {
            $this->applyStateMachineOrderTransition($orderSylius, OrderTransitions::TRANSITION_FULFILL);
            $this->applyStateMachineShipmentsTransition($orderSylius->getShipments()->first(), ShipmentTransitions::TRANSITION_SHIP);
        }
        if ($order->isCanceled() || $order->isExpired()) {
            $this->applyStateMachineOrderTransition($orderSylius, OrderTransitions::TRANSITION_CANCEL);
        }

        if ($order->isShipping() && $this->isConfirmNotify($order, $shipment) && false === $this->isShippingAllItems($shipment)) {
            return;
        }
        if ($order->isShipping() && false === $this->isShippingAllItems($shipment)) {
            $this->createPartialShipFromMollie->create($orderSylius, $order);
            $this->applyStateMachineShipmentsTransition($orderSylius->getShipments()->last(), ShipmentTransitionsPartial::TRANSITION_CREATE_AND_SHIP);
        }
        if ($order->isShipping() && true === $this->isShippingAllItems($shipment)) {
            $this->applyStateMachineShipmentsTransition($orderSylius->getShipments()->last(), ShipmentTransitions::TRANSITION_SHIP);
        }
    }

    private function applyStateMachineOrderTransition(OrderInterface $orderSylius, string $transitions): void
    {
        $stateMachine = $this->factory->get($orderSylius, OrderTransitions::GRAPH);

        if (!$stateMachine->can($transitions)) {
            return;
        }

        $stateMachine->apply($transitions);
    }

    private function applyStateMachineShipmentsTransition(ShipmentInterface $orderSylius, string $transitions): void
    {
        $stateMachine = $this->factory->get($orderSylius, ShipmentTransitions::GRAPH);

        if (!$stateMachine->can($transitions)) {
            return;
        }

        $stateMachine->apply($transitions);
    }

    private function isShippingAllItems(ShipmentInterface $shipment)
    {
        return $shipment->getUnits()->isEmpty();
    }

    private function isConfirmNotify(Order $order, ShipmentInterface $shipment): bool
    {
        // check if in mollie and sylius is the same shipped items
        $shippableQuantity = 0;
        foreach ($order->lines as $line) {
            if ($line->type === 'physical') {
                $shippableQuantity += $line->shippableQuantity;
            }
        }

        return $shippableQuantity === count($shipment->getUnits()->toArray());
    }
}
