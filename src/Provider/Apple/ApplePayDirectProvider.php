<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Provider\Apple;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Provider\Order\OrderPaymentApplePayDirectProviderInterface;
use BitBag\SyliusMolliePlugin\Resolver\Address\ApplePayAddressResolverInterface;
use Sylius\AdminOrderCreationPlugin\Provider\CustomerProviderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Order\Model\OrderInterface;
use Symfony\Component\HttpFoundation\Request;
use Webmozart\Assert\Assert;

final class ApplePayDirectProvider implements ApplePayDirectProviderInterface
{
    /** @var ApplePayAddressResolverInterface */
    private $applePayAddressResolver;

    /** @var MollieApiClient */
    private $mollieApiClient;

    /** @var OrderPaymentApplePayDirectProviderInterface */
    private $paymentApplePayDirectProvider;

    /** @var CustomerProviderInterface */
    private $customerProvider;

    /** @var ApplePayDirectPaymentProviderInterface */
    private $applePayDirectPaymentProvider;

    public function __construct(
        ApplePayAddressResolverInterface $applePayAddressResolver,
        MollieApiClient $mollieApiClient,
        OrderPaymentApplePayDirectProviderInterface $paymentApplePayDirectProvider,
        CustomerProviderInterface $customerProvider,
        ApplePayDirectPaymentProviderInterface $applePayDirectPaymentProvider
    ) {
        $this->applePayAddressResolver = $applePayAddressResolver;
        $this->mollieApiClient = $mollieApiClient;
        $this->paymentApplePayDirectProvider = $paymentApplePayDirectProvider;
        $this->customerProvider = $customerProvider;
        $this->applePayDirectPaymentProvider = $applePayDirectPaymentProvider;
    }

    public function provideOrder(OrderInterface $order, Request $request): void
    {
        $applePayPaymentToken = $request->get('token');
        $applePayAddress['shippingContact'] = $request->get('shippingContact');
        $applePayAddress['billingContact'] = $request->get('billingContact');

        Assert::notNull($applePayPaymentToken);
        Assert::notNull($applePayAddress['shippingContact']);
        Assert::notNull($applePayAddress['billingContact']);

        if (isset($applePayAddress['shippingContact']['emailAddress'])) {
            $applePayAddress['billingContact']['emailAddress'] = $applePayAddress['shippingContact']['emailAddress'];
        }

        $this->applePayAddressResolver->resolve($order, $applePayAddress);
        $this->paymentApplePayDirectProvider->provideOrderPayment($order, PaymentInterface::STATE_NEW);

        if (null !== $customer = $order->getShippingAddress()->getCustomer()) {
            $order->setCustomer($customer);
        }

        if (null === $order->getCustomer()) {
            $this->customerProvider->provideNewCustomer($applePayAddress['shippingContact']['emailAddress']);
        }

        $this->applePayDirectPaymentProvider->provideApplePayPayment($order, $applePayPaymentToken);
    }
}
