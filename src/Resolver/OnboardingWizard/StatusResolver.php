<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver\OnboardingWizard;

use SyliusMolliePlugin\Entity\OnboardingWizardStatus;
use SyliusMolliePlugin\Entity\OnboardingWizardStatusInterface;
use SyliusMolliePlugin\Factory\OnboardingWizard\StatusFactoryInterface;
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
