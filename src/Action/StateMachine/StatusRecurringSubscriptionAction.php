<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action\StateMachine;

use BitBag\SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use BitBag\SyliusMolliePlugin\Entity\SubscriptionInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CancelRecurringSubscription;
use BitBag\SyliusMolliePlugin\Request\StateMachine\StatusRecurringSubscription;
use BitBag\SyliusMolliePlugin\Transitions\SubscriptionTransitions;
use Doctrine\ORM\EntityManagerInterface;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Exception\RequestNotSupportedException;
use SM\Factory\FactoryInterface;

final class StatusRecurringSubscriptionAction extends BaseApiAwareAction implements ActionInterface, ApiAwareInterface
{
    /**
     * @var EntityManagerInterface
     */
    private $subscriptionManager;

    /**
     * @var FactoryInterface
     */
    private $subscriptionSateMachineFactory;

    /**
     * @param EntityManagerInterface $subscriptionManager
     * @param FactoryInterface $subscriptionSateMachineFactory
     */
    public function __construct(
        EntityManagerInterface $subscriptionManager,
        FactoryInterface $subscriptionSateMachineFactory
    ) {
        $this->subscriptionManager = $subscriptionManager;
        $this->subscriptionSateMachineFactory = $subscriptionSateMachineFactory;
    }

    /**
     * {@inheritdoc}
     *
     * @param CancelRecurringSubscription $request
     */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        /** @var SubscriptionInterface $subscription */
        $subscription = $request->getModel();

        switch ($this->mollieApiClient->customers_subscriptions->get($subscription->getSubscriptionId())->status) {
            case \Mollie_API_Object_Customer_Subscription::STATUS_ACTIVE:
                $this->applyStateMachineTransition($subscription, SubscriptionTransitions::TRANSITION_ACTIVATE);

                break;
            case \Mollie_API_Object_Customer_Subscription::STATUS_PENDING:
                $this->applyStateMachineTransition($subscription, SubscriptionTransitions::TRANSITION_PROCESS);

                break;
            case \Mollie_API_Object_Customer_Subscription::STATUS_CANCELLED:
                $this->applyStateMachineTransition($subscription, SubscriptionTransitions::TRANSITION_CANCEL);

                break;
            case \Mollie_API_Object_Customer_Subscription::STATUS_COMPLETED:
                $this->applyStateMachineTransition($subscription, SubscriptionTransitions::TRANSITION_COMPLETE);

                break;
            case \Mollie_API_Object_Customer_Subscription::STATUS_SUSPENDED:
                $this->applyStateMachineTransition($subscription, SubscriptionTransitions::TRANSITION_SUSPEND);

                break;
            default:
                $this->applyStateMachineTransition($subscription, SubscriptionTransitions::TRANSITION_FAIL);

                break;
        }
    }

    /**
     * {@inheritdoc}
     */
    public function supports($request): bool
    {
        return
            $request instanceof StatusRecurringSubscription &&
            $request->getModel() instanceof SubscriptionInterface
        ;
    }

    /**
     * @param SubscriptionInterface $subscription
     * @param string $transitions
     *
     * @throws \SM\SMException
     */
    private function applyStateMachineTransition(SubscriptionInterface $subscription, string $transitions): void
    {
        $stateMachine = $this->subscriptionSateMachineFactory->get($subscription, SubscriptionTransitions::GRAPH);

        if (!$stateMachine->can($transitions)) {
            return;
        }

        $stateMachine->apply($transitions);
    }
}
