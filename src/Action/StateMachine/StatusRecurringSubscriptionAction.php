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
use BitBag\SyliusMolliePlugin\Action\StateMachine\Applicator\SubscriptionAndPaymentIdApplicatorInterface;
use BitBag\SyliusMolliePlugin\Action\StateMachine\Applicator\SubscriptionAndSyliusPaymentApplicatorInterface;
use BitBag\SyliusMolliePlugin\Action\StateMachine\Transition\StateMachineTransitionInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Request\StateMachine\StatusRecurringSubscription;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionTransitions;
use Doctrine\ORM\EntityManagerInterface;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Exception\RequestNotSupportedException;

final class StatusRecurringSubscriptionAction extends BaseApiAwareAction implements ActionInterface, ApiAwareInterface
{
    /** @var EntityManagerInterface */
    private $subscriptionManager;

    /** @var SubscriptionAndPaymentIdApplicatorInterface */
    private $subscriptionAndPaymentIdApplicator;

    /** @var SubscriptionAndSyliusPaymentApplicatorInterface */
    private $subscriptionAndSyliusPaymentApplicator;

    /** @var StateMachineTransitionInterface */
    private $stateMachineTransition;

    public function __construct(
        EntityManagerInterface $subscriptionManager,
        SubscriptionAndPaymentIdApplicatorInterface $subscriptionAndPaymentIdApplicator,
        SubscriptionAndSyliusPaymentApplicatorInterface $subscriptionAndSyliusPaymentApplicator,
        StateMachineTransitionInterface $stateMachineTransition
    ) {
        $this->subscriptionManager = $subscriptionManager;
        $this->subscriptionAndPaymentIdApplicator = $subscriptionAndPaymentIdApplicator;
        $this->subscriptionAndSyliusPaymentApplicator = $subscriptionAndSyliusPaymentApplicator;
        $this->stateMachineTransition = $stateMachineTransition;
    }

    /** @param StatusRecurringSubscription|mixed $request */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        /** @var MollieSubscriptionInterface $subscription */
        $subscription = $request->getModel();
        $paymentId = $request->getPaymentId();
        $syliusPayment = $request->getPayment();

        if (null !== $paymentId) {
            $this->subscriptionAndPaymentIdApplicator->execute($subscription, $paymentId);
        }

        if (null !== $syliusPayment) {
            $this->subscriptionAndSyliusPaymentApplicator->execute($subscription, $syliusPayment);
        }

        $this->stateMachineTransition->apply($subscription, MollieSubscriptionTransitions::TRANSITION_COMPLETE);
        $this->stateMachineTransition->apply($subscription, MollieSubscriptionTransitions::TRANSITION_ABORT);

        $this->subscriptionManager->persist($subscription);
        $this->subscriptionManager->flush();
    }

    public function supports($request): bool
    {
        return
            $request instanceof StatusRecurringSubscription &&
            $request->getModel() instanceof MollieSubscriptionInterface;
    }
}
