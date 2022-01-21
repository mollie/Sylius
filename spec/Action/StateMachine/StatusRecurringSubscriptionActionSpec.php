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
        CustomerEndpoint $customerEndpoint,
        Customer $customer,
        FactoryInterface $subscriptionSateMachineFactory,
        StateMachineInterface $stateMachine,
        Subscription $subscriptionApi
    ): void {
        $this->setApi($mollieApiClient);
        $stateMachine->can(MollieSubscriptionTransitions::TRANSITION_ACTIVATE)->willReturn();
        $subscriptionApi->status = SubscriptionStatus::STATUS_ACTIVE;
        $subscriptionSateMachineFactory->get($subscription, MollieSubscriptionTransitions::GRAPH)->willReturn($stateMachine);
        $subscription->getSubscriptionId()->willReturn('id_1');
        $subscription->getCustomerId()->willReturn('id_1');
        $customer->getSubscription('id_1')->willReturn($subscriptionApi);
        $customerEndpoint->get('id_1')->willReturn($customer);
        $mollieApiClient->customers = $customerEndpoint;
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
