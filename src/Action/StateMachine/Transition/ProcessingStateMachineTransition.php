<?php

/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action\StateMachine\Transition;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionProcessingTransitions;
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
