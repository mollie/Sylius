<?php

/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Action\StateMachine\Transition;

use BitBag\SyliusMolliePlugin\Action\StateMachine\Transition\PaymentStateMachineTransition;
use BitBag\SyliusMolliePlugin\Action\StateMachine\Transition\PaymentStateMachineTransitionInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionPaymentProcessingTransitions;
use PhpSpec\ObjectBehavior;
use SM\Factory\FactoryInterface;
use SM\StateMachine\StateMachineInterface;

final class PaymentStateMachineTransitionSpec extends ObjectBehavior
{
    function let(FactoryInterface $subscriptionSateMachineFactory): void
    {
        $this->beConstructedWith($subscriptionSateMachineFactory);
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(PaymentStateMachineTransition::class);
    }

    function it_should_implement_interface(): void
    {
        $this->shouldImplement(PaymentStateMachineTransitionInterface::class);
    }

    function it_applies_transition(
        MollieSubscriptionInterface $subscription,
        FactoryInterface $subscriptionSateMachineFactory,
        StateMachineInterface $stateMachine
    ): void {
        $subscriptionSateMachineFactory->get(
            $subscription,
            MollieSubscriptionPaymentProcessingTransitions::GRAPH
        )->willReturn($stateMachine);

        $stateMachine->can(MollieSubscriptionPaymentProcessingTransitions::TRANSITION_BEGIN)->willReturn(true);
        $stateMachine->apply(MollieSubscriptionPaymentProcessingTransitions::TRANSITION_BEGIN)->willReturn(true);

        $this->apply($subscription,MollieSubscriptionPaymentProcessingTransitions::TRANSITION_BEGIN);
    }

    function it_cannot_applies_transition(
        MollieSubscriptionInterface $subscription,
        FactoryInterface $subscriptionSateMachineFactory,
        StateMachineInterface $stateMachine
    ): void {
        $subscriptionSateMachineFactory->get(
            $subscription,
            MollieSubscriptionPaymentProcessingTransitions::GRAPH
        )->willReturn($stateMachine);

        $stateMachine->can(MollieSubscriptionPaymentProcessingTransitions::TRANSITION_BEGIN)->willReturn(false);
        $stateMachine->apply(MollieSubscriptionPaymentProcessingTransitions::TRANSITION_BEGIN)->shouldNotBeCalled();

        $this->apply($subscription,MollieSubscriptionPaymentProcessingTransitions::TRANSITION_BEGIN);
    }
}
