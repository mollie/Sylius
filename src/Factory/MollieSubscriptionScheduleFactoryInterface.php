<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Factory;

use SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use SyliusMolliePlugin\Entity\MollieSubscriptionScheduleInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

interface MollieSubscriptionScheduleFactoryInterface extends FactoryInterface
{
    public function createConfiguredForSubscription(
        MollieSubscriptionInterface $mollieSubscription,
        \DateTime $scheduledDateStart,
        int $index,
        \DateTime $fulfilledDate = null
    ): MollieSubscriptionScheduleInterface;
}
