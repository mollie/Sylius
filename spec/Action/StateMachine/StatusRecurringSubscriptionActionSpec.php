<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Action\StateMachine;

use BitBag\SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use BitBag\SyliusMolliePlugin\Action\StateMachine\StatusRecurringSubscriptionAction;
use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\SubscriptionInterface;
use BitBag\SyliusMolliePlugin\Request\StateMachine\StatusRecurringSubscription;
use BitBag\SyliusMolliePlugin\Transitions\SubscriptionTransitions;
use Doctrine\ORM\EntityManagerInterface;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use PhpSpec\ObjectBehavior;
use SM\Factory\FactoryInterface;
use SM\StateMachine\StateMachineInterface;

final class StatusRecurringSubscriptionActionSpec extends ObjectBehavior
{
    function let(
        EntityManagerInterface $subscriptionManager,
        FactoryInterface $subscriptionSateMachineFactory
    ): void {
        $this->beConstructedWith(
            $subscriptionManager,
            $subscriptionSateMachineFactory
        );
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(StatusRecurringSubscriptionAction::class);
    }

    function it_implements_action_interface(): void
    {
        $this->shouldHaveType(ActionInterface::class);
    }

    function it_implements_api_aware_interface(): void
    {
        $this->shouldHaveType(ApiAwareInterface::class);
    }

    function it_extends_base_api_aware(): void
    {
        $this->shouldHaveType(BaseApiAwareAction::class);
    }

    function it_executes(
        StatusRecurringSubscription $request,
        MollieApiClient $mollieApiClient,
        SubscriptionInterface $subscription,
        \Mollie_API_Resource_Customers_Subscriptions $subscriptions,
        \Mollie_API_Object_Customer_Subscription $customerSubscription,
        FactoryInterface $subscriptionSateMachineFactory,
        StateMachineInterface $stateMachine
    ): void {

        $this->setApi($mollieApiClient);
        $stateMachine->can(SubscriptionTransitions::TRANSITION_ACTIVATE)->willReturn();
        $customerSubscription->status = \Mollie_API_Object_Customer_Subscription::STATUS_ACTIVE;
        $subscriptionSateMachineFactory->get($subscription, SubscriptionTransitions::GRAPH)->willReturn($stateMachine);
        $subscription->getSubscriptionId()->willReturn('id_1');
        $subscriptions->get('id_1')->willReturn($customerSubscription);
        $mollieApiClient->customers_subscriptions = $subscriptions;
        $request->getModel()->willReturn($subscription);

        $this->execute($request);
    }

    function it_supports_status_recurring_subscription_request_and_subscription_model(
        StatusRecurringSubscription $request,
        SubscriptionInterface $subscription
    ): void {
        $request->getModel()->willReturn($subscription);

        $this->supports($request)->shouldReturn(true);
    }
}
