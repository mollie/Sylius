<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Creator;

use BitBag\SyliusMolliePlugin\Entity\OnboardingWizardStatus;

interface OnboardingWizardStatusCreatorInterface
{
    public function create(): OnboardingWizardStatus;
}
