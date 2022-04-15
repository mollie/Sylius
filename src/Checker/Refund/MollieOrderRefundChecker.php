<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Checker\Refund;

use Mollie\Api\Resources\Order;
use Mollie\Api\Resources\OrderLine;

final class MollieOrderRefundChecker implements MollieOrderRefundCheckerInterface
{
    public function check(Order $order): bool
    {
        /** @var OrderLine $line */
        foreach ($order->lines as $line) {
            if (0 < $line->quantityRefunded) {
                return true;
            }
        }

        return false;
    }
}
