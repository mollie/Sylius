<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Applicator;

use BitBag\SyliusMolliePlugin\Order\AdjustmentInterface;
use Sylius\Component\Core\Distributor\IntegerDistributorInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Order\Factory\AdjustmentFactoryInterface;
use Sylius\Component\Order\Model\OrderItemUnitInterface;

final class UnitsPromotionAdjustmentsApplicator implements UnitsPromotionAdjustmentsApplicatorInterface
{
    /** @var AdjustmentFactoryInterface */
    private $adjustmentFactory;

    /** @var IntegerDistributorInterface */
    private $distributor;

    public function __construct(
        AdjustmentFactoryInterface $adjustmentFactory,
        IntegerDistributorInterface $distributor
    ) {
        $this->adjustmentFactory = $adjustmentFactory;
        $this->distributor = $distributor;
    }

    public function apply(OrderInterface $order, array $promotionAmount): void
    {
        $i = 0;
        foreach ($order->getItems() as $item) {
            $adjustmentAmount = $promotionAmount[$i++];

            if (0 === $adjustmentAmount) {
                continue;
            }

            $this->applyAdjustmentsOnItemUnits($item, $adjustmentAmount);
        }
    }

    private function applyAdjustmentsOnItemUnits(
        OrderItemInterface $item,
        int $itemPromotionAmount
    ): void {
        $splitPromotionAmount = $this->distributor->distribute($itemPromotionAmount, $item->getQuantity());

        $i = 0;
        foreach ($item->getUnits() as $unit) {
            $promotionAmount = $splitPromotionAmount[$i++];
            if (0 === $promotionAmount) {
                continue;
            }

            $this->addAdjustment($unit, $promotionAmount);
        }
    }

    private function addAdjustment(OrderItemUnitInterface $unit, int $amount): void
    {
        if (!$unit->getAdjustments(AdjustmentInterface::VOUCHER_ADJUSTMENT)->isEmpty()) {
            return;
        }

        /** @var AdjustmentInterface $adjustment */
        $adjustment = $this->adjustmentFactory->createNew();
        $adjustment->setType(AdjustmentInterface::VOUCHER_ADJUSTMENT);
        $adjustment->setAmount($amount);
        $adjustment->setNeutral(false);

        $unit->addAdjustment($adjustment);
    }
}
