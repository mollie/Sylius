<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Factory\OnboardingWizard;

use BitBag\SyliusMolliePlugin\Entity\OnboardingWizardStatusInterface;
use Sylius\Component\Core\Model\AdminUserInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class StatusFactory implements StatusFactoryInterface
{
    /** @var FactoryInterface */
    private $factory;

    public function __construct(FactoryInterface $factory)
    {
        $this->factory = $factory;
    }

    public function createNew(): OnboardingWizardStatusInterface
    {
        /** @var OnboardingWizardStatusInterface $statusFactory */
        $statusFactory = $this->factory->createNew();

        return $statusFactory;
    }

    public function create(AdminUserInterface $adminUser, bool $completed): OnboardingWizardStatusInterface
    {
        $onboardingWizardStatus = $this->createNew();

        $onboardingWizardStatus->setAdminUser($adminUser);
        $onboardingWizardStatus->setCompleted($completed);

        return $onboardingWizardStatus;
    }
}
