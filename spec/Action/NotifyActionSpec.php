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

use BitBag\SyliusMolliePlugin\Action\NotifyAction;
use BitBag\SyliusMolliePlugin\Action\StateMachine\SetStatusOrderActionInterface;
use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Repository\SubscriptionRepositoryInterface;
use Mollie\Api\Endpoints\PaymentEndpoint;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayInterface;
use Payum\Core\Request\GetHttpRequest;
use Payum\Core\Request\Notify;
use PhpSpec\ObjectBehavior;

final class NotifyActionSpec extends ObjectBehavior
{
    function let(
        GetHttpRequest $getHttpRequest,
        SubscriptionRepositoryInterface $subscriptionRepository,
        SetStatusOrderActionInterface $setStatusOrderAction,
        MollieLoggerActionInterface $loggerAction
    ): void {
        $this->beConstructedWith(
            $getHttpRequest,
            $subscriptionRepository,
            $setStatusOrderAction,
            $loggerAction
        );
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(NotifyAction::class);
    }

    function it_implements_action_interface(): void
    {
        $this->shouldHaveType(ActionInterface::class);
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
        Notify $request,
        \ArrayObject $arrayObject,
        GatewayInterface $gateway,
        GetHttpRequest $getHttpRequest,
        MollieApiClient $mollieApiClient,
        PaymentEndpoint $paymentEndpoint
    ): void {
        $this->setGateway($gateway);

        $this->setApi($mollieApiClient);
        $getHttpRequest->request = ['id' => 1];
        $request->getModel()->willReturn($arrayObject);
        $payment = \Mockery::mock('payment');
        $payment->id = 1;
        $payment->metadata = (object) [
            'order_id' => 1,
        ];
        $payment->shouldReceive('getCheckoutUrl')->andReturn('');
        $paymentEndpoint->get(1)->willReturn($payment);
        $mollieApiClient->payments = $paymentEndpoint;

        $this->execute($request);
    }

    function it_supports_only_notify_request_and_array_access(
        Notify $request,
        \ArrayAccess $arrayAccess
    ): void {
        $request->getModel()->willReturn($arrayAccess);

        $this->supports($request)->shouldReturn(true);
    }
}
