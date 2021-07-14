<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

interface OnboardingWizardStatusInterface
{
    public function isCompleted(): bool;

    public function setCompleted(bool $completed): void;
}
