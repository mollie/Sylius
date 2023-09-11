<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Helper;

use Sylius\Component\Addressing\Model\ZoneInterface;
use Sylius\Component\Core\Model\Scope;
use Sylius\Component\Core\Model\ShippingMethodInterface;
use Sylius\Component\Taxation\Model\TaxRateInterface;
use SyliusMolliePlugin\Calculator\CalculateTaxAmountInterface;
use SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use SyliusMolliePlugin\Payments\PaymentTerms\Options;
use SyliusMolliePlugin\Resolver\MealVoucherResolverInterface;
use Sylius\Component\Addressing\Matcher\ZoneMatcherInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItem;
use Sylius\Component\Core\Model\ShipmentInterface;
use Sylius\Component\Customer\Model\CustomerInterface;
use Sylius\Component\Order\Model\Adjustment;
use Sylius\Component\Taxation\Resolver\TaxRateResolverInterface;
use Webmozart\Assert\Assert;

final class ConvertOrder implements ConvertOrderInterface
{
    /** @var OrderInterface */
    private $order;

    /** @var ZoneInterface */
    private $zone;

    /** @var IntToStringConverter */
    private $intToStringConverter;

    /** @var CalculateTaxAmountInterface */
    private $calculateTaxAmount;

    /** @var MealVoucherResolverInterface */
    private $mealVoucherResolver;

    /** @var TaxRateResolverInterface */
    private $taxRateResolver;

    /** @var ZoneMatcherInterface */
    private $zoneMatcher;

    public function __construct(
        IntToStringConverter $intToStringConverter,
        CalculateTaxAmountInterface $calculateTaxAmount,
        MealVoucherResolverInterface $mealVoucherResolver,
        TaxRateResolverInterface $taxRateResolver,
        ZoneMatcherInterface $zoneMatcher
    ) {
        $this->intToStringConverter = $intToStringConverter;
        $this->calculateTaxAmount = $calculateTaxAmount;
        $this->mealVoucherResolver = $mealVoucherResolver;
        $this->taxRateResolver = $taxRateResolver;
        $this->zoneMatcher = $zoneMatcher;
    }

    public function convert(
        OrderInterface $order,
        array $details,
        int $divisor,
        MollieGatewayConfigInterface $method
    ): array {
        $this->order = $order;

        Assert::notNull($this->order->getBillingAddress());
        $this->zone = $this->zoneMatcher->match($this->order->getBillingAddress(), Scope::TAX);

        if(null === $this->zone && null !== $this->order->getChannel())
        {
            Assert::notNull($this->order->getChannel());
            $this->zone = $this->order->getChannel()->getDefaultTaxZone();
        }

        $customer = $order->getCustomer();

        Assert::notNull($customer);
        $amount = $this->intToStringConverter->convertIntToString($order->getTotal(), $divisor);

        $details['amount']['value'] = $amount;
        $details['orderNumber'] = (string) $order->getNumber();
        $details['shippingAddress'] = $this->createShippingAddress($customer);
        $details['billingAddress'] = $this->createBillingAddress($customer);
        $details['lines'] = $this->createLines($divisor, $method);
        $details['lines'] = array_merge($details['lines'], $this->createShippingFee($divisor));

        return $details;
    }

    private function createShippingAddress(CustomerInterface $customer): array
    {
        $shippingAddress = $this->order->getShippingAddress();

        Assert::notNull($shippingAddress);

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

        Assert::notNull($billingAddress);

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

        /** @var OrderItem $item */
        foreach ($this->order->getItems() as $item) {
            $taxRate = $this->taxRateResolver->resolve($item->getVariant(), [self::TAX_RATE_CRITERIA_ZONE => $this->zone]);
            $details[] = [
                'category' => $this->mealVoucherResolver->resolve($method, $item),
                'type' => 'physical',
                'name' => $item->getProductName(),
                'quantity' => $item->getQuantity(),
                'vatRate' => null === $taxRate ? '0.00' : (string) $taxRate->getAmountAsPercentage(),
                'unitPrice' => [
                    'currency' => $this->order->getCurrencyCode(),
                    'value' => $this->intToStringConverter->convertIntToString($this->getUnitPriceWithTax($item, $taxRate), $divisor),
                ],
                'totalAmount' => [
                    'currency' => $this->order->getCurrencyCode(),
                    'value' => $this->intToStringConverter->convertIntToString($item->getTotal(), $divisor),
                ],
                'vatAmount' => [
                    'currency' => $this->order->getCurrencyCode(),
                    'value' => null === $taxRate ?
                        '0.00' :
                        $this->calculateTaxAmount->calculate($taxRate->getAmount(), $item->getTotal()),
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

        /** @var Adjustment $adjustment */
        foreach ($this->order->getAdjustments() as $adjustment) {
            if (false !== array_search($adjustment->getType(), Options::getAvailablePaymentSurchargeFeeType(), true)) {
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

        /** @var ShipmentInterface|bool $shipment */
        $shipment = $this->order->getShipments()->first();

        if (false !== $shipment) {
            /** @var ShippingMethodInterface $shipmentMethod */
            $shipmentMethod = $shipment->getMethod();
            $taxRate = $this->taxRateResolver->resolve($shipmentMethod, [self::TAX_RATE_CRITERIA_ZONE => $this->zone]);
            $details[] = [
                'type' => self::SHIPPING_TYPE,
                'name' => self::SHIPPING_FEE,
                'quantity' => 1,
                'vatRate' => null === $taxRate ? '0.00' : (string) $taxRate->getAmountAsPercentage(),
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
                    'value' => null === $taxRate ? '0.00' : $this->calculateTaxAmount->calculate($taxRate->getAmount(), $this->order->getShippingTotal()),
                ],
            ];
        }

        return $details;
    }

    private function getUnitPriceWithTax(OrderItem $item, ?TaxRateInterface $taxRate): int
    {
        if (null === $taxRate) {
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
