<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Repository;

use Sylius\RefundPlugin\Repository\CreditMemoRepositoryInterface as BaseCreditMemoRepositoryInterface;

interface CreditMemoRepositoryInterface extends BaseCreditMemoRepositoryInterface
{
    public function findByOrderNumberAndDateTime(
        int $orderId,
        \DateTime $dateTime,
        int $amount
    ): array;
}
