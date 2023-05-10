<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Guard;

use SyliusMolliePlugin\Entity\MollieSubscriptionInterface;

interface SubscriptionGuardInterface
{
    public function isCompletable(MollieSubscriptionInterface $subscription): bool;
}
