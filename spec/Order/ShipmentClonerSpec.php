<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Order;

use BitBag\SyliusMolliePlugin\Order\ShipmentCloner;
use BitBag\SyliusMolliePlugin\Order\ShipmentClonerInterface;
use BitBag\SyliusMolliePlugin\Order\ShipmentUnitClonerInterface;
use Doctrine\Common\Collections\ArrayCollection;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Core\Model\ShipmentInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;
use Sylius\Component\Shipping\Model\ShipmentUnitInterface;
use Sylius\Component\Shipping\Model\ShippingMethodInterface;

final class ShipmentClonerSpec extends ObjectBehavior
{
    function let(
        FactoryInterface $shipmentFactory,
        ShipmentUnitClonerInterface $shipmentUnitCloner)
    : void {
        $this->beConstructedWith(
            $shipmentFactory,
            $shipmentUnitCloner
        );
    }
    function it_is_initializable(): void
    {
        $this->shouldHaveType(ShipmentCloner::class);
    }

    function it_should_implement_shipment_cloner_interface(): void
    {
        $this->shouldImplement(ShipmentClonerInterface::class);
    }

    function it_clones(
        ShipmentInterface $shipment,
        ShipmentInterface $clonedShipment,
        FactoryInterface $shipmentFactory,
        ShipmentUnitInterface $unit1,
        ShipmentUnitInterface $unit2,
        ShippingMethodInterface $method
    ): void {
        $shipmentFactory->createNew()->willReturn($clonedShipment);

//        $time = new \DateTime();
//        $time->setDate(2029, 12, 12);

        $shipment->getState()->willReturn(ShipmentInterface::STATE_READY);
        $shipment->getTracking()->willReturn(null);
        $shipment->getShippedAt()->willReturn(null);
        $shipment->getMethod()->willReturn($method);
        $shipment->getCreatedAt()->willReturn(new \DateTime());
        $shipment->getUpdatedAt()->willReturn(new \DateTime());

        $clonedShipment->setState(ShipmentInterface::STATE_READY);
        $clonedShipment->setTracking(null);
        $clonedShipment->setShippedAt(null);
        $clonedShipment->setMethod($shipment->getWrappedObject()->getMethod());
        $clonedShipment->setCreatedAt(new \DateTime());
        $clonedShipment->setUpdatedAt(new \DateTime());

        $shipment->getUnits()->willReturn(new ArrayCollection([
            $unit1->getWrappedObject(),
        ]));

        $clonedUnit = clone $unit1;
        $unit1->setShipment($clonedShipment);
        $unit1->setCreatedAt(new \DateTime());
        $unit1->setUpdatedAt(null);

        $clonedShipment->addUnit($clonedUnit);
        $clonedShipment->recalculateAdjustmentsTotal();

        $this->clone($shipment);
    }
}
