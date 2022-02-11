<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Factory\DatePeriodFactory;
use BitBag\SyliusMolliePlugin\Factory\DatePeriodFactoryInterface;
use PhpSpec\ObjectBehavior;

final class DatePeriodFactorySpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(DatePeriodFactory::class);
    }

    function it_should_implements_date_period_factory_interface(): void
    {
        $this->shouldImplement(DatePeriodFactoryInterface::class);
    }

    function it_create_for_subscription_configuration(): void
    {
        $interval = '1 months';
        $times = 3;
        $startedAt = new \DateTime();

        $dates = [
            $startedAt
        ];

        for ($i = 1; $i < $times; $i++) {
            $dates[] = (clone $dates[$i-1])->modify('1 months');
        }

        $this->createForSubscriptionConfiguration(
            $startedAt,
            $times,
            $interval
        )->shouldBeLike($dates);
    }
}
