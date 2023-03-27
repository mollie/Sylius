<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\PaymentProcessing;

use SyliusMolliePlugin\Entity\MollieSubscriptionInterface;

interface CancelRecurringSubscriptionProcessorInterface
{
    public function process(MollieSubscriptionInterface $subscription): void;
}
