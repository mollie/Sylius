<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action;

use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\Exception\UnsupportedApiException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Request\GetHttpRequest;
use Payum\Core\Request\Notify;

final class NotifyAction implements ActionInterface, ApiAwareInterface, GatewayAwareInterface
{
    use GatewayAwareTrait;

    /**
     * @var \Mollie_API_Client
     */
    private $mollieApiClient;

    /**
     * @var GetHttpRequest
     */
    private $getHttpRequest;

    /**
     * @param GetHttpRequest $getHttpRequest
     */
    public function __construct(GetHttpRequest $getHttpRequest)
    {
        $this->getHttpRequest = $getHttpRequest;
    }

    /**
     * {@inheritDoc}
     */
    public function setApi($mollieApiClient): void
    {
        if (false === $mollieApiClient instanceof \Mollie_API_Client) {
            throw new UnsupportedApiException('Not supported.Expected an instance of '. \Mollie_API_Client::class);
        }

        $this->mollieApiClient = $mollieApiClient;
    }

    /**
     * {@inheritDoc}
     *
     * @param Notify $request
     */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $details = ArrayObject::ensureArrayObject($request->getModel());

        $this->gateway->execute($this->getHttpRequest);

        $payment = $this->mollieApiClient->payments->get($this->getHttpRequest->request['id']);

        if ($details['metadata']['order_id'] === filter_var($payment->metadata->order_id, FILTER_VALIDATE_INT)) {
            $details['id'] = $this->getHttpRequest->request['id'];
        }
    }

    /**
     * {@inheritDoc}
     */
    public function supports($request): bool
    {
        return
            $request instanceof Notify &&
            $request->getModel() instanceof \ArrayAccess
        ;
    }
}
