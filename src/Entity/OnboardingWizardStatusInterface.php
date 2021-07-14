<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

use Sylius\Component\Core\Model\AdminUserInterface;
use Sylius\Component\Resource\Model\ResourceInterface;

interface OnboardingWizardStatusInterface extends ResourceInterface
{
    public function isCompleted(): bool;

    public function setCompleted(bool $completed): void;

    public function getAdminUser(): AdminUserInterface;

    public function setAdminUser(AdminUserInterface $adminUser): void;
}
