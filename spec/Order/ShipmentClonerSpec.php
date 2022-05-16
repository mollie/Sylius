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
use PhpSpec\ObjectBehavior;
use Prophecy\Argument;
use Sylius\Component\Core\Model\ShipmentInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;
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

    function it_clones_shipment(
        ShipmentInterface $shipment,
        ShipmentInterface $clonedShipment,
        FactoryInterface $shipmentFactory,
        ShippingMethodInterface $method
    ): void {
        $shipmentFactory->createNew()->willReturn($clonedShipment);
        $shipment->getMethod()->willReturn($method);

        $dateTime = new \DateTime();
        $dateTime->setDate(2050,12,12);
        $dateTime->setTime(10,48);
        $clonedShipment->getState()->willReturn(ShipmentInterface::STATE_READY);
        $clonedShipment->getTracking()->willReturn(null);
        $clonedShipment->getShippedAt()->willReturn(null);
        $clonedShipment->getMethod()->willReturn($method);
        $clonedShipment->getCreatedAt()->willReturn($dateTime);
        $clonedShipment->getUpdatedAt()->willReturn($dateTime);

        $clonedShipment->setState(ShipmentInterface::STATE_READY)->shouldBeCalled();
        $clonedShipment->setTracking(null)->shouldBeCalled();
        $clonedShipment->setShippedAt(null)->shouldBeCalled();
        $clonedShipment->setMethod($method)->shouldBeCalled();
        $clonedShipment->setCreatedAt(Argument::any())->shouldBeCalled();
        $clonedShipment->setUpdatedAt(Argument::any())->shouldBeCalled();

        $clonedShipment->recalculateAdjustmentsTotal()->shouldBeCalled();

        $this->clone($shipment)->shouldReturn($clonedShipment);
    }
}
