<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

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
