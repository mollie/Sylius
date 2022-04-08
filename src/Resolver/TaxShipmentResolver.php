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
use Sylius\Component\Core\Model\ShipmentInterface;
use Sylius\Component\Core\Model\ShippingMethodInterface;
use Sylius\Component\Taxation\Calculator\CalculatorInterface;
use Sylius\Component\Taxation\Resolver\TaxRateResolverInterface;

final class TaxShipmentResolver implements TaxShipmentResolverInterface
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

    public function resolve(OrderInterface $order): ?float
    {
        $shippingMethod = $this->getShippingMethod($order);
        $rate = $this->taxRateResolver->resolve($shippingMethod);

        return null === $rate ? null : $rate->getAmount();
    }

    private function getShippingMethod(OrderInterface $order): ShippingMethodInterface
    {
        $shipmentCollection = $order->getShipments();
        if ($shipmentCollection->isEmpty()) {
            throw new \LogicException('Order should have at least one shipment.');
        }

        /** @var ShipmentInterface $shipment */
        $shipment = $shipmentCollection->first();

        /** @var ShippingMethodInterface $method */
        $method = $shipment->getMethod();

        return $method;
    }
}
