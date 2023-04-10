<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Payments\Methods;

use Mollie\Api\Types\PaymentMethod;

final class In3 extends AbstractMethod
{
    public function getMethodId(): string
    {
        return PaymentMethod::IN3;
    }

    public function getPaymentType(): string
    {
        return self::ORDER_API;
    }
}
