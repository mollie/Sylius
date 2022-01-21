<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

use Doctrine\Common\Collections\Collection;
use Sylius\Component\Core\Model\OrderInterface as SyliusOrder;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Customer\Model\CustomerInterface;
use Sylius\Component\Resource\Model\ResourceInterface;

interface MollieSubscriptionInterface extends ResourceInterface
{
    public const STATE_NEW = 'new';
    public const STATE_ACTIVE = 'active';
    public const STATE_PROCESSING = 'processing';
    public const STATE_PAUSED = 'paused';
    public const STATE_CANCELED = 'canceled';
    public const STATE_COMPLETED = 'completed';

    public const INTERVAL_DEFAULT = '1 months';

    public function getState(): string;
    public function setState(string $state): void;

    /** @return Collection<int, PaymentInterface> */
    public function getPayments(): Collection;
    public function addPayment(PaymentInterface $payment): void;

    /** @return Collection<int, SyliusOrder> */
    public function getOrders(): Collection;
    public function addOrder(SyliusOrder $order): void;

    public function getCustomer(): CustomerInterface;
    public function setCustomer(CustomerInterface $user): void;

    public function getInterval(): string;
    public function setInterval(string $interval): void;

    public function getNumberOfRepetitions(): int;
    public function setNumberOfRepetitions(int $numberOfRepetitions): void;

    public function getOrderItem(): OrderItemInterface;
    public function setOrderItem(OrderItemInterface $orderItem): void;

    public function getCreatedAt(): \DateTime;

    public function getStartedAt(): ?\DateTime;
    public function setStartedAt(?\DateTime $startedAt = null): void;

    public function getSubscriptionId(): ?string;
    public function setSubscriptionId(?string $subscriptionId = null): void;

    public function getMandateId(): ?string;
    public function setMandateId(?string $mandateId = null): void;

    public function getCustomerId(): ?string;
    public function setCustomerId(?string $customerId = null): void;

    public function getLastOrder(): ?SyliusOrder;

        /** @return Collection<int, MollieSubscriptionScheduleInterface> */
    public function getSchedules(): Collection;
    public function addSchedule(MollieSubscriptionScheduleInterface $schedule): void;
    public function removeSchedule(MollieSubscriptionScheduleInterface $schedule): void;
}
