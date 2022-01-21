<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Payments\Methods;

use Mollie\Api\Types\PaymentMethod;

final class DirectDebit extends AbstractMethod
{
    public function getMethodId(): string
    {
        return PaymentMethod::DIRECTDEBIT;
    }

    public function getPaymentType(): string
    {
        return self::PAYMENT_API;
    }
}
