<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Action\Api;

use BitBag\SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use BitBag\SyliusMolliePlugin\Action\Api\CreateOrderAction;
use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CreateOrder;
use BitBag\SyliusMolliePlugin\Resolver\PaymentMethodConfigResolverInterface;
use Mollie\Api\Endpoints\OrderEndpoint;
use Mollie\Api\Resources\Order;
use Payum\Core\Action\ActionInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use PhpSpec\ObjectBehavior;

final class CreateOrderActionSpec extends ObjectBehavior
{
    function let(PaymentMethodConfigResolverInterface $methodConfigResolver, MollieLoggerActionInterface $loggerAction)
    {
        $this->beConstructedWith(
            $methodConfigResolver,
            $loggerAction
        );
    }

    function it_is_initializable()
    {
        $this->shouldBeAnInstanceOf(CreateOrderAction::class);
    }

    function it_should_implements_action_interface()
    {
        $this->shouldImplement(ActionInterface::class);
    }

    function it_extends_base_api_aware()
    {
        $this->shouldBeAnInstanceOf(BaseApiAwareAction::class);
    }

    function it_executes(
        CreateOrder $request,
        MollieApiClient $mollieApiClient,
        OrderEndpoint $orderEndpoint,
        Order $order,
        ArrayObject $arrayObject
    )
    {
        $mollieApiClient->orders = $orderEndpoint;
        $this->setApi($mollieApiClient);
        $order->id = 'id_1';


        $this->execute($request);
    }
}
