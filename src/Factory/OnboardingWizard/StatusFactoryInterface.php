<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Factory\OnboardingWizard;

use SyliusMolliePlugin\Entity\OnboardingWizardStatusInterface;
use Sylius\Component\Core\Model\AdminUserInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

interface StatusFactoryInterface extends FactoryInterface
{
    public function create(AdminUserInterface $adminUser, bool $completed): OnboardingWizardStatusInterface;
}
