<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Refund;

use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Sylius\RefundPlugin\Model\OrderItemUnitRefund;
use Sylius\RefundPlugin\Model\RefundType;

final class UnitsItemRefund
{
    /** @var RepositoryInterface */
    private $refundUnitsRepository;

    public function __construct(RepositoryInterface $refundUnitsRepository)
    {
        $this->refundUnitsRepository = $refundUnitsRepository;
    }

    public function refund(OrderInterface $order, int $totalToRefund): array
    {
        $refundEnum = new RefundType(RefundType::ORDER_ITEM_UNIT);
        $refundedUnits = $this->refundUnitsRepository->findBy([
            'orderNumber' => $order->getNumber(),
            'type' => $refundEnum,
        ]);

        $totalRefundUnits = $this->getSumOfAmountExistingRefunds($refundedUnits);

        if ($order->getItemsTotal() === $totalRefundUnits) {
            return [];
        }

        if ($totalToRefund > ($order->getItemsTotal() - $totalRefundUnits)) {
            $totalToRefund = $order->getItemsTotal() - $totalRefundUnits;
        }

        $units = $order->getItemUnits();

        $valueToDistributed = $totalToRefund /  count($units);

        $unitsToRefund = [];
        foreach ($units as $unit) {
            $unitsToRefund[] = new OrderItemUnitRefund(
                $unit->getId(),
                (int)$valueToDistributed
            );
        }

        return $unitsToRefund;
    }

    private function getSumOfAmountExistingRefunds(array $refundedUnits): int
    {
        $sum = 0;

        if (empty($refundedUnits)) {
            return $sum;
        }

        foreach ($refundedUnits as $refundedUnit) {
            $sum += $refundedUnit->getAmount();
        }

        return $sum;
    }
}
