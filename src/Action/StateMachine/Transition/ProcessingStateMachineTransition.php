<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Action\StateMachine\Transition;

use SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use SyliusMolliePlugin\Transitions\MollieSubscriptionProcessingTransitions;
use SM\Factory\FactoryInterface;

final class ProcessingStateMachineTransition implements ProcessingStateMachineTransitionInterface
{
    /** @var FactoryInterface */
    private $subscriptionStateMachineFactory;

    public function __construct(FactoryInterface $subscriptionStateMachineFactory)
    {
        $this->subscriptionStateMachineFactory = $subscriptionStateMachineFactory;
    }

    public function apply(
        MollieSubscriptionInterface $subscription,
        string $transitions
    ): void {
        $stateMachine = $this->subscriptionStateMachineFactory->get(
            $subscription,
            MollieSubscriptionProcessingTransitions::GRAPH
        );

        if (!$stateMachine->can($transitions)) {
            return;
        }

        $stateMachine->apply($transitions);
    }
}
