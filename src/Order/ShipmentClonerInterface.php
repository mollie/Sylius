<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Order;

use Sylius\Component\Core\Model\ShipmentInterface;

interface ShipmentClonerInterface
{
    public function clone(ShipmentInterface $shipment): ShipmentInterface;
}
