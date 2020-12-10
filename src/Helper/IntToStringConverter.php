<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Helper;

final class IntToStringConverter
{
    public function convertIntToString(int $value, int $divisor): string
    {
        return number_format(abs($value / $divisor), 2, '.', '');
    }
}
