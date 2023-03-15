<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Generator;

use SyliusMolliePlugin\Entity\MollieSubscriptionInterface;

interface SubscriptionScheduleGeneratorInterface
{
    public function generate(MollieSubscriptionInterface $subscription): array;
}
