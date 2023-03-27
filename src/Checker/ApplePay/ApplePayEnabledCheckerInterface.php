<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Checker\ApplePay;

interface ApplePayEnabledCheckerInterface
{
    public function isEnabled(): bool;
}
