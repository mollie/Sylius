<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Action\StateMachine\Applicator;

use BitBag\SyliusMolliePlugin\Action\StateMachine\Applicator\SubscriptionAndPaymentIdApplicator;
use BitBag\SyliusMolliePlugin\Action\StateMachine\Applicator\SubscriptionAndPaymentIdApplicatorInterface;
use BitBag\SyliusMolliePlugin\Action\StateMachine\Applicator\SubscriptionAndSyliusPaymentApplicator;
use BitBag\SyliusMolliePlugin\Action\StateMachine\Applicator\SubscriptionAndSyliusPaymentApplicatorInterface;
use BitBag\SyliusMolliePlugin\Action\StateMachine\Transition\PaymentStateMachineTransitionInterface;
use BitBag\SyliusMolliePlugin\Action\StateMachine\Transition\ProcessingStateMachineTransitionInterface;
use BitBag\SyliusMolliePlugin\Action\StateMachine\Transition\StateMachineTransitionInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionPaymentProcessingTransitions;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionProcessingTransitions;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionTransitions;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Core\Model\PaymentInterface;

final class SubscriptionAndSyliusPaymentApplicatorSpec extends ObjectBehavior
{
    function let(
        StateMachineTransitionInterface $stateMachineTransition,
        PaymentStateMachineTransitionInterface $paymentStateMachineTransition,
        ProcessingStateMachineTransitionInterface $processingStateMachineTransition
    ): void {
        $this->beConstructedWith(
            $stateMachineTransition,
            $paymentStateMachineTransition,
            $processingStateMachineTransition
        );
    }
    function it_is_initializable(): void
    {
        $this->shouldHaveType(SubscriptionAndSyliusPaymentApplicator::class);
    }

    function it_should_implement_interface(): void
    {
        $this->shouldImplement(SubscriptionAndSyliusPaymentApplicatorInterface::class);
    }

    function it_executes_state_new(
        MollieSubscriptionInterface $subscription,
        PaymentInterface $payment,
        PaymentStateMachineTransitionInterface $paymentStateMachineTransition,
        StateMachineTransitionInterface $stateMachineTransition
    ): void {
        $payment->getState()->willReturn(PaymentInterface::STATE_NEW);

        $paymentStateMachineTransition->apply(
            $subscription,
            MollieSubscriptionPaymentProcessingTransitions::TRANSITION_BEGIN
        )->shouldBeCalled();
        $stateMachineTransition->apply($subscription,
            MollieSubscriptionTransitions::TRANSITION_PROCESS
        )->shouldBeCalled();

        $this->execute($subscription, $payment);
    }

    function it_executes_state_processing(
        MollieSubscriptionInterface $subscription,
        PaymentInterface $payment,
        PaymentStateMachineTransitionInterface $paymentStateMachineTransition,
        StateMachineTransitionInterface $stateMachineTransition
    ): void {
        $payment->getState()->willReturn(PaymentInterface::STATE_PROCESSING);

        $paymentStateMachineTransition->apply(
            $subscription,
            MollieSubscriptionPaymentProcessingTransitions::TRANSITION_BEGIN
        )->shouldBeCalled();
        $stateMachineTransition->apply($subscription,
            MollieSubscriptionTransitions::TRANSITION_PROCESS
        )->shouldBeCalled();

        $this->execute($subscription, $payment);
    }

    function it_executes_state_authorized(
        MollieSubscriptionInterface $subscription,
        PaymentInterface $payment,
        PaymentStateMachineTransitionInterface $paymentStateMachineTransition,
        StateMachineTransitionInterface $stateMachineTransition
    ): void {
        $payment->getState()->willReturn(PaymentInterface::STATE_AUTHORIZED);

        $paymentStateMachineTransition->apply(
            $subscription,
            MollieSubscriptionPaymentProcessingTransitions::TRANSITION_BEGIN
        )->shouldBeCalled();
        $stateMachineTransition->apply($subscription,
            MollieSubscriptionTransitions::TRANSITION_PROCESS
        )->shouldBeCalled();

        $this->execute($subscription, $payment);
    }

    function it_executes_state_cart(
        MollieSubscriptionInterface $subscription,
        PaymentInterface $payment,
        PaymentStateMachineTransitionInterface $paymentStateMachineTransition,
        StateMachineTransitionInterface $stateMachineTransition
    ): void {
        $payment->getState()->willReturn(PaymentInterface::STATE_CART);

        $paymentStateMachineTransition->apply(
            $subscription,
            MollieSubscriptionPaymentProcessingTransitions::TRANSITION_BEGIN
        )->shouldBeCalled();
        $stateMachineTransition->apply($subscription,
            MollieSubscriptionTransitions::TRANSITION_PROCESS
        )->shouldBeCalled();

        $this->execute($subscription, $payment);
    }

    function it_executes_state_completed(
        MollieSubscriptionInterface $subscription,
        PaymentInterface $payment,
        PaymentStateMachineTransitionInterface $paymentStateMachineTransition,
        StateMachineTransitionInterface $stateMachineTransition,
        ProcessingStateMachineTransitionInterface $processingStateMachineTransition
    ): void {
        $payment->getState()->willReturn(PaymentInterface::STATE_COMPLETED);

        $subscription->resetFailedPaymentCount()->shouldBeCalled();
        $stateMachineTransition->apply(
            $subscription,
            MollieSubscriptionTransitions::TRANSITION_ACTIVATE
        )->shouldBeCalled();
        $paymentStateMachineTransition->apply(
            $subscription,
            MollieSubscriptionPaymentProcessingTransitions::TRANSITION_SUCCESS
        )->shouldBeCalled();
        $processingStateMachineTransition->apply(
            $subscription,
            MollieSubscriptionProcessingTransitions::TRANSITION_SCHEDULE
        )->shouldBeCalled();

        $this->execute($subscription, $payment);
    }

    function it_executes_and_fail(
        MollieSubscriptionInterface $subscription,
        PaymentInterface $payment,
        PaymentStateMachineTransitionInterface $paymentStateMachineTransition
    ): void {
        $payment->getState()->willReturn('definitely not state');

        $subscription->incrementFailedPaymentCounter()->shouldBeCalled();
        $paymentStateMachineTransition->apply(
            $subscription,
            MollieSubscriptionPaymentProcessingTransitions::TRANSITION_FAILURE
        )->shouldBeCalled();

        $this->execute($subscription, $payment);
    }
}
