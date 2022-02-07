<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Order;

use Sylius\Component\Shipping\Model\ShipmentUnitInterface;

interface ShipmentUnitClonerInterface
{
    public function clone(ShipmentUnitInterface $unit): ShipmentUnitInterface;
}
