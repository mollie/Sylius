<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Creator\OnboardingWizard;

use BitBag\SyliusMolliePlugin\Context\Admin\AdminUserContextInterface;
use BitBag\SyliusMolliePlugin\Entity\OnboardingWizardStatusInterface;
use BitBag\SyliusMolliePlugin\Exceptions\AdminUserNotFound;
use BitBag\SyliusMolliePlugin\Resolver\OnboardingWizard\StatusResolverInterface;
use Doctrine\ORM\EntityManagerInterface;

final class StatusCreator implements StatusCreatorInterface
{
    /** @var EntityManagerInterface $entityManager */
    private $entityManager;

    /** @var AdminUserContextInterface $adminUserContext */
    private $adminUserContext;

    /** @var StatusResolverInterface $statusResolver */
    private $statusResolver;

    public function __construct(
        EntityManagerInterface $entityManager,
        AdminUserContextInterface $adminUserContext,
        StatusResolverInterface $statusResolver
    ) {
        $this->entityManager = $entityManager;
        $this->adminUserContext = $adminUserContext;
        $this->statusResolver = $statusResolver;
    }

    public function create(): OnboardingWizardStatusInterface
    {
        $adminUser = $this->adminUserContext->getAdminUser();

        if ($adminUser === null) {
            throw new AdminUserNotFound("Couldn't resolve admin user account.");
        }

        $onboardingWizardStatus = $this->statusResolver->resolve($adminUser);

        $this->entityManager->persist($onboardingWizardStatus);
        $this->entityManager->flush();

        return $onboardingWizardStatus;
    }
}
