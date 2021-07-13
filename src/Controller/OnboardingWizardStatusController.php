<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Controller;

use BitBag\SyliusMolliePlugin\Entity\OnboardingWizardStatus;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\Serializer;

final class OnboardingWizardStatusController extends AbstractController
{
    /** @var Security $security */
    private $security;

    /** @var Serializer $serializer */
    private $serializer;

    public function __construct(Security $security, Serializer $serializer)
    {
        $this->security = $security;
        $this->serializer = $serializer;
    }

    public function getStatus(): JsonResponse
    {
        $user = $this->security->getUser();
        $repository = $this->getDoctrine()->getRepository(OnboardingWizardStatus::class);
        $onboardingWizardStatus = $repository->findOneBy(['adminUser' => $user]);

        if ($onboardingWizardStatus === null) {
            $entityManager = $this->getDoctrine()->getManager();

            $onboardingWizardStatus = new OnboardingWizardStatus();
            $onboardingWizardStatus->setAdminUser($user);
            $onboardingWizardStatus->setCompleted(false);

            $entityManager->persist($onboardingWizardStatus);
            $entityManager->flush();
        }

        return new JsonResponse($this->serializer->serialize($onboardingWizardStatus, 'json'));
    }

    public function setStatus(): JsonResponse
    {
        $user = $this->security->getUser();
        $repository = $this->getDoctrine()->getRepository(OnboardingWizardStatus::class);
        $onboardingWizardStatus = $repository->findOneBy(['adminUser' => $user]);
        $entityManager = $this->getDoctrine()->getManager();

        if ($onboardingWizardStatus === null) {
            $onboardingWizardStatus = new OnboardingWizardStatus();
            $onboardingWizardStatus->setAdminUser($user);
        }

        $onboardingWizardStatus->setCompleted(true);

        $entityManager->persist($onboardingWizardStatus);
        $entityManager->flush();

        return new JsonResponse();
    }
}
