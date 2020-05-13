<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Refund\Units;

use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Order\Model\AdjustmentInterface;
use Sylius\RefundPlugin\Model\OrderItemUnitRefund;
use Sylius\RefundPlugin\Model\ShipmentRefund;

final class ShipmentUnitRefund implements ShipmentUnitRefundInterface
{
    public function refund(OrderInterface $order, array $orderItemUnitRefund, int $totalToRefund): array
    {
        /** @var AdjustmentInterface $refundedShipment */
        $refundedShipment = $order->getAdjustments('shipping')->first();

        $totalRefunded = 0;
        if (!empty($orderItemUnitRefund)) {
            /** @var OrderItemUnitRefund $item */
            foreach ($orderItemUnitRefund as $item) {
                $totalRefunded += $item->total();
            }

            $totalToRefund = $totalToRefund - $totalRefunded;
        }

        if ($totalToRefund <= 0) {
            return [];
        }

        if ($totalToRefund > $refundedShipment->getAmount()) {
            $totalToRefund = $refundedShipment->getAmount();
        }

        return [
            new ShipmentRefund(
                $refundedShipment->getId(),
                $totalToRefund
            ),
        ];
    }
}
