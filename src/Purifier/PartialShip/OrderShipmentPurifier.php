<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Purifier\PartialShip;

use Doctrine\Common\Collections\Collection;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\ShipmentInterface;

final class OrderShipmentPurifier implements OrderShipmentPurifierInterface
{
    /** @var OrderMolliePartialShipInterface */
    private $molliePartialShip;

    public function __construct(OrderMolliePartialShipInterface $molliePartialShip)
    {
        $this->molliePartialShip = $molliePartialShip;
    }

    public function purify(OrderInterface $order): void
    {
        /** @var Collection $shipments */
        $shipments = $order->getShipments();
        $shipmentsToRemove = $shipments->filter(static function (ShipmentInterface $shipment): bool {
            return $shipment->getState() === ShipmentInterface::STATE_READY && $shipment->getUnits()->isEmpty();
        });

        if (count($shipmentsToRemove) === 0) {
            return;
        }

        foreach ($shipmentsToRemove as $shipmentToRemove) {
            $order->removeShipment($shipmentToRemove);
        }

        $this->molliePartialShip->partialShip($order);
    }
}
