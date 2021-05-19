<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Resource\Model\ResourceInterface;

interface SubscriptionInterface extends ResourceInterface
{
    public const STATE_NEW = 'new';

    public const STATE_PENDING = 'pending';

    public const STATE_ACTIVE = 'active';

    public const STATE_CANCELLED = 'cancelled';

    public const STATE_SUSPENDED = 'suspended';

    public const STATE_COMPLETED = 'completed';

    public function getOrder(): OrderInterface;

    public function setOrder(OrderInterface $order): void;

    public function getSubscriptionId(): ?string;

    public function setSubscriptionId(?string $subscriptionId): void;

    public function getCustomerId(): ?string;

    public function setCustomerId(?string $customerId): void;

    public function getState(): string;

    public function setState(string $state): void;
}
