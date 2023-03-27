<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Purifier;

interface MolliePaymentMethodPurifierInterface
{
    public function removeMethod(string $methodId): void;

    public function removeAllNoLongerSupportedMethods(): void;
}
