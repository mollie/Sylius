<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Distributor\Order;

use BitBag\SyliusMolliePlugin\Applicator\UnitsPromotionAdjustmentsApplicatorInterface;
use Sylius\Component\Core\Distributor\ProportionalIntegerDistributorInterface;
use Sylius\Component\Core\Model\OrderInterface;

final class OrderVoucherDistributor implements OrderVoucherDistributorInterface
{
    /** @var ProportionalIntegerDistributorInterface */
    private $proportionalIntegerDistributor;

    /** @var UnitsPromotionAdjustmentsApplicatorInterface */
    private $unitsPromotionAdjustmentsApplicator;

    public function __construct(
        ProportionalIntegerDistributorInterface $proportionalIntegerDistributor,
        UnitsPromotionAdjustmentsApplicatorInterface $unitsPromotionAdjustmentsApplicator
    ) {
        $this->proportionalIntegerDistributor = $proportionalIntegerDistributor;
        $this->unitsPromotionAdjustmentsApplicator = $unitsPromotionAdjustmentsApplicator;
    }

    public function distribute(OrderInterface $order, int $amount): void
    {
        $promotionAmount = $this->calculateAdjustmentAmount(
            $order->getPromotionSubjectTotal(),
            $amount
        );

        if (0 === $promotionAmount) {
            return;
        }

        $itemsTotals = [];
        foreach ($order->getItems() as $item) {
            $itemsTotals[] = $item->getTotal();
        }

        $splitPromotion = $this->proportionalIntegerDistributor->distribute($itemsTotals, $promotionAmount);
        $this->unitsPromotionAdjustmentsApplicator->apply($order, $splitPromotion);
    }

    private function calculateAdjustmentAmount(int $promotionSubjectTotal, int $targetPromotionAmount): int
    {
        return -1 * min($promotionSubjectTotal, $targetPromotionAmount);
    }
}
