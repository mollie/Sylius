<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Processor;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;

interface SubscriptionProcessorInterface
{
    public function processNextPayment(MollieSubscriptionInterface $subscription): void;

    public function processNextSubscriptionPayment(MollieSubscriptionInterface $subscription): void;
}
