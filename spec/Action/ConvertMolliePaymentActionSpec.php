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

use BitBag\SyliusMolliePlugin\Action\ConvertMolliePaymentAction;
use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfig;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Helper\ConvertOrderInterface;
use BitBag\SyliusMolliePlugin\Resolver\PaymentLocaleResolverInterface;
use Payum\Core\Action\ActionInterface;
use Payum\Core\GatewayInterface;
use Payum\Core\Request\Convert;
use PhpSpec\ObjectBehavior;
use BitBag\SyliusMolliePlugin\Helper\PaymentDescriptionInterface;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Customer\Context\CustomerContextInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Tests\BitBag\SyliusMolliePlugin\Entity\GatewayConfig;

final class ConvertMolliePaymentActionSpec extends ObjectBehavior
{
    function let(
        PaymentDescriptionInterface $paymentDescriptionProvider,
        SessionInterface $session,
        RepositoryInterface $mollieMethodsRepository,
        ConvertOrderInterface $orderConverter,
        CustomerContextInterface $customerContext,
        PaymentLocaleResolverInterface $paymentLocaleResolver
    ): void {
        $this->beConstructedWith(
            $paymentDescriptionProvider,
            $session,
            $mollieMethodsRepository,
            $orderConverter,
            $customerContext,
            $paymentLocaleResolver
        );
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(ConvertMolliePaymentAction::class);
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
        PaymentDescriptionInterface $paymentDescriptionProvider,
        MollieGatewayConfigInterface $method,
        GatewayConfigInterface $gatewayConfig,
        RepositoryInterface $mollieMethodsRepository
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

        $paymentDescriptionProvider->getPaymentDescription($payment, $method, $order)->willReturn('description');
        $request->getSource()->willReturn($payment);
        $request->getTo()->willReturn('array');

        $payment->getDetails()->willReturn([
            'molliePaymentMethods' => 15,
            'cartToken' => 'token'
        ]);

        $request->setResult([
            'amount' => [
                'value' => '445535.00',
                'currency' => 'EUR',
            ],
            'description' => 'description',
            'metadata' => [
                'order_id' => 1,
                'customer_id' => 1,
                'molliePaymentMethods' => 15,
                'cartToken' => 'token',
                'selected_issuer' => null,
                'methodType' => 'Payments API',
            ],
            'full_name' => 'Jan Kowalski',
            'email' => 'shop@example.com',
            'customerId' => null
        ])->shouldBeCalled();

        $request->getSource()->willReturn($payment);



        $mollieMethodsRepository->findOneBy(['methodId' => 15])->willReturn($method);
        $method->getPaymentType()->willReturn('payment_type');
        $method->getGateway()->willReturn($gatewayConfig);
        $gatewayConfig->getConfig()->willReturn([]);

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
