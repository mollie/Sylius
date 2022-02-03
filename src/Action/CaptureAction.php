<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action;

use BitBag\SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use BitBag\SyliusMolliePlugin\Payments\Methods;
use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use BitBag\SyliusMolliePlugin\Request\Api\CreateCreditCardSubscription;
use BitBag\SyliusMolliePlugin\Request\Api\CreateCustomer;
use BitBag\SyliusMolliePlugin\Request\Api\CreateInternalRecurring;
use BitBag\SyliusMolliePlugin\Request\Api\CreateOrder;
use BitBag\SyliusMolliePlugin\Request\Api\CreatePayment;
use BitBag\SyliusMolliePlugin\Request\Api\CreateRecurringSubscription;
use BitBag\SyliusMolliePlugin\Request\Api\CreateSepaMandate;
use Mollie\Api\Types\PaymentMethod;
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

        $details['webhookUrl'] = $notifyToken->getTargetUrl();
        $details['backurl'] = $token->getTargetUrl();

        if (true === $this->mollieApiClient->isRecurringSubscription()) {
            $cancelToken = $this->tokenFactory->createToken(
                $token->getGatewayName(),
                $token->getDetails(),
                'bitbag_sylius_mollie_plugin_cancel_subscription_mollie',
                ['orderId' => $details['metadata']['order_id']]
            );

            $details['cancel_token'] = $cancelToken->getHash();
            $this->gateway->execute(new CreateCustomer($details));
            $this->gateway->execute(new CreateInternalRecurring($details));

            switch($details['method']){
                case PaymentMethod::DIRECTDEBIT:
                    $this->gateway->execute(new CreateSepaMandate($details));
                    break;
                case PaymentMethod::CREDITCARD:
                    $this->gateway->execute(new CreateCreditCardSubscription($details));
                    break;
            }
        } else {
            $metadata = $details['metadata'];
            $metadata['refund_token'] = $refundToken->getHash();
            $details['metadata'] = $metadata;

            if (isset($details['metadata']['methodType']) && $details['metadata']['methodType'] === Options::PAYMENT_API) {
                if (in_array($details['metadata']['molliePaymentMethods'], Options::getOnlyOrderAPIMethods())) {
                    throw new \sprintf(
                        'Method %s is not allowed to use %s',
                        $details['metadata']['molliePaymentMethods'],
                        Options::PAYMENT_API
                    );
                }

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
