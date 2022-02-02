<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Calculator;

use BitBag\SyliusMolliePlugin\Calculator\CalculateTaxAmount;
use BitBag\SyliusMolliePlugin\Calculator\CalculateTaxAmountInterface;
use BitBag\SyliusMolliePlugin\Helper\IntToStringConverterInterface;
use PhpSpec\ObjectBehavior;

final class CalculateTaxAmountSpec extends ObjectBehavior
{
    function let(IntToStringConverterInterface $converter): void
    {
        $this->beConstructedWith($converter);
    }
    function it_is_initializable(): void
    {
        $this->shouldBeAnInstanceOf(CalculateTaxAmount::class);
    }

    function it_should_implement_interface(): void
    {
        $this->shouldImplement(CalculateTaxAmountInterface::class);
    }

    function it_should_calculate(
        IntToStringConverterInterface $converter
    ): void
    {
        $taxRateAmount = 15.5;
        $amount = 2;
        $shippingTaxAmount = round($amount - ($amount / (1 + $taxRateAmount)));

        $converter->convertIntToString((int) $shippingTaxAmount,10)->willReturn('0.5');

        $this->calculate(15.5,2)->shouldBeString();

    }
}
