<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\PaymentProcessing;

use BitBag\SyliusMolliePlugin\Entity\SubscriptionInterface;
use BitBag\SyliusMolliePlugin\MollieSubscriptionGatewayFactory;
use BitBag\SyliusMolliePlugin\PaymentProcessing\CancelRecurringSubscriptionProcessor;
use BitBag\SyliusMolliePlugin\PaymentProcessing\CancelRecurringSubscriptionProcessorInterface;
use Payum\Core\GatewayInterface;
use Payum\Core\Model\GatewayConfigInterface;
use Payum\Core\Payum;
use PhpSpec\ObjectBehavior;
use Prophecy\Argument;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Symfony\Component\HttpFoundation\Session\Session;

final class CancelRecurringSubscriptionProcessorSpec extends ObjectBehavior
{
    function let(Payum $payum, Session $session): void
    {
        $this->beConstructedWith($payum, $session);
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(CancelRecurringSubscriptionProcessor::class);
    }

    function it_implements_cancel_recurring_subscription_processor_interface(): void
    {
        $this->shouldHaveType(CancelRecurringSubscriptionProcessorInterface::class);
    }

    function it_processes(
        SubscriptionInterface $subscription,
        OrderInterface $order,
        PaymentInterface $payment,
        PaymentMethodInterface $paymentMethod,
        GatewayConfigInterface $gatewayConfig,
        Payum $payum,
        GatewayInterface $gateway
    ): void {
        $gatewayConfig->getFactoryName()->willReturn(MollieSubscriptionGatewayFactory::FACTORY_NAME);
        $gatewayConfig->getGatewayName()->willReturn(MollieSubscriptionGatewayFactory::FACTORY_NAME);

        $paymentMethod->getGatewayConfig()->willReturn($gatewayConfig);

        $payment->getMethod()->willReturn($paymentMethod);

        $order->getLastPayment()->willReturn($payment);

        $subscription->getOrder()->willReturn($order);

        $payum->getGateway(MollieSubscriptionGatewayFactory::FACTORY_NAME)->willReturn($gateway);

        $gateway->execute(Argument::any())->shouldBeCalled();

        $this->process($subscription);
    }
}
