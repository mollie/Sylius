<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Order;

use BitBag\SyliusMolliePlugin\Order\AdjustmentCloner;
use BitBag\SyliusMolliePlugin\Order\AdjustmentClonerInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Core\Model\AdjustmentInterface as BaseAdjustmentInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class AdjustmentClonerSpec extends ObjectBehavior
{
    function let(
        FactoryInterface $adjustmentFactory,
        BaseAdjustmentInterface $adjustment,
        BaseAdjustmentInterface $clonedAdjustment
    ): void
    {
        $this->beConstructedWith($adjustmentFactory);

        $adjustmentFactory->createNew()->willReturn($clonedAdjustment);

        $adjustment->getAmount()->willReturn(5);
        $adjustment->getType()->willReturn('test_type');
        $adjustment->getDetails()->willReturn([
            'detail1',
            'detail2',
        ]);
        $adjustment->getLabel()->willReturn('test_label');
        $adjustment->isNeutral()->willReturn(true);
        $clonedAdjustment->setAmount(5);
        $clonedAdjustment->setType('test_type');
        $clonedAdjustment->setDetails([
            'detail1',
            'detail2',
        ]);
        $clonedAdjustment->setLabel('test_label');
        $clonedAdjustment->setNeutral(true);
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(AdjustmentCloner::class);
    }

    function it_should_implements_adjustment_cloner(): void
    {
        $this->shouldImplement(AdjustmentClonerInterface::class);
    }

    function it_clones_when_it_is_locked(
        BaseAdjustmentInterface $adjustment,
        BaseAdjustmentInterface $clonedAdjustment
    ): void {
        $adjustment->isLocked()->willReturn(true);

        $clonedAdjustment->lock();

        $this->clone($adjustment)->shouldReturn($clonedAdjustment);
    }

    function it_clones_when_it_is_unlocked(
        BaseAdjustmentInterface $adjustment,
        BaseAdjustmentInterface $clonedAdjustment
    ): void {
        $adjustment->isLocked()->willReturn(false);

        $clonedAdjustment->unlock();

        $this->clone($adjustment)->shouldReturn($clonedAdjustment);
    }

}
