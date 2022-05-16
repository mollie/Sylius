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
use BitBag\SyliusMolliePlugin\Remover\PartialShip\OldShipmentItemsRemoverInterface;
use Mollie\Api\Resources\Order;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class FromMollieToSyliusResolver implements FromMollieToSyliusResolverInterface
{
    /** @var RepositoryInterface */
    private $unitsItemRepository;

    /** @var OldShipmentItemsRemoverInterface */
    private $shipmentItemsRemover;

    public function __construct(
        RepositoryInterface $unitsItemRepository,
        OldShipmentItemsRemoverInterface $shipmentItemsRemover
    ) {
        $this->unitsItemRepository = $unitsItemRepository;
        $this->shipmentItemsRemover = $shipmentItemsRemover;
    }

    public function resolve(OrderInterface $order, Order $mollieOrder): OrderInterface
    {
        $shipItems = new PartialShipItems();

        foreach ($mollieOrder->lines as $line) {
            if (!property_exists($line, 'status')) {
                throw new \InvalidArgumentException();
            }
            if (self::SHIPPING_STATUS === $line->status) {
                if (!property_exists($line, 'metadata')) {
                    throw new \InvalidArgumentException();
                }
                $itemShippedQuantity = $this->getShippedItemQuantity($order, $line->metadata->item_id);
                $shipItem = new PartialShipItem();

                $shipItem->setId($line->metadata->item_id);
                if (!property_exists($line, 'quantityShipped')) {
                    throw new \InvalidArgumentException();
                }
                $shipItem->setQuantity($line->quantityShipped - $itemShippedQuantity);

                $shipItems->setPartialShipItem($shipItem);
            }
        }

        return $this->shipmentItemsRemover->remove($order, $shipItems);
    }

    private function getShippedItemQuantity(OrderInterface $order, int $itemId): int
    {
        $itemCollection = $order->getItems()->filter(function (OrderItemInterface $item) use ($itemId): bool {
            return $item->getId() === $itemId;
        });

        $refundedUnits = $this->unitsItemRepository->findBy([
            'orderItem' => $itemCollection->first(),
            'shipment' => null,
        ]);

        return count($refundedUnits);
    }
}
