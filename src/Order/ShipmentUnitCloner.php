<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Order;

use Sylius\Component\Resource\Factory\FactoryInterface;
use Sylius\Component\Shipping\Model\ShipmentUnitInterface;

final class ShipmentUnitCloner implements ShipmentUnitClonerInterface
{
    private FactoryInterface $unitFactory;

    public function __construct(FactoryInterface $unitFactory)
    {
        $this->unitFactory = $unitFactory;
    }

    public function clone(ShipmentUnitInterface $unit): ShipmentUnitInterface
    {
        /** @var ShipmentUnitInterface $cloned */
        $cloned = $this->unitFactory->createNew();

        $cloned->setCreatedAt(new \DateTime());

        return $cloned;
    }
}
