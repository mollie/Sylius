<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Calculator;

interface CalculateTaxAmountInterface
{
    public function calculate(float $taxRateAmount, int $shippingAmount): string;
}
