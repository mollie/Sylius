<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Refund\Units;

use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Order\Model\AdjustmentInterface;
use Sylius\RefundPlugin\Model\OrderItemUnitRefund;
use Sylius\RefundPlugin\Model\ShipmentRefund;

final class ShipmentUnitRefund implements ShipmentUnitRefundInterface
{
    public function refund(
        OrderInterface $order,
        array $orderItemUnitRefund,
        int $totalToRefund
    ): array {
        /** @var AdjustmentInterface $refundedShipment */
        $refundedShipment = $order->getAdjustments('shipping')->first();

        $totalRefunded = 0;
        if (0 < count($orderItemUnitRefund)) {
            /** @var OrderItemUnitRefund $item */
            foreach ($orderItemUnitRefund as $item) {
                $totalRefunded += $item->total();
            }

            $totalToRefund -= $totalRefunded;
        }

        if (0 >= $totalToRefund) {
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
