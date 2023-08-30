<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Helper;

use SyliusMolliePlugin\Provider\Divisor\DivisorProviderInterface;

final class IntToStringConverter implements IntToStringConverterInterface
{
    /** @var DivisorProviderInterface */
    private $divisorProvider;

    public function __construct(DivisorProviderInterface $divisorProvider)
    {
        $this->divisorProvider = $divisorProvider;
    }

    public function convertIntToString(int $value, ?int $divisor = null): string
    {
        if(null === $divisor)
        {
            $divisor = $this->divisorProvider->getDivisor();
        }

        return number_format(abs($value / $divisor), 2, '.', '');
    }
}