<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver;

use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItem;
use Sylius\Component\Taxation\Calculator\CalculatorInterface;
use Sylius\Component\Taxation\Resolver\TaxRateResolverInterface;
use Webmozart\Assert\Assert;

final class TaxUnitItemResolver implements TaxUnitItemResolverInterface
{
    /** @var TaxRateResolverInterface */
    private $taxRateResolver;

    /** @var CalculatorInterface */
    private $calculator;

    public function __construct(
        TaxRateResolverInterface $taxRateResolver,
        CalculatorInterface $calculator
    ) {
        $this->taxRateResolver = $taxRateResolver;
        $this->calculator = $calculator;
    }

    public function resolve(OrderInterface $order, OrderItem $item): ?float
    {
        Assert::notNull($item->getVariant());
        $rate = $this->taxRateResolver->resolve($item->getVariant());

        return null === $rate ? null : $rate->getAmount();
    }
}
