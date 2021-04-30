<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Application\src\EventListener;

use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use Doctrine\Persistence\ObjectManager;
use Payum\Core\Model\GatewayConfigInterface;
use Payum\Core\Payum;
use Sylius\AdminOrderCreationPlugin\Provider\PaymentTokenProviderInterface;
use Sylius\AdminOrderCreationPlugin\Sender\OrderPaymentLinkSenderInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Webmozart\Assert\Assert;

final class PaymentLinkCreationListener
{
    /** @var PaymentTokenProviderInterface */
    private $paymentTokenProvider;

    /** @var ObjectManager */
    private $orderManager;

    /** @var OrderPaymentLinkSenderInterface */
    private $orderPaymentLinkSender;

    /** @var Payum */
    private $payum;

    public function __construct(
        PaymentTokenProviderInterface $paymentTokenProvider,
        ObjectManager $orderManager,
        OrderPaymentLinkSenderInterface $orderPaymentLinkSender,
        Payum $payum
    ) {
        $this->paymentTokenProvider = $paymentTokenProvider;
        $this->orderManager = $orderManager;
        $this->orderPaymentLinkSender = $orderPaymentLinkSender;
        $this->payum = $payum;
    }

    public function setPaymentLink(GenericEvent $event): void
    {
        /** @var OrderInterface $order */
        $order = $event->getSubject();
        Assert::isInstanceOf($order, OrderInterface::class);

        $payment = $order->getLastPayment(PaymentInterface::STATE_NEW);
        if (null === $payment) {
            return;
        }

        /** @var PaymentMethodInterface $paymentMethod */
        $paymentMethod = $payment->getMethod();
        /** @var GatewayConfigInterface $gatewayConfig */
        $gatewayConfig = $paymentMethod->getGatewayConfig();

        if ('offline' === $gatewayConfig->getGatewayName()) {
            return;
        }

        $token = $this->paymentTokenProvider->getPaymentToken($payment);

        if (MollieGatewayFactory::FACTORY_NAME === $paymentMethod->getGatewayConfig()->getFactoryName()) {
            $notifyToken = $this->payum->getTokenFactory()->createNotifyToken($token->getGatewayName(), $token->getDetails());
            $refundToken = $this->payum->getTokenFactory()->createRefundToken($token->getGatewayName(), $token->getDetails());

            $payment->setDetails([
                'payment_id' => $token->getDetails()->getId(),
                'backurl' => $token->getAfterUrl(),
                'webhookUrl' => $notifyToken->getTargetUrl(),
                'refund_token' => $refundToken->getHash(),
            ]);
        } else {
            $payment->setDetails(['payment-link' => $token->getAfterUrl()]);
        }

        $this->orderPaymentLinkSender->sendPaymentLink($order);
        $this->orderManager->flush();
    }
}
