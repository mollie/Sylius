<?php

/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Generator;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionConfigurationInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionScheduleInterface;
use BitBag\SyliusMolliePlugin\Factory\DatePeriodFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionScheduleFactoryInterface;
use BitBag\SyliusMolliePlugin\Generator\SubscriptionScheduleGenerator;
use BitBag\SyliusMolliePlugin\Generator\SubscriptionScheduleGeneratorInterface;
use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

final class SubscriptionScheduleGeneratorSpec extends ObjectBehavior
{
    function let(
        DatePeriodFactoryInterface $datePeriodFactory,
        MollieSubscriptionScheduleFactoryInterface $scheduleFactory
    ): void {
        $this->beConstructedWith(
            $datePeriodFactory,
            $scheduleFactory
        );
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(SubscriptionScheduleGenerator::class);
    }

    function it_should_implement_subscription_shecdule_generator_interface(): void
    {
        $this->shouldImplement(SubscriptionScheduleGeneratorInterface::class);
    }

    function it_generates_subscription_schedule(
        MollieSubscriptionInterface $subscription,
        MollieSubscriptionConfigurationInterface $configuration,
        DatePeriodFactoryInterface $datePeriodFactory,
        MollieSubscriptionScheduleFactoryInterface $scheduleFactory,
        MollieSubscriptionScheduleInterface $schedule
    ): void {
        $startedAt = new \DateTime();
        $subscription->getStartedAt()->willReturn($startedAt);
        $subscription->getSubscriptionConfiguration()->willReturn($configuration);

        $configuration->getNumberOfRepetitions()->willReturn(5);
        $configuration->getInterval()->willReturn('month');

        $datePeriodFactory->createForSubscriptionConfiguration(
            Argument::any(),
            5,
            'month'
        )->willReturn([$startedAt]);

        $scheduleFactory->createConfiguredForSubscription(
            $subscription,
            Argument::any(),
           0,
            Argument::any()
        )->willReturn($schedule);

        $subscription->setStartedAt(Argument::any())->shouldBeCalled();
        $schedules = [$schedule->getWrappedObject()];

        $this->generate($subscription)->shouldReturn($schedules);
    }
}
