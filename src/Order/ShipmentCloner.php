<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Order;

use Sylius\Component\Core\Model\ShipmentInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class ShipmentCloner implements ShipmentClonerInterface
{
    private FactoryInterface $shipmentFactory;

    private ShipmentUnitClonerInterface $shipmentUnitCloner;

    public function __construct(
        FactoryInterface $shipmentFactory,
        ShipmentUnitClonerInterface $shipmentUnitCloner
    ) {
        $this->shipmentFactory = $shipmentFactory;
        $this->shipmentUnitCloner = $shipmentUnitCloner;
    }

    public function clone(ShipmentInterface $shipment): ShipmentInterface
    {
        /** @var ShipmentInterface $clonedShipment */
        $clonedShipment = $this->shipmentFactory->createNew();

        $clonedShipment->setState(ShipmentInterface::STATE_READY);
        $clonedShipment->setTracking(null);
        $clonedShipment->setShippedAt(null);
        $clonedShipment->setMethod($shipment->getMethod());
        $clonedShipment->setCreatedAt(new \DateTime());
        $clonedShipment->setUpdatedAt(new \DateTime());

        $clonedShipment->recalculateAdjustmentsTotal();

        return $clonedShipment;
    }
}
