<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Payments\Methods;

use Mollie\Api\Types\PaymentMethod;

final class Klarnasliceit extends AbstractMethod
{
    public function getMethodId(): string
    {
        return PaymentMethod::KLARNA_SLICE_IT;
    }

    public function getPaymentType(): string
    {
        return self::ORDER_API;
    }
}
