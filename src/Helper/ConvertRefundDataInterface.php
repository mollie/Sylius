<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Helper;

interface ConvertRefundDataInterface
{
    public function convert(array $data, string $currency): array;
}
