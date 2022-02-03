<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Calculator;

use BitBag\SyliusMolliePlugin\Calculator\RecurringProductVariantCalculator;
use BitBag\SyliusMolliePlugin\Entity\ProductVariantInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Core\Calculator\ProductVariantPricesCalculatorInterface;

final class RecurringProductVariantCalculatorSpec extends ObjectBehavior
{
    function let(ProductVariantPricesCalculatorInterface $calculator): void
    {
        $this->beConstructedWith($calculator);
    }

    function it_is_initializable(): void
    {
        $this->shouldBeAnInstanceOf(RecurringProductVariantCalculator::class);
    }

    function it_implements_interface(): void
    {
        $this->shouldImplement(ProductVariantPricesCalculatorInterface::class);
    }

    function it_should_calculate_when_is_eligible_for_calculation(
        ProductVariantPricesCalculatorInterface $calculator,
        ProductVariantInterface $variant
    ): void
    {
        $variant->getTimes()->willReturn(3);
        $variant->isRecurring()->willReturn(true);
        $variant->hasCompleteRecurringPrice()->willReturn(true);

        $calculator->calculate($variant, ['chanel'=>'en_US'])->willReturn(25);
        $this->calculate($variant, ['chanel'=>'en_US'])->shouldReturn(8);
    }

    function it_should_calculate_when_is_not_eligible_for_calculation(
        ProductVariantPricesCalculatorInterface $calculator,
        ProductVariantInterface $variant
    ): void
    {
        $variant->getTimes()->willReturn(3);
        $variant->isRecurring()->willReturn(false);
        $variant->hasCompleteRecurringPrice()->willReturn(true);

        $calculator->calculate($variant, ['chanel'=>'en_US'])->willReturn(25);
        $this->calculate($variant, ['chanel'=>'en_US'])->shouldReturn(25);
    }

    function it_should_calculate_original_when_is_eligible_for_calculation(
        ProductVariantPricesCalculatorInterface $calculator,
        ProductVariantInterface $variant
    ): void {
        $variant->getTimes()->willReturn(4);
        $variant->isRecurring()->willReturn(true);
        $variant->hasCompleteRecurringPrice()->willReturn(true);

        $calculator->calculateOriginal($variant, ['chanel'=>'en_US'])->willReturn(25);
        $this->calculateOriginal($variant, ['chanel'=>'en_US'])->shouldReturn(6);
    }

    function it_should_calculate_original_when_is_not_eligible_for_calculation(
        ProductVariantPricesCalculatorInterface $calculator,
        ProductVariantInterface $variant
    ): void {
        $variant->getTimes()->willReturn(4);
        $variant->isRecurring()->willReturn(true);
        $variant->hasCompleteRecurringPrice()->willReturn(false);

        $calculator->calculateOriginal($variant, ['chanel'=>'en_US'])->willReturn(25);
        $this->calculateOriginal($variant, ['chanel'=>'en_US'])->shouldReturn(25);
    }
}
