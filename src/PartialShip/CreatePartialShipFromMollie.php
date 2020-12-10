<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\PartialShip;

use BitBag\SyliusMolliePlugin\Factory\PartialShip\ShipmentFactoryInterface;
use BitBag\SyliusMolliePlugin\Resolver\PartialShip\FromMollieToSyliusResolverInterface;
use Doctrine\Common\Collections\Collection;
use Mollie\Api\Resources\Order;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\ShipmentInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class CreatePartialShipFromMollie implements CreatePartialShipFromMollieInterface
{
    /** @var ShipmentFactoryInterface */
    private $shipmentFactory;

    /** @var RepositoryInterface */
    private $orderRepository;

    /** @var FromMollieToSyliusResolverInterface */
    private $fromMollieToSyliusResolver;

    public function __construct(
        ShipmentFactoryInterface $shipmentFactory,
        RepositoryInterface $orderRepository,
        FromMollieToSyliusResolverInterface $fromMollieToSyliusResolver
    ) {
        $this->shipmentFactory = $shipmentFactory;
        $this->orderRepository = $orderRepository;
        $this->fromMollieToSyliusResolver = $fromMollieToSyliusResolver;
    }

    public function create(OrderInterface $order, Order $mollieOrder): OrderInterface
    {
        $newOrder = $this->fromMollieToSyliusResolver->resolve($order, $mollieOrder);

        /** @var ShipmentInterface $shipment */
        $shipment = $newOrder->getShipments()->first();
        $this->shipmentFactory->createWithOrderInventorySourceAndMethodFromShipment($shipment);

        /** @var Collection $shipments */
        $shipments = $order->getShipments();
        $shipmentsToRemove = $shipments->filter(static function (ShipmentInterface $shipment): bool {
            return $shipment->getState() === ShipmentInterface::STATE_READY && $shipment->getUnits()->isEmpty();
        });

        foreach ($shipmentsToRemove as $shipmentToRemove) {
            $order->removeShipment($shipmentToRemove);
        }

        $this->orderRepository->add($order);

        return $order;
    }
}
