<?php

namespace SyliusMolliePlugin\Twig\Extension;

use Sylius\Component\Customer\Context\CustomerContextInterface;
use SyliusMolliePlugin\Client\MollieApiClient;
use SyliusMolliePlugin\Repository\CustomerRepository;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use Sylius\Bundle\ResourceBundle\Doctrine\ORM\EntityRepository;

class CustomerCreditCards extends AbstractExtension
{
    /** @var MollieApiClient */
    private $apiClient;

    /**
     * @var CustomerRepository
     */
    private $customerRepository;

    /**
     * @var CustomerContextInterface
     */
    private $customerContext;

    /**
     * CustomerCreditCards constructor
     *
     * @param MollieApiClient $apiClient
     * @param EntityRepository $customerRepository
     * @param CustomerContextInterface $customerContext
     */
    public function __construct(MollieApiClient $apiClient, EntityRepository $customerRepository, CustomerContextInterface $customerContext)
    {
        $this->apiClient = $apiClient;
        $this->customerRepository = $customerRepository;
        $this->customerContext = $customerContext;
    }

    /**
     * @return TwigFunction[]
     */
    public function getFunctions()
    {
        return [
            new TwigFunction('getCustomerCreditCardsCount', [$this, 'getCustomerCreditCardsCount']),
            new TwigFunction('getMollieCustomerId', [$this, 'getMollieCustomerId']),
            new TwigFunction('getCustomerFromContext', [$this, 'getCustomerFromContext'])
        ];
    }

    /**
     * @param string|null $customerId
     *
     * @return int
     * @throws \Mollie\Api\Exceptions\ApiException
     */
    public function getCustomerCreditCardsCount(?string $customerId)
    {
        if ($customerId) {
            $mandates = $this->apiClient->mandates->listForId($customerId);

            return $mandates->count();
        }

        return 0;
    }

    /**
     * @return \Sylius\Component\Customer\Model\CustomerInterface|null
     */
    public function getCustomerFromContext()
    {
        return $this->customerContext->getCustomer();
    }

    /**
     * @param string $customerEmail
     *
     * @return null
     */
    public function getMollieCustomerId(string $customerEmail)
    {
        $existingCustomer = $this->customerRepository->findOneBy(['email' => $customerEmail]);

        return $existingCustomer ? $existingCustomer->getProfileId() : null;
    }
}
