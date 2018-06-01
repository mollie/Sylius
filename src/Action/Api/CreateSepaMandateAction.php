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
use BitBag\SyliusMolliePlugin\Request\Api\CreateSepaMandate;
use Mollie\Api\Resources\Customer;
use Mollie\Api\Resources\Mandate;
use Mollie\Api\Types\MandateMethod;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

final class CreateSepaMandateAction extends BaseApiAwareAction implements ActionInterface, GatewayAwareInterface, ApiAwareInterface
{
    use GatewayAwareTrait;

    /**
     * @var SessionInterface
     */
    private $session;

    /**
     * @param SessionInterface $session
     */
    public function __construct(SessionInterface $session)
    {
        $this->session = $session;
    }

    /**
     * {@inheritdoc}
     *
     * @param CreateSepaMandate $request
     */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        if (null === $directDebitData = $this->session->get('mollie_direct_debit_data', null)) {
            return;
        }

        $model = ArrayObject::ensureArrayObject($request->getModel());

        $this->gateway->execute(new CreateCustomer($model));

        /** @var Customer $customer */
        $customer = $this->mollieApiClient->customers->get($model['customer_mollie_id']);

        /** @var Mandate $mandate */
        $mandate = $customer->createMandate([
            'consumerAccount' => $directDebitData['iban'] ?? null,
            'consumerName' => $directDebitData['consumerName'] ?? null,
            'method' => MandateMethod::DIRECTDEBIT,
        ]);

        $model['mandate_mollie_id'] = $mandate->id;
    }

    /**
     * {@inheritdoc}
     */
    public function supports($request): bool
    {
        return
            $request instanceof CreateSepaMandate &&
            $request->getModel() instanceof \ArrayAccess
        ;
    }
}
