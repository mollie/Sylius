<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Payments\Methods;

final class MealVoucher extends AbstractMethod
{
    public const MEAL_VOUCHERS = 'voucher';

    public function getMethodId(): string
    {
        return self::MEAL_VOUCHERS;
    }

    public function getPaymentType(): string
    {
        return self::ORDER_API;
    }
}
