<?php

declare(strict_types=1);

namespace SyliusMolliePlugin\Processor;

use SyliusMolliePlugin\Entity\MollieSubscriptionInterface;

interface SubscriptionProcessorInterface
{
    public function processNextPayment(MollieSubscriptionInterface $subscription): void;

    public function processNextSubscriptionPayment(MollieSubscriptionInterface $subscription): void;
}
