<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Payments\Methods;

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
