<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Helper;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use Mollie\Api\Types\PaymentMethod;
use Sylius\Bundle\PayumBundle\Provider\PaymentDescriptionProviderInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;

final class PaymentDescription implements PaymentDescriptionInterface
{
    /** @var PaymentDescriptionProviderInterface */
    private $paymentDescriptionProvider;

    public function __construct(PaymentDescriptionProviderInterface $paymentDescriptionProvider)
    {
        $this->paymentDescriptionProvider = $paymentDescriptionProvider;
    }

    public function getPaymentDescription(
        PaymentInterface $payment,
        MollieGatewayConfigInterface $methodConfig,
        OrderInterface $order
    ): string {
        $paymentMethodType = array_search($methodConfig->getPaymentType(), Options::getAvailablePaymentType());
        $description = $methodConfig->getPaymentDescription();

        if ($methodConfig->getMethodId() === PaymentMethod::PAYPAL) {
            return $this->createPayPalDescription($order->getNumber());
        }

        if ($paymentMethodType === Options::PAYMENT_API && !empty($description)) {
            $replacements = [
                '{ordernumber}' => $order->getNumber(),
                '{storename}' => $order->getChannel()->getName(),
            ];

            return str_replace(
                array_keys($replacements),
                array_values($replacements),
                $description
            );
        }

        return $this->paymentDescriptionProvider->getPaymentDescription($payment);
    }

    private function createPayPalDescription(string $orderNumber) {
        return 'Order ' . $orderNumber;
    }
}
