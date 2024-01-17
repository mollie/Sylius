<?php

namespace SyliusMolliePlugin\Payments\Methods;

class Blik extends AbstractMethod
{
    public function getMethodId(): string
    {
        return 'blik';
    }

    public function getPaymentType(): string
    {
        return self::PAYMENT_API;
    }
}
