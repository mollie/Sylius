<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Creator\OnboardingWizard;

use SyliusMolliePlugin\Entity\OnboardingWizardStatusInterface;

interface StatusCreatorInterface
{
    public function create(): OnboardingWizardStatusInterface;
}
