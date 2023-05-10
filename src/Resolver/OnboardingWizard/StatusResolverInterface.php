<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver\OnboardingWizard;

use SyliusMolliePlugin\Entity\OnboardingWizardStatusInterface;
use Sylius\Component\Core\Model\AdminUserInterface;

interface StatusResolverInterface
{
    public function resolve(AdminUserInterface $adminUser): OnboardingWizardStatusInterface;
}
