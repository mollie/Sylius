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
use BitBag\SyliusMolliePlugin\Entity\SubscriptionInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CancelRecurringSubscription;
use BitBag\SyliusMolliePlugin\Request\StateMachine\StatusRecurringSubscription;
use BitBag\SyliusMolliePlugin\Transitions\SubscriptionTransitions;
use Doctrine\ORM\EntityManagerInterface;
use Mollie\Api\Resources\Customer;
use Mollie\Api\Resources\Subscription;
use Mollie\Api\Types\SubscriptionStatus;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Exception\RequestNotSupportedException;
use SM\Factory\FactoryInterface;

final class StatusRecurringSubscriptionAction extends BaseApiAwareAction implements ActionInterface, ApiAwareInterface
{
    /** @var EntityManagerInterface */
    private $subscriptionManager;

    /** @var FactoryInterface */
    private $subscriptionSateMachineFactory;

    public function __construct(
        EntityManagerInterface $subscriptionManager,
        FactoryInterface $subscriptionSateMachineFactory
    ) {
        $this->subscriptionManager = $subscriptionManager;
        $this->subscriptionSateMachineFactory = $subscriptionSateMachineFactory;
    }

    /** @param CancelRecurringSubscription $request */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        /** @var SubscriptionInterface $subscription */
        $subscription = $request->getModel();

        /** @var Customer $customer */
        $customer = $this->mollieApiClient->customers->get($subscription->getCustomerId());

        /** @var Subscription $subscriptionApiResult */
        $subscriptionApiResult = $customer->getSubscription($subscription->getSubscriptionId());

        switch ($subscriptionApiResult->status) {
            case SubscriptionStatus::STATUS_ACTIVE:
                $this->applyStateMachineTransition($subscription, SubscriptionTransitions::TRANSITION_ACTIVATE);

                break;
            case SubscriptionStatus::STATUS_PENDING:
                $this->applyStateMachineTransition($subscription, SubscriptionTransitions::TRANSITION_PROCESS);

                break;
            case SubscriptionStatus::STATUS_CANCELED:
                $this->applyStateMachineTransition($subscription, SubscriptionTransitions::TRANSITION_CANCEL);

                break;
            case SubscriptionStatus::STATUS_COMPLETED:
                $this->applyStateMachineTransition($subscription, SubscriptionTransitions::TRANSITION_COMPLETE);

                break;
            case SubscriptionStatus::STATUS_SUSPENDED:
                $this->applyStateMachineTransition($subscription, SubscriptionTransitions::TRANSITION_SUSPEND);

                break;
            default:
                $this->applyStateMachineTransition($subscription, SubscriptionTransitions::TRANSITION_FAIL);

                break;
        }
    }

    public function supports($request): bool
    {
        return
            $request instanceof StatusRecurringSubscription &&
            $request->getModel() instanceof SubscriptionInterface
        ;
    }

    private function applyStateMachineTransition(SubscriptionInterface $subscription, string $transitions): void
    {
        $stateMachine = $this->subscriptionSateMachineFactory->get($subscription, SubscriptionTransitions::GRAPH);

        if (!$stateMachine->can($transitions)) {
            return;
        }

        $stateMachine->apply($transitions);
    }
}
