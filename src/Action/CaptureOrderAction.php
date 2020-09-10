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
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Reply\HttpRedirect;
use Payum\Core\Request\Capture;
use Payum\Core\Request\Convert;
use Payum\Core\Security\GenericTokenFactoryInterface;
use Payum\Core\Security\TokenInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

final class CaptureOrderAction extends BaseApiAwareAction implements CaptureOrderActionInterface
{
    use GatewayAwareTrait;

    /** @var GenericTokenFactoryInterface|null */
    private $tokenFactory;

    /** @var SessionInterface */
    private $session;

    public function __construct(SessionInterface $session)
    {
        $this->session = $session;
    }

    /** @param GenericTokenFactoryInterface $genericTokenFactory */
    public function setGenericTokenFactory(GenericTokenFactoryInterface $genericTokenFactory = null): void
    {
        $this->tokenFactory = $genericTokenFactory;
    }

    /**
     * @param Convert $request
     */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);
        $token = $request->getToken();

        $details = ArrayObject::ensureArrayObject($request->getModel());
        $refundToken = $this->tokenFactory->createRefundToken($token->getGatewayName(), $token->getDetails());
        $notifyToken = $this->tokenFactory->createNotifyToken($token->getGatewayName(), $token->getDetails());

        if (true === isset($details['order_mollie_id'])) {
            return;
        }

        /** @var TokenInterface $token */
        $token = $request->getToken();
        $metadata['refund_token'] = $refundToken->getHash();
        $metadata['order_id'] = $details['metadata']['order_id'];
        $paymentOptions = $this->session->get('mollie_payment_options');
        $metadata = array_merge($metadata, $paymentOptions);

        $details['metadata'] = $metadata;
        $order = $this->mollieApiClient->orders->create([
            'method' => $metadata['molliePaymentMethods'] ? $metadata['molliePaymentMethods'] : '',
            'payment.cardToken' => $metadata['cartToken'],
            'amount' => $details['amount'],
            'billingAddress' => $details['billingAddress'],
            'shippingAddress' => $details['shippingAddress'],
            'metadata' => $details['metadata'],
            'locale' => $details['locale'],
            'orderNumber' => $details['orderNumber'],
            'redirectUrl' => $token->getTargetUrl(),
            'webhookUrl' => $notifyToken->getTargetUrl(),
            'lines' => $details['lines'],
        ]);

        $details['order_mollie_id'] = $order->id;

        throw new HttpRedirect($order->getCheckoutUrl());
    }

    public function supports($request): bool
    {
        return
            $request instanceof Capture &&
            $request->getModel() instanceof \ArrayAccess
            ;
    }
}
