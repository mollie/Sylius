<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver\ApplePayDirect;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Helper\ConvertOrderInterface;
use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use BitBag\SyliusMolliePlugin\Provider\Order\OrderPaymentApplePayDirectProvider;
use BitBag\SyliusMolliePlugin\Resolver\MollieApiClientKeyResolverInterface;
use Mollie\Api\Exceptions\ApiException;
use Mollie\Api\Types\OrderStatus;
use Mollie\Api\Types\PaymentMethod;
use Sylius\Component\Core\Model\PaymentInterface;

final class ApplePayDirectApiOrderPaymentResolver implements ApplePayDirectApiOrderPaymentResolverInterface
{
    /** @var MollieApiClient */
    private $mollieApiClient;

    /** @var MollieApiClientKeyResolverInterface */
    private $apiClientKeyResolver;

    /** @var ConvertOrderInterface */
    private $convertOrder;

    /** @var OrderPaymentApplePayDirectProvider */
    private $paymentApplePayDirectProvider;

    public function __construct(
        MollieApiClient $mollieApiClient,
        MollieApiClientKeyResolverInterface $apiClientKeyResolver,
        ConvertOrderInterface $convertOrder,
        OrderPaymentApplePayDirectProvider $paymentApplePayDirectProvider
    ) {
        $this->mollieApiClient = $mollieApiClient;
        $this->apiClientKeyResolver = $apiClientKeyResolver;
        $this->convertOrder = $convertOrder;
        $this->paymentApplePayDirectProvider = $paymentApplePayDirectProvider;
    }

    public function resolve(OrderInterface $order, MollieGatewayConfigInterface $mollieGatewayConfig, array $details): void
    {
        $this->apiClientKeyResolver->getClientWithKey();
        $details = $this->convertOrder->convert($order, $details, 100, $mollieGatewayConfig);
        $customer = $order->getCustomer();

        $orderExpiredTime = $mollieGatewayConfig->getOrderExpiration();
        if (null !== $orderExpiredTime) {
            $interval = new \DateInterval('P' . $orderExpiredTime . 'D');
            $dateExpired = new \DateTimeImmutable('now');
            $dateExpired = $dateExpired->add($interval);
        }

        /** @var PaymentInterface $payment */
        $payment = $order->getLastPayment();
        $refundToken = $payment->getDetails()['refund_token'];

        $metadata = [
            'order_id' => $order->getId(),
            'customer_id' => null !== $customer ? $customer->getId() : null,
            'molliePaymentMethods' => PaymentMethod::APPLEPAY,
            'refund_token' => $refundToken,
            'methodType' => Options::ORDER_API,
        ];

        try {
            $response = $this->mollieApiClient->orders->create(
                [
                    'method' => PaymentMethod::APPLEPAY,
                    'payment' => [
                        'applePayPaymentToken' => $details['applePayDirectToken'],
                    ],
                    'amount' => $details['amount'],
                    'billingAddress' => $details['billingAddress'],
                    'shippingAddress' => $details['shippingAddress'],
                    'locale' => $order->getLocaleCode(),
                    'orderNumber' => $details['orderNumber'],
                    'redirectUrl' => $details['backurl'],
                    'lines' => $details['lines'],
                    'metadata' => $metadata,
                    'expiresAt' => isset($dateExpired) ?
                        $dateExpired->format('Y-m-d') :
                        (new \DateTimeImmutable('now'))->format('Y-m-d'),
                ]
            );
            if ($response->status === OrderStatus::STATUS_PAID) {
                $this->paymentApplePayDirectProvider->applyRequiredTransition($payment, PaymentInterface::STATE_COMPLETED);

                $paymentDetails = $payment->getDetails();
                $paymentDetails['order_mollie_id'] = $response->id;
                $paymentDetails['metadata'] = $metadata;
                $payment->setDetails($paymentDetails);
            }
        } catch (ApiException $e) {
            throw new ApiException($e->getMessage());
        }
    }
}
