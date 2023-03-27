<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Calculator\Refund;

use SyliusMolliePlugin\DTO\PartialRefundItem;
use SyliusMolliePlugin\DTO\PartialRefundItems;

final class PaymentRefundCalculator implements PaymentRefundCalculatorInterface
{
    public function calculate(PartialRefundItems $partialRefundItems, int $totalToRefund): PartialRefundItems
    {
        /** @var PartialRefundItem $partialRefundItem */
        foreach ($partialRefundItems->getPartialRefundItems() as $partialRefundItem) {
            if (0 < $partialRefundItem->getAvailableAmountToRefund()) {
                $totalToRefund = $partialRefundItem->setAmountToRefund($totalToRefund);
                if (0 === $totalToRefund) {
                    break;
                }
            }
        }

        return $partialRefundItems;
    }
}
