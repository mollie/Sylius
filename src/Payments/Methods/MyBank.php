<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Payments\Methods;

use SyliusMolliePlugin\Payments\PaymentTerms\Options;
use Mollie\Api\Types\PaymentMethod;

final class MyBank extends AbstractMethod
{
    public function getMethodId(): string
    {
        return PaymentMethod::MYBANK;
    }

    public function getPaymentType(): string
    {
        return Options::ORDER_API;
    }
}
