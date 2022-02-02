<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Order;

use Sylius\Component\Core\Model\ShipmentInterface;

interface ShipmentClonerInterface
{
    public function clone(ShipmentInterface $shipment): ShipmentInterface;
}
