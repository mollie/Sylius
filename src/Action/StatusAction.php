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
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\Exception\UnsupportedApiException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Request\GetStatusInterface;
use Sylius\Component\Core\Model\PaymentInterface;

final class StatusAction implements ActionInterface, GatewayAwareInterface, ApiAwareInterface
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
     * {@inheritdoc}
     *
     * @param GetStatusInterface $request
     */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        /** @var PaymentInterface $payment */
        $payment = $request->getModel();

        $details = $payment->getDetails();

        if (false === isset($details['id'])) {
            $request->markNew();

            return;
        }

        $paymentData = $this->mollieApiClient->payments->get($details['id']);

        if (true === $paymentData->isPaid() || true === $paymentData->isPaidOut()) {
            $request->markCaptured();

            return;
        }

        if (true === $paymentData->isCancelled()) {
            $request->markCanceled();

            return;
        }

        if (true === $paymentData->isFailed()) {
            $request->markFailed();

            return;
        }

        if (true === $paymentData->isExpired()) {
            $request->markExpired();

            return;
        }

        if (true === $paymentData->isChargedBack() || true === $paymentData->isRefunded()) {
            $request->markRefunded();

            return;
        }

        $request->markUnknown();
    }

    /**
     * {@inheritdoc}
     */
    public function supports($request): bool
    {
        return
            $request instanceof GetStatusInterface &&
            $request->getModel() instanceof PaymentInterface
        ;
    }
}
