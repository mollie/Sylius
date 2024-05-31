<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Action;

use SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use SyliusMolliePlugin\Payments\PaymentTerms\Options;
use SyliusMolliePlugin\Request\Api\CreateCustomer;
use SyliusMolliePlugin\Request\Api\CreateInternalRecurring;
use SyliusMolliePlugin\Request\Api\CreateOnDemandSubscription;
use SyliusMolliePlugin\Request\Api\CreateOnDemandSubscriptionPayment;
use SyliusMolliePlugin\Request\Api\CreateOrder;
use SyliusMolliePlugin\Request\Api\CreatePayment;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\Exception\RuntimeException;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Request\Capture;
use Payum\Core\Security\GenericTokenFactoryInterface;
use Payum\Core\Security\TokenInterface;
use Psr\Log\InvalidArgumentException;

final class CaptureAction extends BaseApiAwareAction implements CaptureActionInterface
{
    use GatewayAwareTrait;

    /** @var GenericTokenFactoryInterface|null */
    private $tokenFactory;

    public function setGenericTokenFactory(GenericTokenFactoryInterface $genericTokenFactory = null): void
    {
        $this->tokenFactory = $genericTokenFactory;
    }

    /** @param Capture|mixed $request */
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

        $metadata = $details['metadata'];
        $metadata['refund_token'] = $refundToken->getHash();
        $details['metadata'] = $metadata;

        if (true === $this->mollieApiClient->isRecurringSubscription()) {
            if ('first' === $details['sequenceType']) {
                $cancelToken = $this->tokenFactory->createToken(
                    $token->getGatewayName(),
                    $token->getDetails(),
                    'sylius_mollie_plugin_cancel_subscription_mollie',
                    ['orderId' => $details['metadata']['order_id']]
                );

                $details['cancel_token'] = $cancelToken->getHash();
                $this->gateway->execute(new CreateCustomer($details));
                $this->gateway->execute(new CreateInternalRecurring($details));
                $this->gateway->execute(new CreateOnDemandSubscription($details));
            } elseif ('recurring' === $details['sequenceType']) {
                $this->gateway->execute(new CreateOnDemandSubscriptionPayment($details));
            }
        } else {
            if (isset($details['metadata']['methodType']) && Options::PAYMENT_API === $details['metadata']['methodType']) {
                if (in_array($details['metadata']['molliePaymentMethods'], Options::getOnlyOrderAPIMethods(), true)) {
                    throw new InvalidArgumentException(sprintf(
                        'Method %s is not allowed to use %s',
                        $details['metadata']['molliePaymentMethods'],
                        Options::PAYMENT_API
                    ));
                }

                $this->gateway->execute(new CreatePayment($details));
            }

            if (isset($details['metadata']['methodType']) && Options::ORDER_API === $details['metadata']['methodType']) {
                if (in_array($details['metadata']['molliePaymentMethods'], Options::getOnlyPaymentAPIMethods(), true)) {
                    throw new InvalidArgumentException(sprintf(
                        'Method %s is not allowed to use %s',
                        $details['metadata']['molliePaymentMethods'],
                        Options::ORDER_API
                    ));
                }

                $this->gateway->execute(new CreatePayment($details));
            }

            if (isset($details['metadata']['methodType']) && Options::ORDER_API === $details['metadata']['methodType']) {
                $this->gateway->execute(new CreateOrder($details));
            }
        }
    }

    public function supports($request): bool
    {
        return
            $request instanceof Capture &&
            $request->getModel() instanceof \ArrayAccess;
    }
}
