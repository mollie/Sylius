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

use BitBag\SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use BitBag\SyliusMolliePlugin\Request\Api\CreateOrder;
use BitBag\SyliusMolliePlugin\Request\Api\CreatePayment;
use BitBag\SyliusMolliePlugin\Request\Api\CreateRecurringSubscription;
use BitBag\SyliusMolliePlugin\Request\Api\CreateSepaMandate;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\Exception\RuntimeException;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Request\Capture;
use Payum\Core\Security\GenericTokenFactoryInterface;
use Payum\Core\Security\TokenInterface;

final class CaptureAction extends BaseApiAwareAction implements CaptureActionInterface
{
    use GatewayAwareTrait;

    /** @var GenericTokenFactoryInterface|null */
    private $tokenFactory;

    public function setGenericTokenFactory(GenericTokenFactoryInterface $genericTokenFactory = null): void
    {
        $this->tokenFactory = $genericTokenFactory;
    }

    /** @param Capture $request */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $details = ArrayObject::ensureArrayObject($request->getModel());

        if (true === isset($details['payment_mollie_id']) ||
            true === isset($details['subscription_mollie_id']) ||
            true === isset($details['order_mollie_id'])) {
            return;
        }

        /** @var TokenInterface $token */
        $token = $request->getToken();

        if (null === $this->tokenFactory) {
            throw new RuntimeException();
        }

        $notifyToken = $this->tokenFactory->createNotifyToken($token->getGatewayName(), $token->getDetails());
        $refundToken = $this->tokenFactory->createRefundToken($token->getGatewayName(), $token->getDetails());

        $details['webhookUrl'] = str_replace('127.0.0.1:8000', 'de0d94b8.ngrok.io', $notifyToken->getTargetUrl());
        $details['backurl'] = $token->getTargetUrl();

        if (true === $this->mollieApiClient->isRecurringSubscription()) {
            $cancelToken = $this->tokenFactory->createToken(
                $token->getGatewayName(),
                $token->getDetails(),
                'bitbag_sylius_mollie_plugin_cancel_subscription_mollie',
                ['orderId' => $details['metadata']['order_id']]
            );

            $details['cancel_token'] = $cancelToken->getHash();

            $this->gateway->execute(new CreateSepaMandate($details));
            $this->gateway->execute(new CreateRecurringSubscription($details));
        }

        if (false === $this->mollieApiClient->isRecurringSubscription()) {
            $metadata = $details['metadata'];
            $metadata['refund_token'] = $refundToken->getHash();
            $details['metadata'] = $metadata;

            if (isset($details['metadata']['methodType']) && $details['metadata']['methodType'] === Options::PAYMENT_API) {
                $this->gateway->execute(new CreatePayment($details));
            }

            if (isset($details['metadata']['methodType']) && $details['metadata']['methodType'] === Options::ORDER_API) {
                $this->gateway->execute(new CreateOrder($details));
            }
        }
    }

    public function supports($request): bool
    {
        return
            $request instanceof Capture &&
            $request->getModel() instanceof \ArrayAccess
            ;
    }
}
