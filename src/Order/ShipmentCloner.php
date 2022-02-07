<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Order;

use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\ShipmentInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class ShipmentCloner implements ShipmentClonerInterface
{
    private FactoryInterface $shipmentFactory;
    private ShipmentUnitClonerInterface $shipmentUnitCloner;

    public function __construct(
        FactoryInterface $shipmentFactory,
        ShipmentUnitClonerInterface $shipmentUnitCloner
    )
    {
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

        foreach ($shipment->getUnits() as $unit) {
            $clonedUnit = $this->shipmentUnitCloner->clone($unit);
            $clonedUnit->setShipment($clonedShipment);
            $clonedUnit->setCreatedAt(new \DateTime());
            $clonedUnit->setUpdatedAt(null);
            $clonedShipment->addUnit($clonedUnit);
        }

        $clonedShipment->recalculateAdjustmentsTotal();

        return $clonedShipment;
    }
}
