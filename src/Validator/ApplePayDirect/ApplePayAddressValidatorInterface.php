<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Validator\ApplePayDirect;

interface ApplePayAddressValidatorInterface
{
    public function validate(array $data): void;
}
