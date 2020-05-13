<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action\Api;

use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CreateCustomer;
use Mollie\Api\Exceptions\ApiException;
use Mollie\Api\Resources\Customer;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;

final class CreateCustomerAction extends BaseApiAwareAction implements ActionInterface, ApiAwareInterface
{
    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    public function __construct(MollieLoggerActionInterface $loggerAction)
    {
        $this->loggerAction = $loggerAction;
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

        try {
            /** @var Customer $customerMollie */
            $customerMollie = $this->mollieApiClient->customers->create($data);
        } catch (\Exception $e) {
            $this->loggerAction->addNegativeLog(sprintf('Error with create customer:  %s', $e->getMessage()));

            throw new ApiException('Error with create customer with' . $e->getMessage());
        }

        $this->loggerAction->addLog(sprintf('Create customer action with id:  %s', $customerMollie->id));

        $model['customer_mollie_id'] = $customerMollie->id;
    }

    public function supports($request): bool
    {
        return
            $request instanceof CreateCustomer &&
            $request->getModel() instanceof \ArrayAccess
            ;
    }
}
