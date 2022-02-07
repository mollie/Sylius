<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Generator;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;

interface SubscriptionScheduleGeneratorInterface
{
    public function generate(MollieSubscriptionInterface $subscription): array;
}
