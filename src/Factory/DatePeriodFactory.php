<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Factory;

use Webmozart\Assert\Assert;

final class DatePeriodFactory implements DatePeriodFactoryInterface
{
    public const READ_PATTERN = '/^(?<intervalValue>\d{1,})\s(?<intervalStep>months|weeks|days)$/';

    public function createForSubscriptionConfiguration(
        \DateTime $start,
        int $times,
        string $interval
    ): array {
        Assert::regex($interval, self::READ_PATTERN);

        $dates = [
            $start,
        ];
        for ($i = 1; $i < $times; ++$i) {
            $dates[] = (clone $dates[$i - 1])->modify(sprintf('+%s', $interval));
        }

        return $dates;
    }
}
