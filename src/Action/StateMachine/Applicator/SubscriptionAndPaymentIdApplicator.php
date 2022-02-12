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
use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionPaymentProcessingTransitions;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionProcessingTransitions;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionTransitions;
use Mollie\Api\Types\PaymentStatus;

final class SubscriptionAndPaymentIdApplicator implements SubscriptionAndPaymentIdApplicatorInterface
{
    /** @var MollieApiClient */
    private $mollieApiClient;

    /** @var StateMachineTransitionInterface */
    private $stateMachineTransition;

    /** @var PaymentStateMachineTransitionInterface */
    private $paymentStateMachineTransition;

    /** @var ProcessingStateMachineTransitionInterface */
    private $processingStateMachineTransition;

    public function __construct(
        MollieApiClient $mollieApiClient,
        StateMachineTransitionInterface $stateMachineTransition,
        PaymentStateMachineTransitionInterface $paymentStateMachineTransition,
        ProcessingStateMachineTransitionInterface $processingStateMachineTransition
    )
    {
        $this->mollieApiClient = $mollieApiClient;
        $this->stateMachineTransition = $stateMachineTransition;
        $this->paymentStateMachineTransition = $paymentStateMachineTransition;
        $this->processingStateMachineTransition = $processingStateMachineTransition;
    }

    public function execute(
        MollieSubscriptionInterface $subscription,
        string $paymentId
    ): void
    {
        $configuration = $subscription->getSubscriptionConfiguration();
        $payment = $this->mollieApiClient->payments->get($paymentId);

        if (null === $configuration->getMandateId()) {
            $configuration->setMandateId($payment->mandateId);
        }

        if (null === $configuration->getCustomerId()) {
            $configuration->setCustomerId($payment->customerId);
        }

        switch ($payment->status) {
            case PaymentStatus::STATUS_OPEN:
            case PaymentStatus::STATUS_PENDING:
            case PaymentStatus::STATUS_AUTHORIZED:
                $this->paymentStateMachineTransition->apply(
                    $subscription,
                    MollieSubscriptionPaymentProcessingTransitions::TRANSITION_BEGIN
                );
                $this->stateMachineTransition->apply(
                    $subscription,
                    MollieSubscriptionTransitions::TRANSITION_PROCESS)
                ;

                break;
            case PaymentStatus::STATUS_PAID:
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

                break;
        }
    }
}
