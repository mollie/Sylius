<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\MealVouchers;

final class Options
{
    public const MEAL = 'meal';

    public const ECO = 'eco';

    public const GIFT = 'gift';

    public static function getAvailableMealVouchersCategory(): array
    {
        return [
            self::MEAL => self::MEAL,
            self::ECO => self::ECO,
            self::GIFT => self::GIFT,
        ];
    }
}
