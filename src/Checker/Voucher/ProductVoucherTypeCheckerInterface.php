<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Checker\Voucher;

use Sylius\Component\Core\Model\OrderInterface;

interface ProductVoucherTypeCheckerInterface
{
    public function checkTheProductTypeOnCart(OrderInterface $order, array $methods): array;
}
