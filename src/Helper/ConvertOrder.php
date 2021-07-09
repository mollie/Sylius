<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Helper;

use BitBag\SyliusMolliePlugin\Calculator\CalculateTaxAmountInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Order\AdjustmentInterface;
use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use BitBag\SyliusMolliePlugin\Resolver\MealVoucherResolverInterface;
use BitBag\SyliusMolliePlugin\Resolver\TaxShipmentResolverInterface;
use BitBag\SyliusMolliePlugin\Resolver\TaxUnitItemResolverInterface;
use Sylius\Component\Addressing\Matcher\ZoneMatcherInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItem;
use Sylius\Component\Core\Model\ShipmentInterface;
use Sylius\Component\Customer\Model\CustomerInterface;
use Sylius\Component\Order\Model\Adjustment;
use Sylius\Component\Taxation\Resolver\TaxRateResolverInterface;

final class ConvertOrder implements ConvertOrderInterface
{
    /** @var OrderInterface */
    private $order;

    /** @var IntToStringConverter */
    private $intToStringConverter;

    /** @var CalculateTaxAmountInterface */
    private $calculateTaxAmount;

    /** @var TaxUnitItemResolverInterface */
    private $taxUnitItemResolver;

    /** @var TaxShipmentResolverInterface */
    private $taxShipmentResolver;

    /** @var MealVoucherResolverInterface */
    private $mealVoucherResolver;

    /** @var TaxRateResolverInterface */
    private $taxRateResolver;

    /** @var ZoneMatcherInterface  */
    private $zoneMatcher;

    public function __construct(
        IntToStringConverter $intToStringConverter,
        CalculateTaxAmountInterface $calculateTaxAmount,
        TaxUnitItemResolverInterface $taxUnitItemResolver,
        TaxShipmentResolverInterface $taxShipmentResolver,
        MealVoucherResolverInterface $mealVoucherResolver,
        TaxRateResolverInterface $taxRateResolver,
        ZoneMatcherInterface $zoneMatcher
    ) {
        $this->intToStringConverter = $intToStringConverter;
        $this->calculateTaxAmount = $calculateTaxAmount;
        $this->taxUnitItemResolver = $taxUnitItemResolver;
        $this->taxShipmentResolver = $taxShipmentResolver;
        $this->mealVoucherResolver = $mealVoucherResolver;
        $this->taxRateResolver = $taxRateResolver;
        $this->zoneMatcher = $zoneMatcher;
    }

    public function convert(OrderInterface $order, array $details, int $divisor, MollieGatewayConfigInterface $method): array
    {
        $this->order = $order;

        $customer = $order->getCustomer();
        $amount = $this->intToStringConverter->convertIntToString($order->getTotal(), $divisor);

        $details['amount']['value'] = $amount;
        $details['orderNumber'] = (string) $order->getId();
        $details['shippingAddress'] = $this->createShippingAddress($customer);
        $details['billingAddress'] = $this->createBillingAddress($customer);
        $details['lines'] = $this->createLines($divisor, $method);
        $details['lines'] = array_merge($details['lines'], $this->createShippingFee($divisor));

        return $details;
    }

    private function createShippingAddress(CustomerInterface $customer): array
    {
        $shippingAddress = $this->order->getShippingAddress();

        return [
            'streetAndNumber' => $shippingAddress->getStreet(),
            'postalCode' => $shippingAddress->getPostcode(),
            'city' => $shippingAddress->getCity(),
            'country' => $shippingAddress->getCountryCode(),
            'givenName' => $shippingAddress->getFirstName(),
            'familyName' => $shippingAddress->getLastName(),
            'email' => $customer->getEmail(),
        ];
    }

    private function createBillingAddress(CustomerInterface $customer): array
    {
        $billingAddress = $this->order->getBillingAddress();

        return [
            'streetAndNumber' => $billingAddress->getStreet(),
            'postalCode' => $billingAddress->getPostcode(),
            'city' => $billingAddress->getCity(),
            'country' => $billingAddress->getCountryCode(),
            'givenName' => $billingAddress->getFirstName(),
            'familyName' => $billingAddress->getLastName(),
            'email' => $customer->getEmail(),
        ];
    }

    private function createLines(int $divisor, MollieGatewayConfigInterface $method): array
    {
        $details = [];
        $this->order->getChannel()->getDefaultTaxZone();

        foreach ($this->order->getItems() as $item) {
            $details[] = [
                'category' => $this->mealVoucherResolver->resolve($method, $item),
                'type' => 'physical',
                'name' => $item->getProductName(),
                'quantity' => $item->getQuantity(),
                'vatRate' => null === $this->getTaxRatesUnitItem($item) ? '0.00' : (string) ($this->getTaxRatesUnitItem($item) * 100),
                'unitPrice' => [
                    'currency' => $this->order->getCurrencyCode(),
                    'value' => $this->intToStringConverter->convertIntToString($this->getUnitPriceWithTax($item), $divisor),
                ],
                'totalAmount' => [
                    'currency' => $this->order->getCurrencyCode(),
                    'value' => $this->intToStringConverter->convertIntToString($item->getTotal(), $divisor),
                ],
                'vatAmount' => [
                    'currency' => $this->order->getCurrencyCode(),
                    'value' => null === $this->getTaxRatesUnitItem($item) ?
                        '0.00' :
                        $this->calculateTaxAmount->calculate($this->getTaxRatesUnitItem($item), $item->getTotal()),
                ],
                'discountAmount' => [
                    'currency' => $this->order->getCurrencyCode(),
                    'value' => $this->intToStringConverter->convertIntToString($this->getItemDiscountAmount($item), $divisor),
                ],
                'metadata' => [
                    'item_id' => $item->getId(),
                ],
            ];
        }

        foreach ($this->order->getAdjustments() as $adjustment) {
            if (array_search($adjustment->getType(), Options::getAvailablePaymentSurchargeFeeType())) {
                $details[] = $this->createAdjustments($adjustment, $divisor);
            }
        }

        return $details;
    }

    private function createAdjustments(Adjustment $adjustment, int $divisor): array
    {
        return [
            'type' => self::PAYMENT_FEE_TYPE,
            'name' => self::PAYMENT_FEE,
            'quantity' => 1,
            'vatRate' => '0.00',
            'unitPrice' => [
                'currency' => $this->order->getCurrencyCode(),
                'value' => $this->intToStringConverter->convertIntToString($adjustment->getAmount(), $divisor),
            ],
            'totalAmount' => [
                'currency' => $this->order->getCurrencyCode(),
                'value' => $this->intToStringConverter->convertIntToString($adjustment->getAmount(), $divisor),
            ],
            'vatAmount' => [
                'currency' => $this->order->getCurrencyCode(),
                'value' => '0.00',
            ],
        ];
    }

    private function createShippingFee(int $divisor): array
    {
        $details = [];

        /** @var ShipmentInterface $shipment */
        $shipment = $this->order->getShipments()->first();

        if (false !== $shipment) {
            $details[] = [
                'type' => self::SHIPPING_TYPE,
                'name' => self::SHIPPING_FEE,
                'quantity' => 1,
                'vatRate' => null === $this->getTaxRatesShipments() ? '0.00' : (string) ($this->getTaxRatesShipments() * 100),
                'unitPrice' => [
                    'currency' => $this->order->getCurrencyCode(),
                    'value' => $this->intToStringConverter->convertIntToString($this->order->getShippingTotal(), $divisor),
                ],
                'totalAmount' => [
                    'currency' => $this->order->getCurrencyCode(),
                    'value' => $this->intToStringConverter->convertIntToString($this->order->getShippingTotal(), $divisor),
                ],
                'vatAmount' => [
                    'currency' => $this->order->getCurrencyCode(),
                    'value' => null === $this->getTaxRatesShipments() ? '0.00' : $this->calculateTaxAmount->calculate($this->getTaxRatesShipments(), $this->order->getShippingTotal()),
                ],
            ];
        }

        return $details;
    }

    private function getTaxRatesUnitItem(OrderItem $item): ?float
    {
        return $this->taxUnitItemResolver->resolve($this->order, $item);
    }

    private function getTaxRatesShipments(): ?float
    {
        return $this->taxShipmentResolver->resolve($this->order);
    }

    private function getUnitPriceWithTax(OrderItem $item): int
    {
        $zone = $this->zoneMatcher->match($this->order->getBillingAddress());
        $taxRate = $this->taxRateResolver->resolve($item->getVariant(), ['zone' => $zone]);

        if ($taxRate === null) {
            return $item->getUnitPrice();
        }

        if ($taxRate->isIncludedInPrice()) {
            return $item->getUnitPrice();
        }

        return (int) round($item->getUnitPrice() + ($item->getTaxTotal() / $item->getQuantity()));
    }

    private function getItemDiscountAmount(OrderItem $item): int
    {
        $totalDiscount = 0;

        foreach (self::ITEM_DISCOUNT_ADJUSTMENTS_TYPES as $adjustmentType) {
            $totalDiscount += $item->getAdjustmentsTotalRecursively($adjustmentType);
        }

        return $totalDiscount;
    }
}
