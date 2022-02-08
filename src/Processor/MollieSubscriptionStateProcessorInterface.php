<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Processor;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;

interface MollieSubscriptionStateProcessorInterface
{
    public function processCancel(MollieSubscriptionInterface $mollieSubscription): void;
}
