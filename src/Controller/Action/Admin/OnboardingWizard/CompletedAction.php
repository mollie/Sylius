<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Controller\Action\Admin\OnboardingWizard;

use BitBag\SyliusMolliePlugin\Entity\OnboardingWizardStatus;
use Doctrine\ORM\EntityManagerInterface;
use Sylius\Component\Customer\Context\CustomerContextInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

final class CompletedAction
{
    /** @var CustomerContextInterface $security */
    private $customerContext;

    /** @var RepositoryInterface $statusRepository */
    private $statusRepository;

    /** @var EntityManagerInterface $entityManager */
    private $entityManager;

    public function __construct(CustomerContextInterface $customerContext, RepositoryInterface $statusRepository, EntityManagerInterface $entityManager)
    {
        $this->customerContext = $customerContext;
        $this->statusRepository = $statusRepository;
        $this->entityManager = $entityManager;
    }

    public function __invoke(): Response
    {
        $customer = $this->customerContext->getCustomer();
        $onboardingWizardStatus = $this->statusRepository->findOneBy(['adminUser' => $customer]);

        if (!$onboardingWizardStatus instanceof OnboardingWizardStatus) {
            $onboardingWizardStatus = new OnboardingWizardStatus();
            $onboardingWizardStatus->setCustomer($customer);
        }

        $onboardingWizardStatus->setCompleted(true);

        $this->entityManager->persist($onboardingWizardStatus);
        $this->entityManager->flush();

        return new JsonResponse(["completed" => true]);
    }
}
