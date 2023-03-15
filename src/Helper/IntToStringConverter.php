<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Helper;

final class IntToStringConverter implements IntToStringConverterInterface
{
    public function convertIntToString(int $value, int $divisor): string
    {
        return number_format(abs($value / $divisor), 2, '.', '');
    }
}
