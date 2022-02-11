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
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionConfigurationInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CancelRecurringSubscription;
use BitBag\SyliusMolliePlugin\Request\StateMachine\StatusRecurringSubscription;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionTransitions;
use Doctrine\ORM\EntityManagerInterface;
use Mollie\Api\Endpoints\CustomerEndpoint;
use Mollie\Api\Resources\Customer;
use Mollie\Api\Resources\Subscription;
use Mollie\Api\Types\SubscriptionStatus;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use PhpSpec\ObjectBehavior;
use SM\Factory\FactoryInterface;
use SM\StateMachine\StateMachineInterface;

final class StatusRecurringSubscriptionActionSpec extends ObjectBehavior
{
    function let(
        EntityManagerInterface $subscriptionManager,
        FactoryInterface $subscriptionSateMachineFactory,
        StatusRecurringSubscription $request,
        MollieSubscriptionInterface $subscription,
        MollieApiClient $mollieApiClient,
        MollieSubscriptionConfigurationInterface $configuration,
        CustomerEndpoint $customerEndpoint,
        Customer $customer,
        Subscription $subscriptionApi
    ): void {
        $this->beConstructedWith(
            $subscriptionManager,
            $subscriptionSateMachineFactory
        );

        $mollieApiClient->customers = $customerEndpoint;
        $this->setApi($mollieApiClient);
        $request->getModel()->willReturn($subscription);
        $subscription->getSubscriptionConfiguration()->willReturn($configuration);
        $configuration->getCustomerId()->willReturn('id_1');
        $configuration->getSubscriptionId()->willReturn('sub_id_1');
        $customerEndpoint->get('id_1')->willReturn($customer);
        $customer->getSubscription('sub_id_1')->willReturn($subscriptionApi);
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

    function it_executes_status_active_case(
        StatusRecurringSubscription $request,
        MollieSubscriptionInterface $subscription,
        FactoryInterface $subscriptionSateMachineFactory,
        StateMachineInterface $stateMachine,
        Subscription $subscriptionApi,
        EntityManagerInterface $subscriptionManager
    ): void {
        $subscriptionApi->status = SubscriptionStatus::STATUS_ACTIVE;
        $subscriptionSateMachineFactory->get(
            $subscription->getWrappedObject(),
            MollieSubscriptionTransitions::GRAPH)
            ->willReturn($stateMachine);
        $stateMachine->can(MollieSubscriptionTransitions::TRANSITION_ACTIVATE)->willReturn(true);
        $stateMachine->apply(MollieSubscriptionTransitions::TRANSITION_ACTIVATE)->willReturn(true);

        $this->execute($request);

        $subscriptionManager->persist($subscription)->shouldBeCalled();
        $subscriptionManager->flush()->shouldBeCalled();
    }

    function it_executes_status_pending_case(
        StatusRecurringSubscription $request,
        MollieSubscriptionInterface $subscription,
        FactoryInterface $subscriptionSateMachineFactory,
        StateMachineInterface $stateMachine,
        Subscription $subscriptionApi,
        EntityManagerInterface $subscriptionManager
    ): void {
        $subscriptionApi->status = SubscriptionStatus::STATUS_PENDING;
        $subscriptionSateMachineFactory->get(
            $subscription->getWrappedObject(),
            MollieSubscriptionTransitions::GRAPH)
            ->willReturn($stateMachine);
        $stateMachine->can(MollieSubscriptionTransitions::TRANSITION_PROCESS)->willReturn(true);
        $stateMachine->apply(MollieSubscriptionTransitions::TRANSITION_PROCESS)->willReturn(true);

        $this->execute($request);

        $subscriptionManager->persist($subscription)->shouldBeCalled();
        $subscriptionManager->flush()->shouldBeCalled();
    }

    function it_executes_status_canceled_case(
        StatusRecurringSubscription $request,
        MollieSubscriptionInterface $subscription,
        FactoryInterface $subscriptionSateMachineFactory,
        StateMachineInterface $stateMachine,
        Subscription $subscriptionApi,
        EntityManagerInterface $subscriptionManager
    ): void {
        $subscriptionApi->status = SubscriptionStatus::STATUS_CANCELED;
        $subscriptionSateMachineFactory->get(
            $subscription->getWrappedObject(),
            MollieSubscriptionTransitions::GRAPH)
            ->willReturn($stateMachine);
        $stateMachine->can(MollieSubscriptionTransitions::TRANSITION_CANCEL)->willReturn(true);
        $stateMachine->apply(MollieSubscriptionTransitions::TRANSITION_CANCEL)->willReturn(true);

        $this->execute($request);

        $subscriptionManager->persist($subscription)->shouldBeCalled();
        $subscriptionManager->flush()->shouldBeCalled();
    }

    function it_executes_status_completed_case(
        StatusRecurringSubscription $request,
        MollieSubscriptionInterface $subscription,
        FactoryInterface $subscriptionSateMachineFactory,
        StateMachineInterface $stateMachine,
        Subscription $subscriptionApi,
        EntityManagerInterface $subscriptionManager
    ): void {
        $subscriptionApi->status = SubscriptionStatus::STATUS_COMPLETED;
        $subscriptionSateMachineFactory->get(
            $subscription->getWrappedObject(),
            MollieSubscriptionTransitions::GRAPH)
            ->willReturn($stateMachine);
        $stateMachine->can(MollieSubscriptionTransitions::TRANSITION_COMPLETE)->willReturn(true);
        $stateMachine->apply(MollieSubscriptionTransitions::TRANSITION_COMPLETE)->willReturn(true);

        $this->execute($request);

        $subscriptionManager->persist($subscription)->shouldBeCalled();
        $subscriptionManager->flush()->shouldBeCalled();
    }
    function it_executes_status_suspended_case(
        StatusRecurringSubscription $request,
        MollieSubscriptionInterface $subscription,
        FactoryInterface $subscriptionSateMachineFactory,
        StateMachineInterface $stateMachine,
        Subscription $subscriptionApi,
        EntityManagerInterface $subscriptionManager
    ): void {
        $subscriptionApi->status = SubscriptionStatus::STATUS_SUSPENDED;
        $subscriptionSateMachineFactory->get(
            $subscription->getWrappedObject(),
            MollieSubscriptionTransitions::GRAPH)
            ->willReturn($stateMachine);
        $stateMachine->can(MollieSubscriptionTransitions::TRANSITION_SUSPEND)->willReturn(true);
        $stateMachine->apply(MollieSubscriptionTransitions::TRANSITION_SUSPEND)->willReturn(true);

        $this->execute($request);

        $subscriptionManager->persist($subscription)->shouldBeCalled();
        $subscriptionManager->flush()->shouldBeCalled();
    }

    function it_executes_with_fail(
        StatusRecurringSubscription $request,
        MollieSubscriptionInterface $subscription,
        FactoryInterface $subscriptionSateMachineFactory,
        StateMachineInterface $stateMachine,
        Subscription $subscriptionApi,
        EntityManagerInterface $subscriptionManager
    ): void {
        $subscriptionApi->status = SubscriptionStatus::STATUS_ACTIVE;
        $subscriptionSateMachineFactory->get(
            $subscription->getWrappedObject(),
            MollieSubscriptionTransitions::GRAPH)
            ->willReturn($stateMachine);
        $stateMachine->can(MollieSubscriptionTransitions::TRANSITION_ACTIVATE)->willReturn(false);

        $this->execute($request);

        $stateMachine->apply(MollieSubscriptionTransitions::TRANSITION_ACTIVATE)->shouldNotBeCalled();
        $subscriptionManager->persist($subscription)->shouldBeCalled();
        $subscriptionManager->flush()->shouldBeCalled();
    }


    function it_supports_status_recurring_subscription_request_and_subscription_model(
        StatusRecurringSubscription $request,
        MollieSubscriptionInterface $subscription
    ): void {
        $request->getModel()->willReturn($subscription);

        $this->supports($request)->shouldReturn(true);
    }
}
