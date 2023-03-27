<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Creator;

use Mollie\Api\Resources\Order;
use Sylius\RefundPlugin\Command\RefundUnits;

interface OrderRefundCommandCreatorInterface
{
    public function fromOrder(Order $order): RefundUnits;
}
