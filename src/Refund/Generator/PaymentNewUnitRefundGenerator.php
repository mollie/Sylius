<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Refund\Generator;

use BitBag\SyliusMolliePlugin\DTO\PartialRefundItem;
use BitBag\SyliusMolliePlugin\DTO\PartialRefundItems;
use Sylius\Component\Core\Model\OrderInterface;

final class PaymentNewUnitRefundGenerator implements PaymentNewUnitRefundGeneratorInterface
{
    public function generate(OrderInterface $order, PartialRefundItems $partialRefundItems): PartialRefundItems
    {
        $units = $order->getItemUnits();

        foreach ($units as $unit) {
            $partialRefundItem = $partialRefundItems->findById($unit->getId());

            if (null !== $partialRefundItem) {
                $partialRefundItem->setAmountTotal($unit->getTotal());

                continue;
            }

            $partialRefundItem = new PartialRefundItem();

            $partialRefundItem->setId($unit->getId());
            $partialRefundItem->setAmountRefunded(0);
            $partialRefundItem->setAmountTotal($unit->getTotal());

            $partialRefundItems->setPartialRefundItems($partialRefundItem);
        }

        return $partialRefundItems;
    }
}
