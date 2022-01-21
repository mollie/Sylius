<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Factory;

interface DatePeriodFactoryInterface
{
    public function createForSubscriptionConfiguration(\DateTime $start, int $times, string $interval): array;
}
