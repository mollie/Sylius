<?php

/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Order;

use BitBag\SyliusMolliePlugin\Order\ShipmentUnitCloner;
use BitBag\SyliusMolliePlugin\Order\ShipmentUnitClonerInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Resource\Factory\FactoryInterface;
use Sylius\Component\Shipping\Model\ShipmentUnitInterface;

final class ShipmentUnitClonerSpec extends ObjectBehavior
{
    function let(FactoryInterface $unitFactory): void
    {
        $this->beConstructedWith($unitFactory);
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(ShipmentUnitCloner::class);
    }

    function it_should_have_implement_shipment_unit_cloner_interface(): void
    {
        $this->shouldImplement(ShipmentUnitClonerInterface::class);
    }

    function it_clones_shipment_unit(
        ShipmentUnitInterface $unit,
        FactoryInterface $unitFactory,
        ShipmentUnitInterface $cloned
    ): void {
        $unitFactory->createNew()->willReturn($cloned);
        $cloned->setCreatedAt(new \DateTime());

        $this->clone($unit)->shouldReturn($cloned);
    }
}
