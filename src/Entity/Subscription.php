<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

use Sylius\Component\Core\Model\OrderInterface;

class Subscription implements SubscriptionInterface
{
    /**
     * @var int|null
     */
    protected $id;

    /**
     * @var OrderInterface
     */
    protected $order;

    /**
     * @var string|null
     */
    protected $subscriptionId;

    /**
     * @var string|null
     */
    protected $customerId;

    /**
     * @var string
     */
    protected $state = SubscriptionInterface::STATE_NEW;

    /**
     * {@inheritdoc}
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * {@inheritdoc}
     */
    public function getOrder(): OrderInterface
    {
        return $this->order;
    }

    /**
     * {@inheritdoc}
     */
    public function setOrder(OrderInterface $order): void
    {
        $this->order = $order;
    }

    /**
     * {@inheritdoc}
     */
    public function getSubscriptionId(): ?string
    {
        return $this->subscriptionId;
    }

    /**
     * {@inheritdoc}
     */
    public function setSubscriptionId(?string $subscriptionId): void
    {
        $this->subscriptionId = $subscriptionId;
    }

    /**
     * {@inheritdoc}
     */
    public function getState(): string
    {
        return $this->state;
    }

    /**
     * {@inheritdoc}
     */
    public function setState(string $state): void
    {
        $this->state = $state;
    }

    /**
     * {@inheritdoc}
     */
    public function getCustomerId(): ?string
    {
        return $this->customerId;
    }

    /**
     * {@inheritdoc}
     */
    public function setCustomerId(?string $customerId): void
    {
        $this->customerId = $customerId;
    }
}
