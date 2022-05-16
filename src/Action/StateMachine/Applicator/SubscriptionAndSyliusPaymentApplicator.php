<?php

/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action\StateMachine\Applicator;

use BitBag\SyliusMolliePlugin\Action\StateMachine\Transition\PaymentStateMachineTransitionInterface;
use BitBag\SyliusMolliePlugin\Action\StateMachine\Transition\ProcessingStateMachineTransitionInterface;
use BitBag\SyliusMolliePlugin\Action\StateMachine\Transition\StateMachineTransitionInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionPaymentProcessingTransitions;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionProcessingTransitions;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionTransitions;
use Sylius\Component\Core\Model\PaymentInterface;

final class SubscriptionAndSyliusPaymentApplicator implements SubscriptionAndSyliusPaymentApplicatorInterface
{
    /** @var StateMachineTransitionInterface */
    private $stateMachineTransition;

    /** @var PaymentStateMachineTransitionInterface */
    private $paymentStateMachineTransition;

    /** @var ProcessingStateMachineTransitionInterface */
    private $processingStateMachineTransition;

    public function __construct(
        StateMachineTransitionInterface $stateMachineTransition,
        PaymentStateMachineTransitionInterface $paymentStateMachineTransition,
        ProcessingStateMachineTransitionInterface $processingStateMachineTransition
    ) {
        $this->stateMachineTransition = $stateMachineTransition;
        $this->paymentStateMachineTransition = $paymentStateMachineTransition;
        $this->processingStateMachineTransition = $processingStateMachineTransition;
    }

    public function execute(
        MollieSubscriptionInterface $subscription,
        PaymentInterface $payment
    ): void {
        switch ($payment->getState()) {
            case PaymentInterface::STATE_NEW:
            case PaymentInterface::STATE_PROCESSING:
            case PaymentInterface::STATE_AUTHORIZED:
            case PaymentInterface::STATE_CART:
                $this->paymentStateMachineTransition->apply(
                    $subscription,
                    MollieSubscriptionPaymentProcessingTransitions::TRANSITION_BEGIN
                );
                $this->stateMachineTransition->apply($subscription, MollieSubscriptionTransitions::TRANSITION_PROCESS);

                break;
            case PaymentInterface::STATE_COMPLETED:
                $subscription->resetFailedPaymentCount();
                $this->stateMachineTransition->apply($subscription, MollieSubscriptionTransitions::TRANSITION_ACTIVATE);
                $this->paymentStateMachineTransition->apply(
                    $subscription,
                    MollieSubscriptionPaymentProcessingTransitions::TRANSITION_SUCCESS
                );
                $this->processingStateMachineTransition->apply(
                    $subscription,
                    MollieSubscriptionProcessingTransitions::TRANSITION_SCHEDULE
                );

                break;
            default:
                $subscription->incrementFailedPaymentCounter();
                $this->paymentStateMachineTransition->apply(
                    $subscription,
                    MollieSubscriptionPaymentProcessingTransitions::TRANSITION_FAILURE
                );
        }
    }
}
