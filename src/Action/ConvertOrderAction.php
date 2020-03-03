<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action;

use BitBag\SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use BitBag\SyliusMolliePlugin\Calculator\CalculateShippingTaxAmount;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactoryInterface;
use BitBag\SyliusMolliePlugin\Helper\IntToStringConverter;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Request\Convert;
use Payum\Core\Request\GetCurrency;
use Sylius\Bundle\PayumBundle\Provider\PaymentDescriptionProviderInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\ShipmentInterface;
use Sylius\Component\Core\Model\TaxRateInterface;

final class ConvertOrderAction extends BaseApiAwareAction implements ActionInterface, GatewayAwareInterface, ApiAwareInterface
{
    use GatewayAwareTrait;

    /** @var PaymentDescriptionProviderInterface */
    private $paymentDescriptionProvider;

    /** @var IntToStringConverter */
    private $converter;

    /** @var CalculateShippingTaxAmount */
    private $calculateShippingTaxAmount;

    public function __construct(
        PaymentDescriptionProviderInterface $paymentDescriptionProvider,
        IntToStringConverter $converter,
        CalculateShippingTaxAmount $calculateShippingTaxAmount
    ) {
        $this->paymentDescriptionProvider = $paymentDescriptionProvider;
        $this->converter = $converter;
        $this->calculateShippingTaxAmount = $calculateShippingTaxAmount;
    }

    /**
     * @param Convert $request
     */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        /** @var PaymentInterface $payment */
        $payment = $request->getSource();

        /** @var OrderInterface $order */
        $order = $payment->getOrder();

        $customer = $order->getCustomer();

        $this->gateway->execute($currency = new GetCurrency($payment->getCurrencyCode()));

        $divisor = 10 ** $currency->exp;

        $amount = $this->converter->convertIntToString($order->getTotal(), $divisor);

        $details = [
            'amount' => [
                'value' => (string) $amount,
                'currency' => $currency->code,
            ],
            'shippingAddress' => [
                'streetAndNumber' => $order->getShippingAddress()->getStreet(),
                'postalCode' => $order->getShippingAddress()->getPostcode(),
                'city' => $order->getShippingAddress()->getCity(),
                'country' => $order->getShippingAddress()->getCountryCode(),
                'givenName' => $order->getShippingAddress()->getFirstName(),
                'familyName' => $order->getShippingAddress()->getLastName(),
                'email' => $customer->getEmail(),
            ],
            'billingAddress' => [
                'streetAndNumber' => $order->getBillingAddress()->getStreet(),
                'postalCode' => $order->getBillingAddress()->getPostcode(),
                'city' => $order->getBillingAddress()->getCity(),
                'country' => $order->getBillingAddress()->getCountryCode(),
                'givenName' => $order->getBillingAddress()->getFirstName(),
                'familyName' => $order->getBillingAddress()->getLastName(),
                'email' => $customer->getEmail(),
            ],
            'metadata' => [
                'order_id' => $order->getId(),
            ],
            'locale' => true === in_array($order->getLocaleCode(), MollieGatewayFactoryInterface::LOCALES_AVAILABLE) ? $order->getLocaleCode() : 'en_US',
            'orderNumber' => (string) ($order->getId()),
        ];

        foreach ($order->getItems() as $item) {
            /** @var TaxRateInterface $taxCategory */
            $taxCategory = $item->getVariant()->getTaxCategory()->getRates()->first();

            $details['lines'][] = [
                'name' => $item->getProductName(),
                'quantity' => $item->getQuantity(),
                'vatRate' => (string) ($taxCategory->getAmount() * 100),
                'unitPrice' => [
                    'currency' => $order->getCurrencyCode(),
                    'value' => $this->converter->convertIntToString($item->getUnitPrice(), $divisor),
                ],
                'totalAmount' => [
                    'currency' => $order->getCurrencyCode(),
                    'value' => $this->converter->convertIntToString($item->getTotal(), $divisor),
                ],
                'vatAmount' => [
                    'currency' => $order->getCurrencyCode(),
                    'value' => $this->converter->convertIntToString($item->getTaxTotal(), $divisor),
                ],
            ];
        }

        /** @var ShipmentInterface $shipment */
        if (false !== $shipment = $order->getShipments()->first()) {
            /** @var TaxRateInterface $shippingTaxRate */
            $shippingTaxRate = !empty($shipment->getMethod()->getTaxCategory()) ? $shipment->getMethod()->getTaxCategory()->getRates()->first() : false;

            $details['lines'][] = [
                'type' => 'shipping_fee',
                'name' => 'Shipping fee',
                'quantity' => 1,
                'vatRate' => false !== $shippingTaxRate ? (string) ($shippingTaxRate->getAmount() * 100) : '0.00',
                'unitPrice' => [
                    'currency' => $order->getCurrencyCode(),
                    'value' => $this->converter->convertIntToString($order->getShippingTotal(), $divisor),
                ],
                'totalAmount' => [
                    'currency' => $order->getCurrencyCode(),
                    'value' => $this->converter->convertIntToString($order->getShippingTotal(), $divisor),
                ],
                'vatAmount' => [
                    'currency' => $order->getCurrencyCode(),
                    'value' => false !== $shippingTaxRate ? $this->calculateShippingTaxAmount->calculate($shippingTaxRate, $order->getShippingTotal()) : '0.00',
                ],
            ];
        }

        $request->setResult($details);
    }

    public function supports($request): bool
    {
        return
            $request instanceof Convert &&
            $request->getSource() instanceof PaymentInterface &&
            $request->getTo() === 'array';
    }
}
