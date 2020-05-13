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
use BitBag\SyliusMolliePlugin\Request\Api\CreateSepaMandate;
use Mollie\Api\Exceptions\ApiException;
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

    /** @var SessionInterface */
    private $session;

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    public function __construct(SessionInterface $session, MollieLoggerActionInterface $loggerAction)
    {
        $this->session = $session;
        $this->loggerAction = $loggerAction;
    }

    /** @param CreateSepaMandate $request */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        if (null === $directDebitData = $this->session->get('mollie_direct_debit_data', null)) {
            return;
        }

        $model = ArrayObject::ensureArrayObject($request->getModel());

        $this->gateway->execute(new CreateCustomer($model));

        try {
            /** @var Customer $customer */
            $customer = $this->mollieApiClient->customers->get($model['customer_mollie_id']);
        } catch (\Exception $e) {
            $this->loggerAction->addNegativeLog(sprintf('Error with get customer from mollie with: %s', $e->getMessage()));

            throw new ApiException(sprintf('Error with get customer from mollie with: %s', $e->getMessage()));
        }

        /** @var Mandate $mandate */
        $mandate = $customer->createMandate([
            'consumerAccount' => $directDebitData['iban'] ?? null,
            'consumerName' => $directDebitData['consumerName'] ?? null,
            'method' => MandateMethod::DIRECTDEBIT,
        ]);

        $this->loggerAction->addLog(sprintf('Create mandate with id %s', $mandate->id));

        $model['mandate_mollie_id'] = $mandate->id;
    }

    public function supports($request): bool
    {
        return
            $request instanceof CreateSepaMandate &&
            $request->getModel() instanceof \ArrayAccess;
    }
}
