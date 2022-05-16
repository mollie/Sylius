<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver\PartialShip;

use BitBag\SyliusMolliePlugin\DTO\PartialShipItem;
use BitBag\SyliusMolliePlugin\DTO\PartialShipItems;
use Doctrine\Common\Collections\Collection;
use Mollie\Api\Resources\Order;
use Sylius\Component\Core\Model\OrderItemUnitInterface;
use Webmozart\Assert\Assert;

final class FromSyliusToMollieLinesResolver implements FromSyliusToMollieLinesResolverInterface
{
    public function resolve(Collection $units, Order $mollieOrder): PartialShipItems
    {
        $shipItems = new PartialShipItems();

        /** @var OrderItemUnitInterface $unit */
        foreach ($units as $unit) {
            $lineId = $this->getLineIdFromMollie($mollieOrder, $unit->getOrderItem()->getId());
            Assert::notNull($lineId);

            $shipItem = new PartialShipItem();
            $shipItem->setId($unit->getOrderItem()->getId());
            $shipItem->setLineId($lineId);
            $shipItem->setQuantity(1);

            $shipItems->setPartialShipItem($shipItem);
        }

        return $shipItems;
    }

    private function getLineIdFromMollie(Order $mollieOrder, int $itemId): ?string
    {
        foreach ($mollieOrder->lines as $line) {
            if (!property_exists($line, 'metadata')) {
                throw new \InvalidArgumentException();
            }
            if ($itemId === $line->metadata->item_id) {
                if (!property_exists($line, 'id')) {
                    throw new \InvalidArgumentException();
                }

                return (string) $line->id;
            }
        }

        return null;
    }
}
