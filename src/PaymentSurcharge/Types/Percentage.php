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

use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use Sylius\Component\Core\Model\OrderInterface;

final class Percentage implements SurchargeTypeInterface
{
    public function calculate(OrderInterface $order)
    {
        return 2;
    }

    public function canCalculate(string $type): bool
    {
        return array_search($type, Options::getAvailablePaymentType()) === Options::PERCENTAGE;
    }
}
