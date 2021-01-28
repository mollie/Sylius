<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action\Api;

use BitBag\SyliusMolliePlugin\Entity\MollieCustomer;
use BitBag\SyliusMolliePlugin\Entity\MollieCustomerInterface;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CreateCustomer;
use Mollie\Api\Exceptions\ApiException;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class CreateCustomerAction extends BaseApiAwareAction implements ActionInterface, ApiAwareInterface
{
    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    /** @var RepositoryInterface */
    private $mollieCustomerRepository;

    public function __construct(MollieLoggerActionInterface $loggerAction, RepositoryInterface $mollieCustomerRepository)
    {
        $this->loggerAction = $loggerAction;
        $this->mollieCustomerRepository = $mollieCustomerRepository;
    }

    /** @param CreateCustomer $request */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);
        $model = ArrayObject::ensureArrayObject($request->getModel());

        $data = [
            'name' => $model['fullName'],
            'email' => $model['email'],
        ];

        /** @var MollieCustomerInterface $customer */
        $customer = $this->mollieCustomerRepository->findOneBy(['email' => $model['email']]);

        if (null === $customer) {
            $customer = new MollieCustomer();
            $customer->setEmail($model['email']);
        }

        try {
            if (empty($customer->getProfileId())) {
                $customerMollie = $this->mollieApiClient->customers->create($data);
                $customer->setProfileId($customerMollie->id);

                $this->mollieCustomerRepository->add($customer);
            }
        } catch (\Exception $e) {
            $this->loggerAction->addNegativeLog(sprintf('Error with create customer:  %s', $e->getMessage()));

            throw new ApiException('Error with create customer with' . $e->getMessage());
        }

        $this->loggerAction->addLog(sprintf('Create customer action with id:  %s', $customer->getProfileId()));

        $model['customer_mollie_id'] = $customer->getProfileId();
    }

    public function supports($request): bool
    {
        return
            $request instanceof CreateCustomer &&
            $request->getModel() instanceof \ArrayAccess
            ;
    }
}
