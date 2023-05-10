<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Processor;

use SyliusMolliePlugin\Entity\OrderInterface;

interface PaymentSurchargeProcessorInterface
{
    public function process(OrderInterface $order): void;
}
