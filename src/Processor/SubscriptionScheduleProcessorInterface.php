<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Processor;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;

interface SubscriptionScheduleProcessorInterface
{
    public function process(MollieSubscriptionInterface $subscription): void;
}
