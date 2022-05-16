<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Order;

use Sylius\Component\Core\Model\AdjustmentInterface as BaseAdjustmentInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class AdjustmentCloner implements AdjustmentClonerInterface
{
    private FactoryInterface $adjustmentFactory;

    public function __construct(FactoryInterface $adjustmentFactory)
    {
        $this->adjustmentFactory = $adjustmentFactory;
    }

    public function clone(BaseAdjustmentInterface $adjustment): BaseAdjustmentInterface
    {
        /** @var BaseAdjustmentInterface $clonedAdjustment */
        $clonedAdjustment = $this->adjustmentFactory->createNew();
        $clonedAdjustment->setAmount($adjustment->getAmount());
        $clonedAdjustment->setType($adjustment->getType());
        $clonedAdjustment->setDetails($adjustment->getDetails());
        $clonedAdjustment->setLabel($adjustment->getLabel());
        $clonedAdjustment->setNeutral($adjustment->isNeutral());

        if ($adjustment->isLocked()) {
            $clonedAdjustment->lock();
        } else {
            $clonedAdjustment->unlock();
        }

        return $clonedAdjustment;
    }
}
