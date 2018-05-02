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
use Sylius\Component\Resource\Model\ResourceInterface;

interface SubscriptionInterface extends ResourceInterface
{
    const STATE_NEW = 'new';
    const STATE_PENDING = 'pending';
    const STATE_ACTIVE = 'active';
    const STATE_CANCELLED = 'cancelled';
    const STATE_SUSPENDED = 'suspended';
    const STATE_COMPLETED = 'completed';

    /**
     * @return OrderInterface
     */
    public function getOrder(): OrderInterface;

    /**
     * @param OrderInterface $order
     */
    public function setOrder(OrderInterface $order): void;

    /**
     * @return null|string
     */
    public function getSubscriptionId(): ?string;

    /**
     * @param null|string $subscriptionId
     */
    public function setSubscriptionId(?string $subscriptionId): void;

    /**
     * @return null|string
     */
    public function getCustomerId(): ?string;

    /**
     * @param null|string $customerId
     */
    public function setCustomerId(?string $customerId): void;

    /**
     * @return string
     */
    public function getState(): string;

    /**
     * @param string $state
     */
    public function setState(string $state): void;
}
