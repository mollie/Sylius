<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Controller\Action\Admin\OnboardingWizard;

use BitBag\SyliusMolliePlugin\Entity\OnboardingWizardStatus;
use Sylius\Component\Customer\Context\CustomerContextInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\Serializer;

final class StatusAction
{

    /** @var CustomerContextInterface $customerContext */
    private $customerContext;

    /** @var RepositoryInterface $statusRepository */
    private $statusRepository;

    public function __construct(CustomerContextInterface $customerContext, RepositoryInterface $statusRepository)
    {

        $this->statusRepository = $statusRepository;
        $this->customerContext = $customerContext;
    }

    public function __invoke(): Response
    {
        $onboardingWizardStatus = $this->statusRepository->findOneBy(['adminUser' => $this->customerContext->getCustomer()]);

        if ($onboardingWizardStatus instanceof OnboardingWizardStatus) {
            return new JsonResponse(['completed' => $onboardingWizardStatus->isCompleted()]);
        }

        return new JsonResponse(['completed' => false]);
    }
}
