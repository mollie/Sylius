<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Updater\Order;

use Mollie\Api\Resources\Payment;

interface OrderVoucherAdjustmentUpdaterInterface
{
    public function update(Payment $molliePayment, int $orderId): void;
}
