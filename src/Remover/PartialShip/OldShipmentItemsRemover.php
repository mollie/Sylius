<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Remover\PartialShip;

use BitBag\SyliusMolliePlugin\DTO\PartialShipItems;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItemUnitInterface;
use Sylius\Component\Core\Model\ShipmentInterface;

final class OldShipmentItemsRemover implements OldShipmentItemsRemoverInterface
{
    public function remove(OrderInterface $order, PartialShipItems $shipItems): OrderInterface
    {
        /** @var ShipmentInterface $shipment */
        $shipment = $order->getShipments()->first();

        /** @var OrderItemUnitInterface $unit */
        foreach ($shipment->getUnits() as $unit) {
            $item = $shipItems->findById($unit->getOrderItem()->getId());
            if (null !== $item && $item->getQuantity() > 0) {
                /** @var ShipmentInterface $oldShipment */
                $oldShipment = $unit->getShipment();

                $oldShipment->removeUnit($unit);
                $item->setQuantity($item->getQuantity() - 1);
            }
        }

        return $order;
    }
}
