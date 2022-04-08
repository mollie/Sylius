<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Guard;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionScheduleInterface;

final class SubscriptionGuard implements SubscriptionGuardInterface
{
    public function isEligibleForPaymentsAbort(MollieSubscriptionInterface $subscription): bool
    {
        return 2 < $subscription->getRecentFailedPaymentsCount();
    }

    public function isCompletable(MollieSubscriptionInterface $subscription): bool
    {
        foreach ($subscription->getSchedules() as $schedule) {
            /** @var MollieSubscriptionScheduleInterface $schedule */
            if (false === $schedule->isFulfilled()) {
                return false;
            }
        }

        return true;
    }
}
