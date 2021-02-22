<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Payments\Methods;

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
