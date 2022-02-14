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
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionConfigurationInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionFactoryInterface;
use BitBag\SyliusMolliePlugin\Order\OrderPaymentRefund;
use BitBag\SyliusMolliePlugin\Order\SubscriptionOrderClonerInterface;
use BitBag\SyliusMolliePlugin\Repository\MollieSubscriptionRepositoryInterface;
use BitBag\SyliusMolliePlugin\Repository\OrderRepositoryInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CreateMollieSubscription;
use BitBag\SyliusMolliePlugin\Request\Api\CreateMollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Request\StateMachine\StatusRecurringSubscription;
use Doctrine\Common\Collections\ArrayCollection;
use Mollie\Api\Endpoints\CustomerEndpoint;
use Mollie\Api\Endpoints\PaymentEndpoint;
use Mollie\Api\Resources\Customer;
use Mollie\Api\Resources\Payment;
use Mollie\Api\Resources\Subscription;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\GatewayInterface;
use Payum\Core\Request\GetCurrency;
use Payum\Core\Security\GenericTokenFactoryInterface;
use Payum\Core\Security\TokenInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\OrderItemInterface;

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

    function it_executes_and_create_currency(
        CreateMollieSubscriptionInterface $request,
        ArrayObject $model,
        MollieSubscriptionRepositoryInterface $subscriptionRepository,
        MollieSubscriptionInterface $subscription,
        MollieSubscriptionConfigurationInterface $configuration,
        MollieApiClient $mollieApiClient,
        CustomerEndpoint $customerEndpoint,
        PaymentEndpoint $paymentEndpoint,
        Customer $customer,
        Payment $payment,
        SubscriptionOrderClonerInterface $orderCloner,
        OrderInterface $order,
        OrderInterface $clonedOrder,
        OrderItemInterface $orderItem,
        GenericTokenFactoryInterface $tokenFactory,
        TokenInterface $notifyToken,
        GatewayInterface $gateway,
        Subscription $mollieSubscription
    ): void {
        $request->getModel()->willReturn($model);
        $this->setApi($mollieApiClient);
        $mollieApiClient->customers = $customerEndpoint;
        $mollieApiClient->payments = $paymentEndpoint;
        $customerEndpoint->get(5)->willReturn($customer);
        $paymentEndpoint->get(5)->willReturn($payment);

        $model->offsetGet('metadata')->willReturn([
            'order_id' => '5',
            'gateway' => 'mollie_subscription'
        ]);
        $model->offsetGet('payment_mollie_id')->willReturn(5);
        $model->offsetGet('customerId')->willReturn(5);
        $model->offsetExists('metadata');
        $model->offsetExists('payment_mollie_id');

        $subscriptionRepository->findByOrderId(5)->willReturn([$subscription]);

        $subscription->getSubscriptionConfiguration()->willReturn($configuration);
        $configuration->getSubscriptionId()->willReturn(null);

        $subscription->getFirstOrder()->willReturn($order);
        $subscription->getOrderItem()->willReturn($orderItem);

        $orderCloner->clone(
            $subscription,
            $order,
            $orderItem
        )->willReturn($clonedOrder);
        $this->setGenericTokenFactory($tokenFactory);
        $tokenFactory->createNotifyToken('mollie_subscription')->willReturn($notifyToken);
        $this->setGateway($gateway);
        $clonedOrder->getTotal()->willReturn(100);
        $configuration->getNumberOfRepetitions()->willReturn(12);
        $configuration->getInterval()->willReturn('1 months');
        $payment->mandateId = 'mdt_pXm1g3ND';
        $order->getNumber()->willReturn('order_number');
        $subscription->getId()->willReturn('15');
        $notifyToken->getTargetUrl()->willReturn('sickUrl');

        $customer->createSubscription([
            "amount" => [
                "currency" => "EUR",
                "value" => "100",
            ],
            "times" => 12,
            "interval" => '1 months',
            "mandateId" => 'mdt_pXm1g3ND',
            "description" => sprintf(
                '%s - %s',
                'order_number',
                '000000015'
            ),
            "webhookUrl" => 'sickUrl',
        ])->willReturn($mollieSubscription);

        $mollieSubscription->id = '15';
        $payment->id = 'mdt_pXm1g3ND';
        $configuration->setSubscriptionId('15')->shouldBeCalled();
        $configuration->setMandateId('mdt_pXm1g3ND')->shouldBeCalled();
        $subscriptionRepository->add($subscription)->shouldBeCalled();
        $this->execute($request);
        $gateway->execute(new StatusRecurringSubscription($subscription->getWrappedObject()))->shouldBeCalled();
    }
}
