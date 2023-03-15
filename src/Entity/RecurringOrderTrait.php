<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Entity;

trait RecurringOrderTrait
{
    protected ?int $recurringSequenceIndex = null;

    protected ?MollieSubscriptionInterface $subscription = null;

    public function getRecurringSequenceIndex(): ?int
    {
        return $this->recurringSequenceIndex;
    }

    public function setRecurringSequenceIndex(?int $recurringSequenceIndex): void
    {
        $this->recurringSequenceIndex = $recurringSequenceIndex;
    }

    public function getSubscription(): ?MollieSubscriptionInterface
    {
        return $this->subscription;
    }

    public function setSubscription(MollieSubscriptionInterface $subscription): void
    {
        $this->subscription = $subscription;
    }
}
