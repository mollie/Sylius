<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Payments\Methods;

use Mollie\Api\Types\PaymentMethod;

final class CreditCard extends AbstractMethod
{
    public function getMethodId(): string
    {
        return PaymentMethod::CREDITCARD;
    }

    public function getPaymentType(): string
    {
        return self::PAYMENT_API;
    }
}
