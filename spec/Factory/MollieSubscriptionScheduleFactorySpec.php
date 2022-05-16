<?php

/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionScheduleInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionScheduleFactory;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionScheduleFactoryInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Resource\Factory\FactoryInterface;
use Webmozart\Assert\Assert;

final class MollieSubscriptionScheduleFactorySpec extends ObjectBehavior
{
    function let(FactoryInterface $decoratedFactory): void
    {
        $this->beConstructedWith($decoratedFactory);
    }

    function it_is_initializable()
    {
        $this->shouldHaveType(MollieSubscriptionScheduleFactory::class);
    }

    function it_should_implements_mollie_subscription_schedule_factory_interface(): void
    {
        $this->shouldImplement(MollieSubscriptionScheduleFactoryInterface::class);
    }

    function it_creates_configured_for_subscription_when_fulfilled_date_is_null(
        FactoryInterface $decoratedFactory,
        MollieSubscriptionScheduleInterface $schedule,
        MollieSubscriptionInterface $mollieSubscription
    ): void {
        $scheduledDateStart = new \DateTime();
        $decoratedFactory->createNew()->willReturn($schedule);
        $schedule->setMollieSubscription($mollieSubscription);
        $schedule->setScheduledDate($scheduledDateStart);
        $schedule->setScheduleIndex(9);

        $this->createConfiguredForSubscription(
            $mollieSubscription,
            $scheduledDateStart,
            9
        )->shouldReturn($schedule);
    }

    function it_creates_configured_for_subscription_when_fulfilled_date_is_not_null(
        FactoryInterface $decoratedFactory,
        MollieSubscriptionScheduleInterface $schedule,
        MollieSubscriptionInterface $mollieSubscription
    ): void {
        $scheduledDateStart = new \DateTime();
        $fulfilledDate = new \DateTime;
        $fulfilledDate->setDate(2012,12,12);
        $decoratedFactory->createNew()->willReturn($schedule);

        $schedule->setMollieSubscription($mollieSubscription);
        $schedule->setScheduledDate($scheduledDateStart);
        $schedule->setScheduleIndex(9);

        $schedule->setFulfilledDate($fulfilledDate);
        Assert::notNull($fulfilledDate);

        $fulfilledDate = null;
        $schedule->setFulfilledDate($fulfilledDate);
        Assert::null($fulfilledDate);

        $this->createConfiguredForSubscription(
            $mollieSubscription,
            $scheduledDateStart,
            9,
            $fulfilledDate
        )->shouldReturn($schedule);
    }
}
