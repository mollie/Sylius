<?php


namespace Tests\BitBag\SyliusMolliePlugin\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Sylius\Component\Core\Model\Shipment as BaseShipment;
use Sylius\RefundPlugin\Entity\ShipmentInterface as RefundShipmentInterface;
use Sylius\RefundPlugin\Entity\ShipmentTrait;

class Shipment extends BaseShipment implements RefundShipmentInterface
{
    use ShipmentTrait;

    public function __construct()
    {
        parent::__construct();

        $this->adjustments = new ArrayCollection();
    }
}