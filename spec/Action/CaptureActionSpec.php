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

use BitBag\SyliusMolliePlugin\Action\CaptureAction;
use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use BitBag\SyliusMolliePlugin\Request\Api\CreateCustomer;
use BitBag\SyliusMolliePlugin\Request\Api\CreateInternalRecurring;
use BitBag\SyliusMolliePlugin\Request\Api\CreateOrder;
use BitBag\SyliusMolliePlugin\Request\Api\CreatePayment;
use BitBag\SyliusMolliePlugin\Request\Api\CreateSubscriptionPayment;
use Mollie\Api\Endpoints\PaymentEndpoint;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RuntimeException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayInterface;
use Payum\Core\Payum;
use Payum\Core\Request\Capture;
use Payum\Core\Security\GenericTokenFactory;
use Payum\Core\Security\GenericTokenFactoryAwareInterface;
use Payum\Core\Security\TokenInterface;
use Payum\Core\Storage\IdentityInterface;
use PhpSpec\ObjectBehavior;
use Psr\Log\InvalidArgumentException;
use Sylius\Component\Core\Model\PaymentInterface;

final class CaptureActionSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(CaptureAction::class);
    }

    function it_implements_action_interface(): void
    {
        $this->shouldHaveType(ActionInterface::class);
    }

    function it_implements_generic_token_factory_aware(): void
    {
        $this->shouldHaveType(GenericTokenFactoryAwareInterface::class);
    }

    function it_implements_api_aware_interface(): void
    {
        $this->shouldHaveType(ApiAwareInterface::class);
    }

    function it_implements_gateway_aware_interface(): void
    {
        $this->shouldHaveType(GatewayAwareInterface::class);
    }

    function it_executes_with_null_factory(
        Capture $request,
        ArrayObject $details,
        TokenInterface $token,
        GatewayInterface $gateway,
        MollieApiClient $mollieApiClient,
        IdentityInterface $identity
    ): void {
        $this->setGateway($gateway);
        $mollieApiClient->isRecurringSubscription()->willReturn(true);
        $this->setApi($mollieApiClient);
        $request->getToken()->willReturn($token);
        $token->getGatewayName()->willReturn('test');
        $token->getDetails()->willReturn($identity);
        $request->getModel()->willReturn($details);

        $this->setGenericTokenFactory();
        $this->shouldThrow( new RuntimeException())->during('execute',[$request]);
    }

    function it_executes_with_subscription_mollie_id_true(
        Capture $request,
        ArrayObject $details,
        PaymentInterface $payment,
        TokenInterface $token,
        TokenInterface $notifyToken,
        TokenInterface $refundToken,
        TokenInterface $cancelToken,
        Payum $payum,
        GenericTokenFactory $genericTokenFactory,
        GatewayInterface $gateway,
        MollieApiClient $mollieApiClient,
        IdentityInterface $identity
    ): void {
        $this->setGateway($gateway);
        $mollieApiClient->isRecurringSubscription()->willReturn(true);
        $this->setApi($mollieApiClient);
        $request->getToken()->willReturn($token);
        $token->getGatewayName()->willReturn('test');
        $token->getDetails()->willReturn($identity);

        $genericTokenFactory->createNotifyToken('test', $identity)->willReturn($notifyToken);
        $notifyToken->getTargetUrl()->willReturn('url');
        $notifyToken->getHash()->willReturn('test');

        $genericTokenFactory->createRefundToken('test', $identity)->willReturn($refundToken);
        $refundToken->getHash()->willReturn('refund_token_hash');

        $this->setGenericTokenFactory($genericTokenFactory);
        $payum->getTokenFactory()->willReturn($genericTokenFactory);

        $details->toUnsafeArray()->willReturn([]);
        $request->getModel()->willReturn($details);
        $request->getFirstModel()->willReturn($payment);

        $token->getTargetUrl()->willReturn('url');
        $token->getAfterUrl()->willReturn('url');
        $token->getHash()->willReturn('test');

        $details->offsetGet('metadata')->willReturn([
            'refund_token' => [
                'refund_token_hash'
            ],
            'cancel_token' => [
                'cancel_hash'
            ],
            'methodType' => Options::ORDER_API,
            'order_id' => 'test_order_id'
        ]);
        $genericTokenFactory->createToken(
            'test',
            $identity,
            'bitbag_sylius_mollie_plugin_cancel_subscription_mollie',
            ['orderId' => 'test_order_id']
        )->willReturn($cancelToken);

        $cancelToken->getHash()->willReturn('cancel_hash');

        $details->offsetExists('subscription_mollie_id')->willReturn(true);
        $details->offsetExists('payment_mollie_id')->willReturn(false);
        $details->offsetExists('order_mollie_id')->willReturn(false);

        $gateway->execute(new CreateCustomer($details->getWrappedObject()))->shouldNotBeCalled();
        $gateway->execute(new CreateInternalRecurring($details->getWrappedObject()))->shouldNotBeCalled();
        $gateway->execute(new CreateSubscriptionPayment($details->getWrappedObject()))->shouldNotBeCalled();

        $this->execute($request);
    }

    function it_executes_with_recurring_subscription(
        Capture $request,
        ArrayObject $details,
        PaymentInterface $payment,
        TokenInterface $token,
        TokenInterface $notifyToken,
        TokenInterface $refundToken,
        TokenInterface $cancelToken,
        Payum $payum,
        GenericTokenFactory $genericTokenFactory,
        GatewayInterface $gateway,
        MollieApiClient $mollieApiClient,
        IdentityInterface $identity
    ): void {
        $this->setGateway($gateway);
        $mollieApiClient->isRecurringSubscription()->willReturn(true);
        $this->setApi($mollieApiClient);
        $request->getToken()->willReturn($token);
        $token->getGatewayName()->willReturn('test');
        $token->getDetails()->willReturn($identity);

        $genericTokenFactory->createNotifyToken('test', $identity)->willReturn($notifyToken);
        $notifyToken->getTargetUrl()->willReturn('url');
        $notifyToken->getHash()->willReturn('test');

        $genericTokenFactory->createRefundToken('test', $identity)->willReturn($refundToken);
        $refundToken->getHash()->willReturn('refund_token_hash');

        $this->setGenericTokenFactory($genericTokenFactory);
        $payum->getTokenFactory()->willReturn($genericTokenFactory);

        $details->toUnsafeArray()->willReturn([]);
        $request->getModel()->willReturn($details);
        $request->getFirstModel()->willReturn($payment);

        $token->getTargetUrl()->willReturn('url');
        $token->getAfterUrl()->willReturn('url');
        $token->getHash()->willReturn('test');

        $details->offsetGet('metadata')->willReturn([
            'refund_token' => [
                'refund_token_hash'
            ],
            'cancel_token' => [
                'cancel_hash'
            ],
            'methodType' => Options::ORDER_API,
            'order_id' => 'test_order_id'
        ]);
        $genericTokenFactory->createToken(
            'test',
            $identity,
            'bitbag_sylius_mollie_plugin_cancel_subscription_mollie',
            ['orderId' => 'test_order_id']
        )->willReturn($cancelToken);

        $cancelToken->getHash()->willReturn('cancel_hash');

        $details->offsetExists('subscription_mollie_id')->willReturn(false);
        $details->offsetExists('payment_mollie_id')->willReturn(false);
        $details->offsetExists('order_mollie_id')->willReturn(false);

        $details->offsetSet('webhookUrl', 'url')->willReturn(true);
        $details->offsetSet('cancel_token', 'cancel_hash')->willReturn(true);
        $details->offsetSet('backurl', 'url')->willReturn(true);

        $gateway->execute(new CreateCustomer($details->getWrappedObject()))->shouldBeCalled();
        $gateway->execute(new CreateInternalRecurring($details->getWrappedObject()))->shouldBeCalled();
        $gateway->execute(new CreateSubscriptionPayment($details->getWrappedObject()))->shouldBeCalled();

        $this->execute($request);
    }

    function it_executes_order_api(
        Capture $request,
        ArrayObject $details,
        PaymentInterface $payment,
        TokenInterface $token,
        TokenInterface $notifyToken,
        TokenInterface $refundToken,
        Payum $payum,
        GenericTokenFactory $genericTokenFactory,
        GatewayInterface $gateway,
        MollieApiClient $mollieApiClient,
        PaymentEndpoint $paymentEndpoint,
        IdentityInterface $identity
    ): void {
        $this->setGateway($gateway);
        $mollieApiClient->isRecurringSubscription()->willReturn(false);
        $this->setApi($mollieApiClient);
        $request->getToken()->willReturn($token);
        $token->getGatewayName()->willReturn('test');
        $token->getDetails()->willReturn($identity);

        $genericTokenFactory->createNotifyToken('test', $identity)->willReturn($notifyToken);
        $notifyToken->getTargetUrl()->willReturn('url');
        $notifyToken->getHash()->willReturn('test');

        $genericTokenFactory->createRefundToken('test', $identity)->willReturn($refundToken);
        $refundToken->getHash()->willReturn('refund_token_hash');

        $this->setGenericTokenFactory($genericTokenFactory);
        $payum->getTokenFactory()->willReturn($genericTokenFactory);

        $details->toUnsafeArray()->willReturn([]);
        $request->getModel()->willReturn($details);
        $request->getFirstModel()->willReturn($payment);

        $token->getTargetUrl()->willReturn('url');
        $token->getAfterUrl()->willReturn('url');
        $token->getHash()->willReturn('test');


        $payment = \Mockery::mock('payment');
        $payment->id = 1;
        $payment->shouldReceive('getCheckoutUrl')->andReturn('https://thisisnotanemptyurl.com');
        $paymentEndpoint->create([
            'amount' => null,
            'description' => null,
            'redirectUrl' => 'url',
            'webhookUrl' => null,
            'metadata' => null,
        ])->willReturn($payment);
        $mollieApiClient->payments = $paymentEndpoint;
        $details->offsetGet('metadata')->willReturn([
            'refund_token' => [
                'refund_token_hash'
            ],
            'methodType' => Options::ORDER_API
            ]);
        $details->offsetExists('metadata')->willReturn(true);
        $details->offsetExists('methodType')->willReturn(true);

        $details->offsetExists('subscription_mollie_id')->shouldBeCalled();
        $details->offsetExists('payment_mollie_id')->shouldBeCalled();
        $details->offsetExists('order_mollie_id')->shouldBeCalled();
        $details->offsetExists('metadata')->shouldBeCalled();
        $details->offsetGet('metadata')->shouldBeCalled();
        $details->offsetSet('webhookUrl', 'url')->shouldBeCalled();
        $details->offsetSet('backurl', 'url')->shouldBeCalled();
        $details->offsetSet('metadata', [
            'refund_token' =>
                'refund_token_hash'
            ,
            'methodType' => Options::ORDER_API
        ])->shouldBeCalled();
        $gateway->execute(new CreateOrder($details->getWrappedObject()))->shouldBeCalledOnce();

        $this->execute($request);
    }

    function it_executes_payment_api(
        Capture $request,
        ArrayObject $details,
        PaymentInterface $payment,
        TokenInterface $token,
        TokenInterface $notifyToken,
        TokenInterface $refundToken,
        Payum $payum,
        GenericTokenFactory $genericTokenFactory,
        GatewayInterface $gateway,
        MollieApiClient $mollieApiClient,
        PaymentEndpoint $paymentEndpoint,
        IdentityInterface $identity
    ): void {
        $this->setGateway($gateway);
        $mollieApiClient->isRecurringSubscription()->willReturn(false);
        $this->setApi($mollieApiClient);
        $request->getToken()->willReturn($token);
        $token->getGatewayName()->willReturn('test');
        $token->getDetails()->willReturn($identity);

        $genericTokenFactory->createNotifyToken('test', $identity)->willReturn($notifyToken);
        $notifyToken->getTargetUrl()->willReturn('url');
        $notifyToken->getHash()->willReturn('test');

        $genericTokenFactory->createRefundToken('test', $identity)->willReturn($refundToken);
        $refundToken->getHash()->willReturn('refund_token_hash');

        $this->setGenericTokenFactory($genericTokenFactory);
        $payum->getTokenFactory()->willReturn($genericTokenFactory);

        $details->toUnsafeArray()->willReturn([]);
        $request->getModel()->willReturn($details);
        $request->getFirstModel()->willReturn($payment);

        $token->getTargetUrl()->willReturn('url');
        $token->getAfterUrl()->willReturn('url');
        $token->getHash()->willReturn('test');


        $payment = \Mockery::mock('payment');
        $payment->id = 1;
        $payment->shouldReceive('getCheckoutUrl')->andReturn('https://thisisnotanemptyurl.com');
        $paymentEndpoint->create([
            'amount' => null,
            'description' => null,
            'redirectUrl' => 'url',
            'webhookUrl' => null,
            'metadata' => null,
        ])->willReturn($payment);
        $mollieApiClient->payments = $paymentEndpoint;
        $details->offsetGet('metadata')->willReturn([
            'refund_token' => [
                'refund_token_hash'
            ],
            'methodType' => Options::PAYMENT_API,
            'molliePaymentMethods' => 'not_klarna_scenario'
        ]);
        $details->offsetExists('metadata')->willReturn(true);
        $details->offsetExists('methodType')->willReturn(true);

        $details->offsetExists('subscription_mollie_id')->shouldBeCalled();
        $details->offsetExists('payment_mollie_id')->shouldBeCalled();
        $details->offsetExists('order_mollie_id')->shouldBeCalled();
        $details->offsetExists('metadata')->shouldBeCalled();
        $details->offsetGet('metadata')->shouldBeCalled();
        $details->offsetSet('webhookUrl', 'url')->shouldBeCalled();
        $details->offsetSet('backurl', 'url')->shouldBeCalled();
        $details->offsetSet('metadata', [
            'refund_token' =>
                'refund_token_hash'
            ,
            'methodType' => Options::PAYMENT_API,
            'molliePaymentMethods' => 'not_klarna_scenario'
        ])->shouldBeCalled();
        $gateway->execute(new CreatePayment($details->getWrappedObject()))->shouldBeCalledOnce();

        $this->execute($request);
    }

    function it_executes_payment_api_with_klarna_scenario(
        Capture $request,
        ArrayObject $details,
        PaymentInterface $payment,
        TokenInterface $token,
        TokenInterface $notifyToken,
        TokenInterface $refundToken,
        Payum $payum,
        GenericTokenFactory $genericTokenFactory,
        GatewayInterface $gateway,
        MollieApiClient $mollieApiClient,
        PaymentEndpoint $paymentEndpoint,
        IdentityInterface $identity
    ): void {
        $this->setGateway($gateway);
        $mollieApiClient->isRecurringSubscription()->willReturn(false);
        $this->setApi($mollieApiClient);
        $request->getToken()->willReturn($token);
        $token->getGatewayName()->willReturn('test');
        $token->getDetails()->willReturn($identity);

        $genericTokenFactory->createNotifyToken('test', $identity)->willReturn($notifyToken);
        $notifyToken->getTargetUrl()->willReturn('url');
        $notifyToken->getHash()->willReturn('test');

        $genericTokenFactory->createRefundToken('test', $identity)->willReturn($refundToken);
        $refundToken->getHash()->willReturn('refund_token_hash');

        $this->setGenericTokenFactory($genericTokenFactory);
        $payum->getTokenFactory()->willReturn($genericTokenFactory);

        $details->toUnsafeArray()->willReturn([]);
        $request->getModel()->willReturn($details);
        $request->getFirstModel()->willReturn($payment);

        $token->getTargetUrl()->willReturn('url');
        $token->getAfterUrl()->willReturn('url');
        $token->getHash()->willReturn('test');


        $payment = \Mockery::mock('payment');
        $payment->id = 1;
        $payment->shouldReceive('getCheckoutUrl')->andReturn('https://thisisnotanemptyurl.com');
        $paymentEndpoint->create([
            'amount' => null,
            'description' => null,
            'redirectUrl' => 'url',
            'webhookUrl' => null,
            'metadata' => null,
        ])->willReturn($payment);
        $mollieApiClient->payments = $paymentEndpoint;
        $details->offsetGet('metadata')->willReturn([
            'refund_token' => [
                'refund_token_hash'
            ],
            'methodType' => Options::PAYMENT_API,
            'molliePaymentMethods' => 'klarnapaynow',
        ]);
        $details->offsetExists('metadata')->willReturn(true);
        $details->offsetExists('methodType')->willReturn(true);

        $details->offsetExists('subscription_mollie_id')->shouldBeCalled();
        $details->offsetExists('payment_mollie_id')->shouldBeCalled();
        $details->offsetExists('order_mollie_id')->shouldBeCalled();
        $details->offsetExists('metadata')->shouldBeCalled();
        $details->offsetGet('metadata')->shouldBeCalled();
        $details->offsetSet('webhookUrl', 'url')->shouldBeCalled();
        $details->offsetSet('backurl', 'url')->shouldBeCalled();
        $details->offsetSet('metadata', [
            'refund_token' =>
                'refund_token_hash'
            ,
            'methodType' => Options::PAYMENT_API,
            'molliePaymentMethods' => 'klarnapaynow',
        ])->shouldBeCalled();

        $this->shouldThrow(new InvalidArgumentException('Method klarnapaynow is not allowed to use Payments API'))
            ->during('execute',[$request->getWrappedObject()]);
    }

    function it_supports_only_capture_request_and_array_access(
        Capture $request,
        \ArrayAccess $arrayAccess
    ): void {
        $request->getModel()->willReturn($arrayAccess);

        $this->supports($request)->shouldReturn(true);
    }
}
