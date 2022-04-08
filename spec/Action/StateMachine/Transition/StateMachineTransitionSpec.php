<?php

/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Action\StateMachine\Transition;

use BitBag\SyliusMolliePlugin\Action\StateMachine\Transition\StateMachineTransition;
use BitBag\SyliusMolliePlugin\Action\StateMachine\Transition\StateMachineTransitionInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionTransitions;
use PhpSpec\ObjectBehavior;
use SM\Factory\FactoryInterface;
use SM\StateMachine\StateMachineInterface;

final class StateMachineTransitionSpec extends ObjectBehavior
{
    function let(FactoryInterface $subscriptionSateMachineFactory): void
    {
        $this->beConstructedWith($subscriptionSateMachineFactory);
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(StateMachineTransition::class);
    }

    function it_should_implement_interface(): void
    {
        $this->shouldImplement(StateMachineTransitionInterface::class);
    }

    function it_applies_transition(
        MollieSubscriptionInterface $subscription,
        FactoryInterface $subscriptionSateMachineFactory,
        StateMachineInterface $stateMachine
    ): void {
        $subscriptionSateMachineFactory->get(
            $subscription,
            MollieSubscriptionTransitions::GRAPH
        )->willReturn($stateMachine);

        $stateMachine->can(MollieSubscriptionTransitions::TRANSITION_COMPLETE)->willReturn(true);
        $stateMachine->apply(MollieSubscriptionTransitions::TRANSITION_COMPLETE)->willReturn(true);

        $this->apply($subscription,MollieSubscriptionTransitions::TRANSITION_COMPLETE);
    }

    function it_cannot_applies_transition(
        MollieSubscriptionInterface $subscription,
        FactoryInterface $subscriptionSateMachineFactory,
        StateMachineInterface $stateMachine
    ): void {
        $subscriptionSateMachineFactory->get(
            $subscription,
            MollieSubscriptionTransitions::GRAPH
        )->willReturn($stateMachine);

        $stateMachine->can(MollieSubscriptionTransitions::TRANSITION_COMPLETE)->willReturn(false);
        $stateMachine->apply(MollieSubscriptionTransitions::TRANSITION_COMPLETE)->shouldNotBeCalled();

        $this->apply($subscription,MollieSubscriptionTransitions::TRANSITION_COMPLETE);
    }
}
