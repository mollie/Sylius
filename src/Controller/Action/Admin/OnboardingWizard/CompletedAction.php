<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Controller\Action\Admin\OnboardingWizard;

use SyliusMolliePlugin\Creator\OnboardingWizard\StatusCreatorInterface;
use SyliusMolliePlugin\Exceptions\AdminUserNotFound;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

final class CompletedAction
{
    /** @var StatusCreatorInterface */
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

        return new JsonResponse(['completed' => $onboardingWizardStatus->isCompleted()]);
    }
}
