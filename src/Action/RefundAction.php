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
use Payum\Core\Request\Refund;
use Sylius\Component\Resource\Exception\UpdateHandlingException;

final class RefundAction implements ActionInterface, ApiAwareInterface, GatewayAwareInterface
{
    use GatewayAwareTrait;

    /**
     * @var \Mollie_API_Client
     */
    private $mollieApiClient;

    /**
     * {@inheritdoc}
     */
    public function setApi($mollieApiClient): void
    {
        if (false === $mollieApiClient instanceof \Mollie_API_Client) {
            throw new UnsupportedApiException('Not supported.Expected an instance of ' . \Mollie_API_Client::class);
        }

        $this->mollieApiClient = $mollieApiClient;
    }

    /**
     * {@inheritDoc}
     *
     * @param Refund $request
     */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $details = ArrayObject::ensureArrayObject($request->getModel());

        try {
            $payment = $this->mollieApiClient->payments->get($details['mollie_id']);

            if (true === $payment->canBeRefunded()) {
                $this->mollieApiClient->payments->refund($payment, $details['amount']);
            } else {
                throw new UpdateHandlingException(sprintf("Payment %s can not be refunded.", $payment->id));
            }
        } catch (\Mollie_API_Exception $e) {
            throw new UpdateHandlingException(sprintf("API call failed: %s", htmlspecialchars($e->getMessage())));
        }
    }

    /**
     * {@inheritDoc}
     */
    public function supports($request): bool
    {
        return
            $request instanceof Refund &&
            $request->getModel() instanceof \ArrayAccess
        ;
    }
}
