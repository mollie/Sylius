<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Calculator;

use BitBag\SyliusMolliePlugin\Entity\ProductVariantInterface as BitbagProductVariantInterface;
use Sylius\Component\Core\Calculator\ProductVariantPricesCalculatorInterface;
use Sylius\Component\Core\Model\ProductVariantInterface;

final class RecurringProductVariantCalculator implements ProductVariantPricesCalculatorInterface
{
    private ProductVariantPricesCalculatorInterface $decoratedService;

    public function __construct(ProductVariantPricesCalculatorInterface $decoratedService)
    {
        $this->decoratedService = $decoratedService;
    }

    public function calculate(ProductVariantInterface $productVariant, array $context): int
    {
        $price = $this->decoratedService->calculate($productVariant, $context);

        if (true === $this->isEligibleForCalculation($productVariant)) {
            return (int)round($price / $productVariant->getTimes(), 0, PHP_ROUND_HALF_DOWN);
        }

        return $price;
    }

    public function calculateOriginal(ProductVariantInterface $productVariant, array $context): int
    {
        $price = $this->decoratedService->calculateOriginal($productVariant, $context);

        if (true === $this->isEligibleForCalculation($productVariant)) {
            return (int)round($price / $productVariant->getTimes(), 0, PHP_ROUND_HALF_DOWN);
        }

        return $price;
    }

    private function isEligibleForCalculation(ProductVariantInterface $productVariant): bool
    {
        return true === $productVariant instanceof BitbagProductVariantInterface
            && $productVariant->isRecurring()
            && $productVariant->hasCompleteRecurringPrice()
            && null !== $productVariant->getTimes();
    }
}
