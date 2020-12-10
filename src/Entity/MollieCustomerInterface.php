<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

interface MollieCustomerInterface
{
    public function getId(): int;

    public function getProfileId(): ?string;

    public function setProfileId(string $profileId): void;

    public function getEmail(): string;

    public function setEmail(string $email): void;
}
