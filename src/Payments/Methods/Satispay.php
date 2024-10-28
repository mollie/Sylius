<?php

namespace SyliusMolliePlugin\Payments\Methods;

use Mollie\Api\Types\PaymentMethod;

final class Satispay extends AbstractMethod
{
    public function getMethodId(): string
    {
        return PaymentMethod::SATISPAY;
    }
    public function getPaymentType(): string
    {
        return self::PAYMENT_API;
    }
}
