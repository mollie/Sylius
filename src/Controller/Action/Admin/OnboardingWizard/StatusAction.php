<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Controller\Action\Admin\OnboardingWizard;

use BitBag\SyliusMolliePlugin\Context\Admin\AdminUserContextInterface;
use BitBag\SyliusMolliePlugin\Entity\OnboardingWizardStatus;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

final class StatusAction
{
    /** @var RepositoryInterface $statusRepository */
    private $statusRepository;

    /** @var AdminUserContextInterface $adminUserContext */
    private $adminUserContext;

    public function __construct(RepositoryInterface $statusRepository, AdminUserContextInterface $adminUserContext)
    {
        $this->statusRepository = $statusRepository;
        $this->adminUserContext = $adminUserContext;
    }

    public function __invoke(): Response
    {
        $adminUser = $this->adminUserContext->getAdminUser();

        if (null === $adminUser) {
            return new JsonResponse(['message' => "Couldn't resolve admin user account."], Response::HTTP_BAD_REQUEST);
        }

        $onboardingWizardStatus = $this->statusRepository->findOneBy(['adminUser' => $adminUser]);

        if ($onboardingWizardStatus instanceof OnboardingWizardStatus) {
            return new JsonResponse(['completed' => $onboardingWizardStatus->isCompleted()]);
        }

        return new JsonResponse(['completed' => false]);
    }
}
