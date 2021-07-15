<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Factory\OnboardingWizard;

use BitBag\SyliusMolliePlugin\Entity\OnboardingWizardStatus;
use BitBag\SyliusMolliePlugin\Entity\OnboardingWizardStatusInterface;
use Sylius\Component\Core\Model\AdminUserInterface;

final class StatusFactory implements StatusFactoryInterface
{
    public function create(AdminUserInterface $adminUser, bool $completed): OnboardingWizardStatusInterface
    {
        $onboardingWizardStatus = new OnboardingWizardStatus();

        $onboardingWizardStatus->setAdminUser($adminUser);
        $onboardingWizardStatus->setCompleted($completed);

        return $onboardingWizardStatus;
    }

    public function createNew(): OnboardingWizardStatus
    {
        return new OnboardingWizardStatus();
    }
}
