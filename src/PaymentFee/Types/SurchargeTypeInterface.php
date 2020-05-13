<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\PaymentFee\Types;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfig;
use Sylius\Component\Order\Model\OrderInterface;

interface SurchargeTypeInterface
{
    public function calculate(OrderInterface $order, MollieGatewayConfig $paymentMethod): OrderInterface;

    public function canCalculate(string $type): bool;
}
