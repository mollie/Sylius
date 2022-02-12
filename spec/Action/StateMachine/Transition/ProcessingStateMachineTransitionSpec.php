<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Action\StateMachine\Transition;

use BitBag\SyliusMolliePlugin\Action\StateMachine\Transition\ProcessingStateMachineTransition;
use BitBag\SyliusMolliePlugin\Action\StateMachine\Transition\ProcessingStateMachineTransitionInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionProcessingTransitions;
use PhpSpec\ObjectBehavior;
use SM\Factory\FactoryInterface;
use SM\StateMachine\StateMachineInterface;

final class ProcessingStateMachineTransitionSpec extends ObjectBehavior
{
    function let(FactoryInterface $subscriptionSateMachineFactory): void
    {
        $this->beConstructedWith($subscriptionSateMachineFactory);
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(ProcessingStateMachineTransition::class);
    }

    function it_should_implement_interface(): void
    {
        $this->shouldImplement(ProcessingStateMachineTransitionInterface::class);
    }

    function it_applies(
        MollieSubscriptionInterface $subscription,
        FactoryInterface $subscriptionSateMachineFactory,
        StateMachineInterface $stateMachine
    ): void
    {
        $subscriptionSateMachineFactory->get(
            $subscription,
            MollieSubscriptionProcessingTransitions::GRAPH
        )->willReturn($stateMachine);

        $stateMachine->can(MollieSubscriptionProcessingTransitions::TRANSITION_PROCESS)->willReturn(true);
        $stateMachine->apply(MollieSubscriptionProcessingTransitions::TRANSITION_PROCESS)->willReturn(true);

        $this->apply($subscription,MollieSubscriptionProcessingTransitions::TRANSITION_PROCESS);
    }

    function it_cannot_applies(
        MollieSubscriptionInterface $subscription,
        FactoryInterface $subscriptionSateMachineFactory,
        StateMachineInterface $stateMachine
    ): void
    {
        $subscriptionSateMachineFactory->get(
            $subscription,
            MollieSubscriptionProcessingTransitions::GRAPH
        )->willReturn($stateMachine);

        $stateMachine->can(MollieSubscriptionProcessingTransitions::TRANSITION_PROCESS)->willReturn(false);
        $stateMachine->apply(MollieSubscriptionProcessingTransitions::TRANSITION_PROCESS)->shouldNotBeCalled();

        $this->apply($subscription,MollieSubscriptionProcessingTransitions::TRANSITION_PROCESS);
    }

}
