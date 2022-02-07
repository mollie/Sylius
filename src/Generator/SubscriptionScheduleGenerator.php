<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Generator;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Factory\DatePeriodFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionScheduleFactoryInterface;

final class SubscriptionScheduleGenerator implements SubscriptionScheduleGeneratorInterface
{
    private DatePeriodFactoryInterface $datePeriodFactory;
    private MollieSubscriptionScheduleFactoryInterface $scheduleFactory;

    public function __construct(
        DatePeriodFactoryInterface $datePeriodFactory,
        MollieSubscriptionScheduleFactoryInterface $scheduleFactory
    )
    {
        $this->datePeriodFactory = $datePeriodFactory;
        $this->scheduleFactory = $scheduleFactory;
    }

    public function generate(MollieSubscriptionInterface $subscription): array
    {
        $startedAt = new \DateTime();
        $subscription->setStartedAt($startedAt);
        $configuration = $subscription->getSubscriptionConfiguration();

        $datePeriods = $this->datePeriodFactory->createForSubscriptionConfiguration(
            $startedAt,
            $configuration->getNumberOfRepetitions(),
            $configuration->getInterval()
        );

        $schedules = [];
        foreach ($datePeriods as $index => $date) {
            $schedules[] = $this->scheduleFactory->createConfiguredForSubscription(
                $subscription,
                $date,
                $index,
                0 === $index ? $startedAt : null
            );
        }

        return $schedules;
    }
}
