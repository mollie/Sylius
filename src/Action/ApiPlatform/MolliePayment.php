<?php

declare(strict_types=1);

namespace SyliusMolliePlugin\Action\ApiPlatform;

use Sylius\Bundle\PayumBundle\Model\GatewayConfigInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;

class MolliePayment
{
    private const MOLLIE_PAYMENT_METHOD_NAME = 'mollie';

    /**
     * @param PaymentMethodInterface $paymentMethod
     *
     * @return bool
     */
    public function supports(PaymentMethodInterface $paymentMethod): bool
    {
        /** @var GatewayConfigInterface $gatewayConfig */
        $gatewayConfig = $paymentMethod->getGatewayConfig();

        return $gatewayConfig->getFactoryName() === self::MOLLIE_PAYMENT_METHOD_NAME;
    }

    /**
     * @param PaymentInterface $payment
     *
     * @return array
     */
    public function provideConfiguration(PaymentInterface $payment): array
    {
        $details = $payment->getDetails();
        $methodName = isset($details['molliePaymentMethods'])  ? $details['molliePaymentMethods'] : null;

        if (!$methodName) {
            if (isset($details['metadata']['molliePaymentMethods'])) {
                $methodName = $details['metadata']['molliePaymentMethods'];
            }
        }

        return [
            "method" => $methodName,
            "issuer" => isset($details['selected_issuer'])  ? $details['selected_issuer'] : null,
            "cardToken" => isset($details['metadata']['cartToken'])  ? $details['metadata']['cartToken'] : null,
            "amount" => isset($details['amount'])  ? $details['amount'] : null,
            "customerId" => isset($details['customerId'])  ? $details['customerId'] : null,
            "description" => isset($details['description'])  ? $details['description'] : null,
            "redirectUrl" => isset($details['backurl'])  ? $details['backurl'] : null,
            "webhookUrl" => isset($details['webhookUrl'])  ? $details['webhookUrl'] : null,
            "metadata" => isset($details['metadata'])  ? $details['metadata'] : null,
            "locale" => isset($details['locale'])  ? $details['locale'] : null
        ];
    }
}
