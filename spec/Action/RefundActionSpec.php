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

use BitBag\SyliusMolliePlugin\Action\RefundAction;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayInterface;
use Payum\Core\Request\Refund;
use PhpSpec\ObjectBehavior;

final class RefundActionSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(RefundAction::class);
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
        Refund $request,
        GatewayInterface $gateway,
        \Mollie_API_Client $mollieApiClient
    ): void {
        $this->setGateway($gateway);

        $this->setApi($mollieApiClient);

        $arrayObject = new ArrayObject(['mollie_id' => 1]);

        $request->getModel()->willReturn($arrayObject);

        $payment = \Mockery::mock('payment');

        $payment->shouldReceive('canBeRefunded')->andReturn(true);
        $payment->shouldReceive('refund')->andReturn(true);
        $payment->shouldReceive('get')->andReturn($payment);

        $mollieApiClient->payments = $payment;

        $this->execute($request);
    }

    function it_supports_only_refund_request_and_array_access(
        Refund $request,
        \ArrayAccess $arrayAccess
    ): void {
        $request->getModel()->willReturn($arrayAccess);

        $this->supports($request)->shouldReturn(true);
    }
}
