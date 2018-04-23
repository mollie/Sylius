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
use Payum\Core\Reply\HttpPostRedirect;
use Payum\Core\Request\Capture;
use Payum\Core\Security\GenericTokenFactoryAwareInterface;
use Payum\Core\Security\GenericTokenFactoryInterface;
use Payum\Core\Security\TokenInterface;

final class CaptureAction implements ActionInterface, ApiAwareInterface, GenericTokenFactoryAwareInterface, GatewayAwareInterface
{
    use GatewayAwareTrait;

    /**
     * @var \Mollie_API_Client
     */
    private $mollieApiClient;

    /**
     * @var GenericTokenFactoryInterface|null
     */
    private $tokenFactory;

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
     * @param GenericTokenFactoryInterface $genericTokenFactory
     */
    public function setGenericTokenFactory(GenericTokenFactoryInterface $genericTokenFactory = null): void
    {
        $this->tokenFactory = $genericTokenFactory;
    }

    /**
     * {@inheritdoc}
     *
     * @param Capture $request
     */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        /** @var ArrayObject $details */
        $details = $request->getModel();

        if (true === isset($details['mollie_id'])) {
            return;
        }

        /** @var TokenInterface $token */
        $token = $request->getToken();

        if (null !== $this->tokenFactory) {
            $notifyToken = $this->tokenFactory->createNotifyToken($token->getGatewayName(), $token->getDetails());
            $refundToken = $this->tokenFactory->createRefundToken($token->getGatewayName(), $token->getDetails());

            $details['webhookUrl'] = $notifyToken->getTargetUrl();

            $metadata = $details['metadata'];

            $metadata['refund_token'] = $refundToken->getHash();

            $details['metadata'] = $metadata;
        }

        $details['redirectUrl'] = $token->getTargetUrl();

        $payment = $this->mollieApiClient->payments->create($details->toUnsafeArray());

        $details['mollie_id'] = $payment->id;

        throw new HttpPostRedirect($payment->getPaymentUrl());
    }

    /**
     * {@inheritdoc}
     */
    public function supports($request): bool
    {
        return
            $request instanceof Capture &&
            $request->getModel() instanceof \ArrayAccess
        ;
    }
}
