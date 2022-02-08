<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Entity;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionSchedule;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionScheduleInterface;
use PhpSpec\ObjectBehavior;

final class MollieSubscriptionScheduleSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieSubscriptionSchedule::class);
    }

    function it_should_implemets_mollie_subscription_schedule_interface(): void
    {
        $this->shouldImplement(MollieSubscriptionScheduleInterface::class);
    }

    function it_gets_mollie_subscription(
        MollieSubscriptionInterface $mollieSubscription
    ): void {
        $this->setMollieSubscription($mollieSubscription);
        $this->getMollieSubscription()->shouldReturn($mollieSubscription);
    }

    function it_gets_scheduled_date(\DateTime $time): void
    {
        $time->setDate(2029,12,12);
        $this->setScheduledDate($time);
        $this->getScheduledDate()->shouldReturn($time);
    }

    function it_gets_fulfilled_date(\DateTime $time): void
    {
        $time->setDate(2021,12,12);
        $this->setScheduledDate($time);
        $this->getScheduledDate()->shouldReturn($time);
    }

    function it_gets_schedule_index(): void
    {
        $this->setScheduleIndex(15);
        $this->getScheduleIndex()->shouldReturn(15);
    }
}
