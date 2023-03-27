<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Payments\Methods;

use Mollie\Api\Types\PaymentMethod;

final class Przelewy24 extends AbstractMethod
{
    public function getMethodId(): string
    {
        return PaymentMethod::PRZELEWY24;
    }

    public function getPaymentType(): string
    {
        return self::PAYMENT_API;
    }
}
