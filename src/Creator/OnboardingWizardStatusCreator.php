<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Creator;

use BitBag\SyliusMolliePlugin\Context\Admin\AdminUserContextInterface;
use BitBag\SyliusMolliePlugin\Entity\OnboardingWizardStatus;
use BitBag\SyliusMolliePlugin\Exceptions\AdminUserNotFound;
use Doctrine\ORM\EntityManagerInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class OnboardingWizardStatusCreator implements OnboardingWizardStatusCreatorInterface
{

    /** @var RepositoryInterface $statusRepository */
    private $statusRepository;

    /** @var EntityManagerInterface $entityManager */
    private $entityManager;

    /** @var AdminUserContextInterface $adminUserContext */
    private $adminUserContext;

    public function __construct(RepositoryInterface $statusRepository, EntityManagerInterface $entityManager, AdminUserContextInterface $adminUserContext)
    {
        $this->statusRepository = $statusRepository;
        $this->entityManager = $entityManager;
        $this->adminUserContext = $adminUserContext;
    }

    public function create(): OnboardingWizardStatus
    {
        $adminUser = $this->adminUserContext->getAdminUser();

        if ($adminUser === null) {
            throw new AdminUserNotFound("Couldn't resolve admin user account.");
        }

        $onboardingWizardStatus = $this->statusRepository->findOneBy(['adminUser' => $adminUser]);

        if (!$onboardingWizardStatus instanceof OnboardingWizardStatus) {
            $onboardingWizardStatus = new OnboardingWizardStatus();
            $onboardingWizardStatus->setAdminUser($adminUser);
        }

        $onboardingWizardStatus->setCompleted(true);

        $this->entityManager->persist($onboardingWizardStatus);
        $this->entityManager->flush();

        return $onboardingWizardStatus;
    }
}
