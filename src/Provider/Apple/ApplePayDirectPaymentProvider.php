<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Provider\Apple;

use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Resolver\ApplePayDirect\ApplePayDirectPaymentTypeResolverInterface;
use Doctrine\Common\Collections\Collection;
use Mollie\Api\Types\PaymentMethod;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Webmozart\Assert\Assert;

final class ApplePayDirectPaymentProvider implements ApplePayDirectPaymentProviderInterface
{
    /** @var ApplePayDirectPaymentTypeResolverInterface */
    private $applePayDirectPaymentTypeResolver;

    public function __construct(ApplePayDirectPaymentTypeResolverInterface $applePayDirectPaymentTypeResolver)
    {
        $this->applePayDirectPaymentTypeResolver = $applePayDirectPaymentTypeResolver;
    }

    public function provideApplePayPayment(OrderInterface $order, array $applePayPaymentToken): void
    {
        /** @var PaymentInterface $payment */
        $payment = $order->getLastPayment();
        /** @var PaymentMethodInterface $paymentMethod */
        $paymentMethod = $payment->getMethod();
        /** @var GatewayConfigInterface $gatewayConfig */
        $gatewayConfig = $paymentMethod->getGatewayConfig();

        /** @var Collection $mollieGatewayConfig */
        $mollieGatewayConfig = $gatewayConfig->getMollieGatewayConfig();
        if ($mollieGatewayConfig->isEmpty()) {
            return;
        }

        $applePayConfig = $gatewayConfig->getMethodByName(PaymentMethod::APPLEPAY);
        Assert::notNull($applePayConfig);

        if (!$applePayConfig->isEnabled()) {
            return;
        }

        $this->applePayDirectPaymentTypeResolver->resolve($applePayConfig, $payment, $applePayPaymentToken);
    }
}
