<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Payments\Methods;

use Mollie\Api\Types\PaymentMethod;

final class PayPal extends AbstractMethod
{
    public function getMethodId(): string
    {
        return PaymentMethod::PAYPAL;
    }

    public function getPaymentType(): string
    {
        return self::PAYMENT_API;
    }
}
