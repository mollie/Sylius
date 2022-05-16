<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionScheduleInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class MollieSubscriptionScheduleFactory implements MollieSubscriptionScheduleFactoryInterface
{
    private FactoryInterface $decoratedFactory;

    public function __construct(FactoryInterface $decoratedFactory)
    {
        $this->decoratedFactory = $decoratedFactory;
    }

    public function createNew(): object
    {
        return $this->decoratedFactory->createNew();
    }

    public function createConfiguredForSubscription(
        MollieSubscriptionInterface $mollieSubscription,
        \DateTime $scheduledDateStart,
        int $index,
        \DateTime $fulfilledDate = null
    ): MollieSubscriptionScheduleInterface {
        /** @var MollieSubscriptionScheduleInterface $schedule */
        $schedule = $this->createNew();
        $schedule->setMollieSubscription($mollieSubscription);
        $schedule->setScheduledDate($scheduledDateStart);
        $schedule->setScheduleIndex($index);
        if (null !== $fulfilledDate) {
            $schedule->setFulfilledDate($fulfilledDate);
        }

        return $schedule;
    }
}
