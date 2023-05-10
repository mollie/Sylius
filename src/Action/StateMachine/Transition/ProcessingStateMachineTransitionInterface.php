<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Action\StateMachine\Transition;

use SyliusMolliePlugin\Entity\MollieSubscriptionInterface;

interface ProcessingStateMachineTransitionInterface
{
    public function apply(MollieSubscriptionInterface $subscription, string $transitions): void;
}
