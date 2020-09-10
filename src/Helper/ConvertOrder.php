<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Helper;

use BitBag\SyliusMolliePlugin\Calculator\CalculateShippingTaxAmountInterface;
use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use BitBag\SyliusMolliePlugin\Resolver\TaxShipmentResolverInterface;
use BitBag\SyliusMolliePlugin\Resolver\TaxUnitItemResolverInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\ProductVariantInterface;
use Sylius\Component\Core\Model\ShipmentInterface;
use Sylius\Component\Customer\Model\CustomerInterface;
use Sylius\Component\Order\Model\Adjustment;

final class ConvertOrder implements ConvertOrderInterface
{
    /** @var OrderInterface */
    private $order;

    /** @var IntToStringConverter */
    private $intToStringConverter;

    /** @var CalculateShippingTaxAmountInterface */
    private $calculateShippingTaxAmount;

    /** @var TaxUnitItemResolverInterface */
    private $taxUnitItemResolver;

    /** @var TaxShipmentResolverInterface */
    private $taxShipmentResolver;

    public function __construct(
        IntToStringConverter $intToStringConverter,
        CalculateShippingTaxAmountInterface $calculateShippingTaxAmount,
        TaxUnitItemResolverInterface $taxUnitItemResolver,
        TaxShipmentResolverInterface $taxShipmentResolver
    ) {
        $this->intToStringConverter = $intToStringConverter;
        $this->calculateShippingTaxAmount = $calculateShippingTaxAmount;
        $this->taxUnitItemResolver = $taxUnitItemResolver;
        $this->taxShipmentResolver = $taxShipmentResolver;
    }

    public function convert(OrderInterface $order, array $details, int $divisor): array
    {
        $this->order = $order;

        $customer = $order->getCustomer();
        $amount = $this->intToStringConverter->convertIntToString($order->getTotal(), $divisor);

        $details['amount']['value'] = $amount;
        $details['orderNumber'] = (string) ($order->getId());
        $details['shippingAddress'] = $this->createShippingAddress($customer);
        $details['billingAddress'] = $this->createBillingAddress($customer);
        $details['lines'] = $this->createLines($divisor);
        $details['lines'] = array_merge($details['lines'], $this->createShippingFee($divisor));

        return $details;
    }

    private function createShippingAddress(CustomerInterface $customer): array
    {
        return [
            'streetAndNumber' => $this->order->getShippingAddress()->getStreet(),
            'postalCode' => $this->order->getShippingAddress()->getPostcode(),
            'city' => $this->order->getShippingAddress()->getCity(),
            'country' => $this->order->getShippingAddress()->getCountryCode(),
            'givenName' => $this->order->getShippingAddress()->getFirstName(),
            'familyName' => $this->order->getShippingAddress()->getLastName(),
            'email' => $customer->getEmail(),
        ];
    }

    private function createBillingAddress(CustomerInterface $customer): array
    {
        return [
            'streetAndNumber' => $this->order->getBillingAddress()->getStreet(),
            'postalCode' => $this->order->getBillingAddress()->getPostcode(),
            'city' => $this->order->getBillingAddress()->getCity(),
            'country' => $this->order->getBillingAddress()->getCountryCode(),
            'givenName' => $this->order->getBillingAddress()->getFirstName(),
            'familyName' => $this->order->getBillingAddress()->getLastName(),
            'email' => $customer->getEmail(),
        ];
    }

    private function createLines(int $divisor): array
    {
        $details = [];
        $this->order->getChannel()->getDefaultTaxZone();
        foreach ($this->order->getItems() as $item) {
            $details[] = [
                'name' => $item->getProductName(),
                'quantity' => $item->getQuantity(),
                'vatRate' => (string) ($this->getTaxRatesUnitItem($item->getVariant()) * 100),
                'unitPrice' => [
                    'currency' => $this->order->getCurrencyCode(),
                    'value' => $this->intToStringConverter->convertIntToString($item->getUnitPrice(), $divisor),
                ],
                'totalAmount' => [
                    'currency' => $this->order->getCurrencyCode(),
                    'value' => $this->intToStringConverter->convertIntToString($item->getTotal(), $divisor),
                ],
                'vatAmount' => [
                    'currency' => $this->order->getCurrencyCode(),
                    'value' => $this->intToStringConverter->convertIntToString($item->getTaxTotal(), $divisor),
                ],
                'metadata' => [
                    'item_id' => $item->getId(),
                ]
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
        if (false !== $this->order->getShipments()->first()) {
            $details[] = [
                'type' => self::SHIPPING_TYPE,
                'name' => self::SHIPPING_FEE,
                'quantity' => 1,
                'vatRate' => (string) ($this->getTaxRatesShipments() * 100),
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
                    'value' => false !== $this->getTaxRatesShipments() ? $this->calculateShippingTaxAmount->calculate($this->getTaxRatesShipments(), $this->order->getShippingTotal()) : '0.00',
                ],
            ];
        }

        return $details;
    }

    private function getTaxRatesUnitItem(ProductVariantInterface $itemVariant): float
    {
        $taxRate = $this->taxUnitItemResolver->resolve($this->order, $itemVariant);

        if (null === $taxRate) {
            throw new \LogicException('Merchant could not assign tax rates to Items.');
        }

        return $taxRate->getAmount();
    }

    private function getTaxRatesShipments(): float
    {
        $taxRate = $this->taxShipmentResolver->resolve($this->order);

        if (null === $taxRate) {
            throw new \LogicException('Merchant could not assign tax rates to shipment.');
        }

        return $taxRate->getAmount();
    }
}
