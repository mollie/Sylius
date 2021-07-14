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
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class StatusFactory implements StatusFactoryInterface
{
    /** @var RepositoryInterface $statusRepository */
    private $statusRepository;

    public function __construct(RepositoryInterface $statusRepository)
    {
        $this->statusRepository = $statusRepository;
    }
    public function create(AdminUserInterface $adminUser): OnboardingWizardStatusInterface
    {
        $onboardingWizardStatus = $this->statusRepository->findOneBy(['adminUser' => $adminUser]);

        if (!$onboardingWizardStatus instanceof OnboardingWizardStatus) {
            $onboardingWizardStatus = new OnboardingWizardStatus();
            $onboardingWizardStatus->setAdminUser($adminUser);
        }

        return $onboardingWizardStatus;
    }
}
