<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver\OnboardingWizard;

use BitBag\SyliusMolliePlugin\Entity\OnboardingWizardStatus;
use BitBag\SyliusMolliePlugin\Entity\OnboardingWizardStatusInterface;
use BitBag\SyliusMolliePlugin\Factory\OnboardingWizard\StatusFactoryInterface;
use Sylius\Component\Core\Model\AdminUserInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class StatusResolver implements StatusResolverInterface
{
    /** @var RepositoryInterface */
    private $statusRepository;

    /** @var StatusFactoryInterface */
    private $statusFactory;

    public function __construct(RepositoryInterface $statusRepository, StatusFactoryInterface $statusFactory)
    {
        $this->statusRepository = $statusRepository;
        $this->statusFactory = $statusFactory;
    }

    public function resolve(AdminUserInterface $adminUser): OnboardingWizardStatusInterface
    {
        $onboardingWizardStatus = $this->statusRepository->findOneBy(['adminUser' => $adminUser]);

        if (!$onboardingWizardStatus instanceof OnboardingWizardStatus) {
            $onboardingWizardStatus = $this->statusFactory->create($adminUser, true);
        }

        return $onboardingWizardStatus;
    }
}
