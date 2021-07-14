<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Controller\Action\Admin\OnboardingWizard;

use BitBag\SyliusMolliePlugin\Creator\OnboardingWizard\StatusCreatorInterface;
use BitBag\SyliusMolliePlugin\Exceptions\AdminUserNotFound;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

final class CompletedAction
{
    /** @var StatusCreatorInterface $onboardingWizardStatusCreator */
    private $onboardingWizardStatusCreator;

    public function __construct(StatusCreatorInterface $onboardingWizardStatusCreator)
    {
        $this->onboardingWizardStatusCreator = $onboardingWizardStatusCreator;
    }

    public function __invoke(): Response
    {
        try {
            $onboardingWizardStatus = $this->onboardingWizardStatusCreator->create();
        } catch (AdminUserNotFound $e) {
            return new JsonResponse(['message' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }

        return new JsonResponse(["completed" => $onboardingWizardStatus->isCompleted()]);
    }
}
