<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Order;

use Sylius\RefundPlugin\Event\UnitsRefunded;

interface OrderPaymentRefundInterface
{
    public function refund(UnitsRefunded $orderId): void;
}
