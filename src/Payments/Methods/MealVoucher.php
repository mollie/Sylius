<?php


namespace BitBag\SyliusMolliePlugin\Payments\Methods;


final class MealVoucher extends AbstractMethod
{
    public const MEAL_VOUCHERS = "mealvouchers";

    public function getMethodId(): string
    {
        return self::MEAL_VOUCHERS;
    }
}
