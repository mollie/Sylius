<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Action;

use BitBag\SyliusMolliePlugin\Action\ConvertPaymentAction;
use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use Payum\Core\Action\ActionInterface;
use Payum\Core\GatewayInterface;
use Payum\Core\Request\Convert;
use PhpSpec\ObjectBehavior;
use Sylius\Bundle\PayumBundle\Provider\PaymentDescriptionProviderInterface;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;

final class ConvertPaymentActionSpec extends ObjectBehavior
{
    function let(PaymentDescriptionProviderInterface $paymentDescriptionProvider): void
    {
        $this->beConstructedWith($paymentDescriptionProvider);
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(ConvertPaymentAction::class);
    }

    function it_implements_action_interface(): void
    {
        $this->shouldHaveType(ActionInterface::class);
    }

    function it_executes(
        Convert $request,
        PaymentInterface $payment,
        OrderInterface $order,
        CustomerInterface $customer,
        GatewayInterface $gateway,
        MollieApiClient $mollieApiClient,
        PaymentDescriptionProviderInterface $paymentDescriptionProvider
    ): void {
        $mollieApiClient->isRecurringSubscription()->willReturn(false);
        $this->setApi($mollieApiClient);
        $this->setGateway($gateway);
        $customer->getFullName()->willReturn('Jan Kowalski');
        $customer->getEmail()->willReturn('shop@example.com');
        $customer->getId()->willReturn(1);
        $order->getId()->willReturn(1);
        $order->getLocaleCode()->willReturn('pl_PL');
        $order->getCustomer()->willReturn($customer);
        $payment->getOrder()->willReturn($order);
        $payment->getAmount()->willReturn(445535);
        $payment->getCurrencyCode()->willReturn('EUR');
        $paymentDescriptionProvider->getPaymentDescription($payment)->willReturn('description');
        $request->getSource()->willReturn($payment);
        $request->getTo()->willReturn('array');

        $request->setResult([
            'amount' => [
                'value' => '445535',
                'currency' => 'EUR',
            ],
            'description' => 'description',
            'locale' => 'en_US',
            'metadata' => [
                'order_id' => 1,
                'customer_id' => 1,
            ],
            'full_name' => 'Jan Kowalski',
            'email' => 'shop@example.com',
        ])->shouldBeCalled();

        $this->execute($request);
    }

    function it_supports_only_convert_request_payment_source_and_array_to(
        Convert $request,
        PaymentInterface $payment
    ): void {
        $request->getSource()->willReturn($payment);
        $request->getTo()->willReturn('array');

        $this->supports($request)->shouldReturn(true);
    }
}
