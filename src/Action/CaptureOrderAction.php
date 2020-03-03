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
use Payum\Core\Security\GenericTokenFactoryInterface;
use Payum\Core\Security\TokenInterface;


class OrderCaptureAction extends BaseApiAwareAction implements OrderCaptureActionInterface
{
    use GatewayAwareTrait;

    /** @var GenericTokenFactoryInterface|null */
    private $tokenFactory;

    /** @param GenericTokenFactoryInterface $genericTokenFactory */
    public function setGenericTokenFactory(GenericTokenFactoryInterface $genericTokenFactory = null): void
    {
        $this->tokenFactory = $genericTokenFactory;
    }

    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $details = ArrayObject::ensureArrayObject($request->getModel());

        if (true === isset($details['order_mollie_id'])) {
            return;
        }

        /** @var TokenInterface $token */
        $token = $request->getToken();
        $notifyToken = $this->tokenFactory->createNotifyToken($token->getGatewayName(), $token->getDetails());

        $order = $this->mollieApiClient->orders->create([
            'amount' => $details['amount'],
            'billingAddress' => $details['billingAddress'],
            'shippingAddress' =>  $details['shippingAddress'],
            'metadata' => $details['metadata'],
            'locale' => $details ['locale'],
            'orderNumber' => $details['orderNumber'],
            'redirectUrl' => $token->getTargetUrl(),
            'webhookUrl' => str_replace('127.0.0.1:8000', 'c3eea3dc.ngrok.io', $notifyToken->getTargetUrl()),
            'method' => $details['method'],
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
