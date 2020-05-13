<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
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

    public function __construct
    (
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
            if ($line->status === self::SHIPPING_STATUS) {
                $itemShippedQuantity = $this->getShippedItemQuantity($order, $line->metadata->item_id);
                $shipItem = new PartialShipItem();

                $shipItem->setId($line->metadata->item_id);
                $shipItem->setQuantity($line->quantityShipped - $itemShippedQuantity);

                $shipItems->setPartialShipItem($shipItem);
            }
        }

        return $this->shipmentItemsRemover->remove($order, $shipItems);
    }

    private function getShippedItemQuantity(OrderInterface $order, int $itemId): int
    {
        $itemCollection = $order->getItems()->filter(function (OrderItemInterface $item) use ($itemId) {
            return $item->getId() === $itemId;
        });

        $refundedUnits = $this->unitsItemRepository->findBy([
            'orderItem' => $itemCollection->first(),
            'shipment' => null,
        ]);

        return count($refundedUnits);
    }

}
