<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Action\Api;

use BitBag\SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use BitBag\SyliusMolliePlugin\Action\Api\CreateRecurringSubscriptionAction;
use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\SubscriptionInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CreateRecurringSubscription;
use Doctrine\ORM\EntityManagerInterface;
use Mollie\Api\Endpoints\CustomerEndpoint;
use Mollie\Api\Resources\Customer;
use Mollie\Api\Resources\Subscription;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayInterface;
use PhpSpec\ObjectBehavior;
use SM\Factory\FactoryInterface as SateMachineFactoryInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Repository\OrderRepositoryInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class CreateRecurringSubscriptionActionSpec extends ObjectBehavior
{
    function let(
        FactoryInterface $subscriptionFactory,
        EntityManagerInterface $subscriptionManager,
        SateMachineFactoryInterface $subscriptionSateMachineFactory,
        OrderRepositoryInterface $orderRepository
    ): void {
        $this->beConstructedWith(
            $subscriptionFactory,
            $subscriptionManager,
            $subscriptionSateMachineFactory,
            $orderRepository
        );
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(CreateRecurringSubscriptionAction::class);
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

    function it_extends_base_api_aware(): void
    {
        $this->shouldHaveType(BaseApiAwareAction::class);
    }

    function it_executes(
        CreateRecurringSubscription $request,
        MollieApiClient $mollieApiClient,
        ArrayObject $arrayObject,
        CustomerEndpoint $customerEndpoint,
        Customer $customer,
        Subscription $subscriptionApi,
        FactoryInterface $subscriptionFactory,
        SubscriptionInterface $subscription,
        OrderInterface $order,
        OrderRepositoryInterface $orderRepository,
        GatewayInterface $gateway
    ): void {
        $this->setApi($mollieApiClient);
        $this->setGateway($gateway);
        $mollieApiClient->customers = $customerEndpoint;
        $subscriptionApi->id = 'subscription_mollie_id';
        $customerEndpoint->get('id_1')->willReturn($customer);
        $orderRepository->find(1)->willReturn($order);
        $subscriptionFactory->createNew()->willReturn($subscription);
        $arrayObject->offsetGet('customer_mollie_id')->willReturn('id_1');
        $arrayObject->offsetGet('interval')->willReturn('3 days');
        $arrayObject->offsetGet('description')->willReturn('');
        $arrayObject->offsetGet('webhookUrl')->willReturn('www.example.com/webhookUrl');
        $arrayObject->offsetGet('metadata')->willReturn(['order_id' => 1]);
        $arrayObject->offsetGet('amount')->willReturn(100);
        $customer->createSubscription([
            'amount' => 100,
            'interval' => '3 days',
            'description' => '',
            'method' => 'directdebit',
            'webhookUrl' => 'www.example.com/webhookUrl',
        ])->willReturn($subscriptionApi);
        $request->getModel()->willReturn($arrayObject);

        $arrayObject->offsetExists('subscription_id')->shouldBeCalled();
        $arrayObject->offsetSet('subscription_mollie_id', 'subscription_mollie_id')->shouldBeCalled();

        $this->execute($request);
    }

    function it_supports_only_create_recurring_subscription_request_and_array_access(
        CreateRecurringSubscription $request,
        \ArrayAccess $arrayAccess
    ): void {
        $request->getModel()->willReturn($arrayAccess);

        $this->supports($request)->shouldReturn(true);
    }
}
