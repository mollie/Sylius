<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

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
