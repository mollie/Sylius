<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Sylius\Component\Core\Model\OrderInterface as SyliusOrder;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Customer\Model\CustomerInterface;

class MollieSubscription implements MollieSubscriptionInterface
{
    protected ?int $id = null;
    protected string $state = MollieSubscriptionInterface::STATE_NEW;
    protected string $interval = MollieSubscriptionInterface::INTERVAL_DEFAULT;
    protected int $numberOfRepetitions = 1;
    protected ?CustomerInterface $customer = null;
    protected \DateTime $createdAt;
    protected ?\DateTime $startedAt = null;
    protected ?string $subscriptionId = null;
    protected ?string $mandateId = null;
    protected ?string $customerId = null;
    protected OrderItemInterface $orderItem;
    protected Collection $schedules;

    /** @var Collection<int, PaymentInterface> */
    protected Collection $payments;

    /** @var Collection<int, SyliusOrder> */
    protected Collection $orders;

    public function __construct()
    {
        $this->payments = new ArrayCollection();
        $this->orders = new ArrayCollection();
        $this->schedules = new ArrayCollection();
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getState(): string
    {
        return $this->state;
    }

    public function setState(string $state): void
    {
        $this->state = $state;
    }

    public function getPayments(): Collection
    {
        return $this->payments;
    }

    public function addPayment(PaymentInterface $payment): void
    {
        if (false === $this->payments->contains($payment)) {
            $this->payments->add($payment);
        }
    }

    public function getOrders(): Collection
    {
        return $this->orders;
    }

    public function addOrder(SyliusOrder $order): void
    {
        if (false === $this->orders->contains($order)) {
            $this->orders->add($order);
        }
    }

    public function getCustomer(): CustomerInterface
    {
        return $this->customer;
    }

    public function setCustomer(CustomerInterface $customer): void
    {
        $this->customer = $customer;
    }

    public function getInterval(): string
    {
        return $this->interval;
    }

    public function setInterval(string $interval): void
    {
        $this->interval = $interval;
    }

    public function getCreatedAt(): \DateTime
    {
        return $this->createdAt;
    }

    public function getStartedAt(): ?\DateTime
    {
        return $this->startedAt;
    }

    public function setStartedAt(?\DateTime $startedAt = null): void
    {
        $this->startedAt = $startedAt;
    }

    public function getSubscriptionId(): ?string
    {
        return $this->subscriptionId;
    }

    public function setSubscriptionId(?string $subscriptionId = null): void
    {
        $this->subscriptionId = $subscriptionId;
    }

    public function getCustomerId(): ?string
    {
        return $this->customerId;
    }

    public function setCustomerId(?string $customerId = null): void
    {
        $this->customerId = $customerId;
    }

    public function getLastOrder(): ?SyliusOrder
    {
        return $this->orders->last();
    }

    public function getNumberOfRepetitions(): int
    {
        return $this->numberOfRepetitions;
    }

    public function setNumberOfRepetitions(int $numberOfRepetitions): void
    {
        $this->numberOfRepetitions = $numberOfRepetitions;
    }

    public function getOrderItem(): OrderItemInterface
    {
        return $this->orderItem;
    }

    public function setOrderItem(OrderItemInterface $orderItem): void
    {
        $this->orderItem = $orderItem;
    }

    public function getMandateId(): ?string
    {
        return $this->mandateId;
    }

    public function setMandateId(?string $mandateId = null): void
    {
        $this->mandateId = $mandateId;
    }

    public function addSchedule(MollieSubscriptionScheduleInterface $schedule): void
    {
        if (false === $this->schedules->contains($schedule)) {
            $this->schedules->add($schedule);
            $schedule->setMollieSubscription($this);
        }
    }

    public function removeSchedule(MollieSubscriptionScheduleInterface $schedule): void
    {
        if (true === $this->schedules->contains($schedule)) {
            $this->schedules->removeElement($schedule);
        }
    }

    public function getSchedules(): Collection
    {
        return $this->schedules;
    }
}
