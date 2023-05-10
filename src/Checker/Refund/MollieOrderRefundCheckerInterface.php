<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Checker\Refund;

use Mollie\Api\Resources\Order;

interface MollieOrderRefundCheckerInterface
{
    public function check(Order $order): bool;
}
