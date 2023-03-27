<?php

declare(strict_types=1);

namespace SyliusMolliePlugin\Processor;

use SyliusMolliePlugin\Entity\MollieSubscriptionInterface;

interface SubscriptionScheduleProcessorInterface
{
    public function process(MollieSubscriptionInterface $subscription): void;

    public function processScheduleGeneration(MollieSubscriptionInterface $subscription): void;
}
