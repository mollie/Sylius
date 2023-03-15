<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Calculator\Refund;

use SyliusMolliePlugin\DTO\PartialRefundItems;

interface PaymentRefundCalculatorInterface
{
    public function calculate(PartialRefundItems $partialRefundItems, int $totalToRefund): PartialRefundItems;
}
