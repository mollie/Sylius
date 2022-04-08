<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

interface MollieSubscriptionConfigurationInterface
{
    public const SUPPORTED_INTERVAL_STEPS = [
        'days',
        'weeks',
        'months',
    ];

    public function getId(): ?int;

    public function getHostName(): string;

    public function getPort(): ?int;

    public function getSubscriptionId(): ?string;

    public function getMandateId(): ?string;

    public function getCustomerId(): ?string;

    public function getInterval(): ?string;

    public function setHostName(string $hostName): void;

    public function setPort(?int $port): void;

    public function setSubscriptionId(?string $subscriptionId): void;

    public function setMandateId(?string $mandateId): void;

    public function setCustomerId(?string $customerId): void;

    public function setInterval(string $interval): void;

    public function setNumberOfRepetitions(int $numberOfRepetitions): void;

    public function getNumberOfRepetitions(): int;

    public function setPaymentDetailsConfiguration(array $paymentDetailsConfiguration): void;

    public function getPaymentDetailsConfiguration(): array;

    public function getSubscription(): MollieSubscriptionInterface;
}
