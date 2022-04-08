<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

use Sylius\Component\Resource\Model\ResourceInterface;

interface MollieSubscriptionScheduleInterface extends ResourceInterface
{
    public function getMollieSubscription(): MollieSubscriptionInterface;

    public function getScheduledDate(): \DateTime;

    public function getFulfilledDate(): ?\DateTimeInterface;

    public function setMollieSubscription(MollieSubscriptionInterface $mollieSubscription): void;

    public function setScheduledDate(\DateTime $scheduledDate): void;

    public function setFulfilledDate(?\DateTimeInterface $fulfilledDate): void;

    public function isFulfilled(): bool;

    public function setScheduleIndex(int $scheduleIndex): void;

    public function getScheduleIndex(): int;
}
