<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action\StateMachine;

use BitBag\SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CancelRecurringSubscription;
use BitBag\SyliusMolliePlugin\Request\StateMachine\StatusRecurringSubscription;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionPaymentProcessingTransitions;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionProcessingTransitions;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionTransitions;
use Doctrine\ORM\EntityManagerInterface;
use Mollie\Api\Resources\Customer;
use Mollie\Api\Resources\Subscription;
use Mollie\Api\Types\PaymentStatus;
use Mollie\Api\Types\SubscriptionStatus;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Exception\RequestNotSupportedException;
use SM\Factory\FactoryInterface;
use Sylius\Component\Core\Model\PaymentInterface;

final class StatusRecurringSubscriptionAction extends BaseApiAwareAction implements ActionInterface, ApiAwareInterface
{
    /** @var EntityManagerInterface */
    private $subscriptionManager;

    /** @var FactoryInterface */
    private $subscriptionSateMachineFactory;

    public function __construct(
        EntityManagerInterface $subscriptionManager,
        FactoryInterface $subscriptionSateMachineFactory
    )
    {
        $this->subscriptionManager = $subscriptionManager;
        $this->subscriptionSateMachineFactory = $subscriptionSateMachineFactory;
    }

    /** @param CancelRecurringSubscription $request */
    public function execute($request): void
    {
        /** @var StatusRecurringSubscription $request */
        RequestNotSupportedException::assertSupports($this, $request);

        /** @var MollieSubscriptionInterface $subscription */
        $subscription = $request->getModel();
        $paymentId = $request->getPaymentId();
        $syliusPayment = $request->getPayment();

        if (null !== $paymentId) {
            $this->executeForSubscriptionAndPaymentId($subscription, $paymentId);
        }

        if (null !== $syliusPayment) {
            $this->executeForSubscriptionAndSyliusPayment($subscription, $syliusPayment);
        }

        $this->applyStateMachineTransition($subscription, MollieSubscriptionTransitions::TRANSITION_COMPLETE);
        $this->applyStateMachineTransition($subscription, MollieSubscriptionTransitions::TRANSITION_ABORT);

        $this->subscriptionManager->persist($subscription);
        $this->subscriptionManager->flush();
    }

    private function executeForSubscriptionAndPaymentId(
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
                $this->applyPaymentStateMachineTransition(
                    $subscription,
                    MollieSubscriptionPaymentProcessingTransitions::TRANSITION_BEGIN
                );
                $this->applyStateMachineTransition($subscription, MollieSubscriptionTransitions::TRANSITION_PROCESS);

                break;
            case PaymentStatus::STATUS_PAID:
                $subscription->resetFailedPaymentCount();
                $this->applyStateMachineTransition($subscription, MollieSubscriptionTransitions::TRANSITION_ACTIVATE);
                $this->applyPaymentStateMachineTransition(
                    $subscription,
                    MollieSubscriptionPaymentProcessingTransitions::TRANSITION_SUCCESS
                );
                $this->applyProcessingStateMachineTransition(
                    $subscription,
                    MollieSubscriptionProcessingTransitions::TRANSITION_SCHEDULE
                );

                break;
            default:
                $subscription->incrementFailedPaymentCounter();
                $this->applyPaymentStateMachineTransition(
                    $subscription,
                    MollieSubscriptionPaymentProcessingTransitions::TRANSITION_FAILURE
                );

                break;
        }
    }

    private function executeForSubscriptionAndSyliusPayment(
        MollieSubscriptionInterface $subscription,
        PaymentInterface $payment
    ): void
    {
        switch ($payment->getState()) {
            case PaymentInterface::STATE_NEW:
            case PaymentInterface::STATE_PROCESSING:
            case PaymentInterface::STATE_AUTHORIZED:
            case PaymentInterface::STATE_CART:
                $this->applyPaymentStateMachineTransition(
                    $subscription,
                    MollieSubscriptionPaymentProcessingTransitions::TRANSITION_BEGIN
                );
                $this->applyStateMachineTransition($subscription, MollieSubscriptionTransitions::TRANSITION_PROCESS);

                break;
            case PaymentInterface::STATE_COMPLETED:
                $subscription->resetFailedPaymentCount();
                $this->applyStateMachineTransition($subscription, MollieSubscriptionTransitions::TRANSITION_ACTIVATE);
                $this->applyPaymentStateMachineTransition(
                    $subscription,
                    MollieSubscriptionPaymentProcessingTransitions::TRANSITION_SUCCESS
                );
                $this->applyProcessingStateMachineTransition(
                    $subscription,
                    MollieSubscriptionProcessingTransitions::TRANSITION_SCHEDULE
                );

                break;
            default:
                $subscription->incrementFailedPaymentCounter();
                $this->applyPaymentStateMachineTransition(
                    $subscription,
                    MollieSubscriptionPaymentProcessingTransitions::TRANSITION_FAILURE
                );


        }
    }

    public function supports($request): bool
    {
        return
            $request instanceof StatusRecurringSubscription &&
            $request->getModel() instanceof MollieSubscriptionInterface;
    }

    private function applyStateMachineTransition(MollieSubscriptionInterface $subscription, string $transitions): void
    {
        $stateMachine = $this->subscriptionSateMachineFactory->get($subscription, MollieSubscriptionTransitions::GRAPH);

        if (!$stateMachine->can($transitions)) {
            return;
        }

        $stateMachine->apply($transitions);
    }

    private function applyProcessingStateMachineTransition(
        MollieSubscriptionInterface $subscription,
        string $transitions
    ): void
    {
        $stateMachine = $this->subscriptionSateMachineFactory->get(
            $subscription,
            MollieSubscriptionProcessingTransitions::GRAPH
        );

        if (!$stateMachine->can($transitions)) {
            return;
        }

        $stateMachine->apply($transitions);
    }

    private function applyPaymentStateMachineTransition(
        MollieSubscriptionInterface $subscription,
        string $transitions
    ): void
    {
        $stateMachine = $this->subscriptionSateMachineFactory->get(
            $subscription,
            MollieSubscriptionPaymentProcessingTransitions::GRAPH
        );

        if (!$stateMachine->can($transitions)) {
            return;
        }

        $stateMachine->apply($transitions);
    }
}
