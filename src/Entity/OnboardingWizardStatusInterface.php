<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

use Sylius\Component\Customer\Model\CustomerInterface;

interface OnboardingWizardStatusInterface
{
    public function isCompleted(): bool;

    public function setCompleted(bool $completed): void;

    public function getCustomer(): CustomerInterface;

    public function setCustomer(CustomerInterface $customer): void;
}
