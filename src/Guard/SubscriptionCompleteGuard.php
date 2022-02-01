<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Guard;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionScheduleInterface;

final class SubscriptionCompleteGuard implements SubscriptionCompleteGuardInterface
{
    public function isCompletable(MollieSubscriptionInterface $subscription): bool
    {
        foreach ($subscription->getSchedules() as $schedule) {
            /** @var MollieSubscriptionScheduleInterface $schedule */
            if (null === $schedule->getFulfilledDate()) {
                return false;
            }
        }

        return true;
    }
}
