<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Calculator;

use BitBag\SyliusMolliePlugin\Helper\IntToStringConverterInterface;

final class CalculateTaxAmount implements CalculateTaxAmountInterface
{
    /** @var IntToStringConverterInterface */
    private $converter;

    public function __construct(IntToStringConverterInterface $converter)
    {
        $this->converter = $converter;
    }

    public function calculate(float $taxRateAmount, int $amount): string
    {
        $shippingTaxAmount = round($amount - ($amount / (1 + $taxRateAmount)));

        return $this->converter->convertIntToString((int) $shippingTaxAmount, 100);
    }
}
