<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Action\Api;

use BitBag\SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use BitBag\SyliusMolliePlugin\Action\Api\CreateMollieSubscriptionAction;
use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionFactoryInterface;
use BitBag\SyliusMolliePlugin\Order\SubscriptionOrderClonerInterface;
use BitBag\SyliusMolliePlugin\Repository\MollieSubscriptionRepositoryInterface;
use BitBag\SyliusMolliePlugin\Repository\OrderRepositoryInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CreateMollieSubscription;
use BitBag\SyliusMolliePlugin\Request\Api\CreateMollieSubscriptionInterface;
use Mollie\Api\Endpoints\CustomerEndpoint;
use Mollie\Api\Endpoints\PaymentEndpoint;
use Mollie\Api\Resources\Customer;
use Mollie\Api\Resources\Payment;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Core\Model\CustomerInterface;

final class CreateMollieSubscriptionActionSpec extends ObjectBehavior
{
    function let(
        MollieSubscriptionRepositoryInterface $subscriptionRepository,
        MollieSubscriptionFactoryInterface $subscriptionFactory,
        OrderRepositoryInterface $orderRepository,
        SubscriptionOrderClonerInterface $orderCloner
    ): void {
        $this->beConstructedWith(
            $subscriptionRepository,
            $subscriptionFactory,
            $orderRepository,
            $orderCloner
        );
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(CreateMollieSubscriptionAction::class);
    }

    function it_implements_action_interface(): void
    {
        $this->shouldImplement(ActionInterface::class);
    }

    function it_implements_api_aware_interface(): void
    {
        $this->shouldImplement(ApiAwareInterface::class);
    }

    function it_extends_base_api_aware(): void
    {
        $this->shouldHaveType(BaseApiAwareAction::class);
    }

    function it_stops_execute_when_order_id_is_null(
        CreateMollieSubscriptionInterface $request,
        ArrayObject $model
    ): void {
        $request->getModel()->willReturn($model);

        $model->offsetGet('metadata')->willReturn(['order_id' => null]);
        $this->execute($request);
    }

    function it_executes(
        CreateMollieSubscriptionInterface $request,
        ArrayObject $model,
        MollieSubscriptionRepositoryInterface $subscriptionRepository,
        MollieSubscriptionInterface $subscription,
        MollieApiClient $mollieApiClient,
        CustomerEndpoint $customerEndpoint,
        PaymentEndpoint $paymentEndpoint,
        Customer $customer,
        Payment $payment
    ): void {
        $request->getModel()->willReturn($model);
        $this->setApi($mollieApiClient);
        $mollieApiClient->customers = $customerEndpoint;
        $mollieApiClient->payments = $paymentEndpoint;

        $model->offsetGet('metadata')->willReturn(['order_id' => 5]);
        $model->offsetGet('payment_mollie_id')->willReturn(5);
        $model->offsetGet('customerId')->willReturn(5);

        $subscriptionRepository->findByOrderId(5)->willReturn($subscription);

        /** @var $subscription MollieSubscriptionInterface */
        $subscriptions = $subscriptionRepository->findByOrderId(5);
        $subscriptions[0]->shouldBeAnInstanceOf(MollieSubscriptionInterface::class);
        $customerEndpoint->get(5)->willReturn($customer);
        $paymentEndpoint->get(5)->willReturn($payment);

//        $subscription

        $this->execute($request);
    }
}
