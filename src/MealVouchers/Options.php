<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\MealVouchers;

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
