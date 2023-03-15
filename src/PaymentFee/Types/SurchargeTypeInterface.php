<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\PaymentFee\Types;

use SyliusMolliePlugin\Entity\MollieGatewayConfig;
use Sylius\Component\Order\Model\OrderInterface;

interface SurchargeTypeInterface
{
    public function calculate(OrderInterface $order, MollieGatewayConfig $paymentMethod): OrderInterface;

    public function canCalculate(string $type): bool;
}
