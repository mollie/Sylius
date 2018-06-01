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
use BitBag\SyliusMolliePlugin\Request\Api\CreateRecurringSubscription;
use BitBag\SyliusMolliePlugin\Request\Api\CreateSepaMandate;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\Exception\RuntimeException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Reply\HttpPostRedirect;
use Payum\Core\Request\Capture;
use Payum\Core\Security\GenericTokenFactoryAwareInterface;
use Payum\Core\Security\GenericTokenFactoryInterface;
use Payum\Core\Security\TokenInterface;

final class CaptureAction extends BaseApiAwareAction implements ActionInterface, ApiAwareInterface, GenericTokenFactoryAwareInterface, GatewayAwareInterface
{
    use GatewayAwareTrait;

    /**
     * @var GenericTokenFactoryInterface|null
     */
    private $tokenFactory;

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

        $details = ArrayObject::ensureArrayObject($request->getModel());

        if (true === isset($details['payment_mollie_id']) || true === isset($details['subscription_mollie_id'])) {
            return;
        }

        /** @var TokenInterface $token */
        $token = $request->getToken();

        if (null === $this->tokenFactory) {
            throw new RuntimeException();
        }

        $notifyToken = $this->tokenFactory->createNotifyToken($token->getGatewayName(), $token->getDetails());
        $refundToken = $this->tokenFactory->createRefundToken($token->getGatewayName(), $token->getDetails());

        $details['webhookUrl'] = $notifyToken->getTargetUrl();

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

            $payment = $this->mollieApiClient->payments->create([
                'amount' => $details['amount'],
                'description' => $details['description'],
                'redirectUrl' => $token->getTargetUrl(),
                'webhookUrl' => $details['webhookUrl'],
                'metadata' => $details['metadata'],
            ]);

            $details['payment_mollie_id'] = $payment->id;

            throw new HttpPostRedirect($payment->getCheckoutUrl());
        }
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
