<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Controller\Action\Admin\OnboardingWizard;

use BitBag\SyliusMolliePlugin\Creator\OnboardingWizardStatusCreatorInterface;
use BitBag\SyliusMolliePlugin\Exceptions\AdminUserNotFound;
use PHP_CodeSniffer\Reports\Json;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

final class CompletedAction
{
    /** @var OnboardingWizardStatusCreatorInterface $onboardingWizardStatusCreator */
    private $onboardingWizardStatusCreator;

    public function __construct(OnboardingWizardStatusCreatorInterface $onboardingWizardStatusCreator)
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
