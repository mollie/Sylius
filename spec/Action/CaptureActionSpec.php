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
use BitBag\SyliusMolliePlugin\Request\Api\CreateInternalRecurring;
use BitBag\SyliusMolliePlugin\Request\Api\CreateOrder;
use BitBag\SyliusMolliePlugin\Request\Api\CreatePayment;
use Mollie\Api\Endpoints\PaymentEndpoint;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayInterface;
use Payum\Core\Payum;
use Payum\Core\Request\Capture;
use Payum\Core\Security\GenericTokenFactory;
use Payum\Core\Security\GenericTokenFactoryAwareInterface;
use Payum\Core\Security\TokenInterface;
use Payum\Core\Storage\IdentityInterface;
use PhpSpec\ObjectBehavior;
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

    function it_executes(
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
//jak w ofsset ustawic nested array              <------------------------------------------------------------
        $details->offsetGet('metadata')->willReturn([
            'refund_token' => [
                'refund_token_hash'
            ],
            'methodType' => Options::ORDER_API
            ]);
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

//        $this
//            ->shouldThrow(HttpRedirect::class)
//            ->during('execute', [$request])
//        ;
    }

    function it_supports_only_capture_request_and_array_access(
        Capture $request,
        \ArrayAccess $arrayAccess
    ): void {
        $request->getModel()->willReturn($arrayAccess);

        $this->supports($request)->shouldReturn(true);
    }
}
