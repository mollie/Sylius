<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Guard;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;

interface SubscriptionCompleteGuardInterface
{
    public function isCompletable(MollieSubscriptionInterface $subscription): bool;
}
