<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Distributor\Order;

use Sylius\Component\Core\Model\OrderInterface;

interface OrderVoucherDistributorInterface
{
    public function distribute(OrderInterface $order, int $amount): void;
}
