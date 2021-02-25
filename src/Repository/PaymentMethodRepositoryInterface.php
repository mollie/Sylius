<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Repository;

use Sylius\Component\Core\Repository\PaymentMethodRepositoryInterface as BasePaymentMethodRepositoryInterface;

interface PaymentMethodRepositoryInterface extends BasePaymentMethodRepositoryInterface
{
    public function findAllByFactoryNameAndCode(string $code): array;
}
