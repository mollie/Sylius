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

use BitBag\SyliusMolliePlugin\Request\Api\CreateCustomer;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;

final class CreateCustomerAction extends BaseApiAwareAction implements ActionInterface, ApiAwareInterface
{
    /**
     * {@inheritdoc}
     *
     * @param CreateCustomer $request
     */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $model = ArrayObject::ensureArrayObject($request->getModel());

        $data = [
            'name' => $model['fullName'],
            'email' => $model['email'],
        ];

        $customerMollie = $this->mollieApiClient->customers->create($data);

        $model['customer_mollie_id'] = $customerMollie->id;
    }

    /**
     * {@inheritdoc}
     */
    public function supports($request): bool
    {
        return
            $request instanceof CreateCustomer &&
            $request->getModel() instanceof \ArrayAccess
        ;
    }
}
