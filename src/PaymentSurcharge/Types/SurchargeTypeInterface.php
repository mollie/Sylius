<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\PaymentSurcharge\Types;

use Sylius\Component\Core\Model\OrderInterface;

interface SurchargeTypeInterface
{
    public function calculate(OrderInterface $order);

    public function canCalculate(string $type): bool;
}
