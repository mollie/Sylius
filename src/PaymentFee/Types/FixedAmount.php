<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\PaymentFee\Types;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfig;
use BitBag\SyliusMolliePlugin\Order\AdjustmentInterface;
use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use Sylius\Component\Order\Factory\AdjustmentFactoryInterface;
use Sylius\Component\Order\Model\OrderInterface;
use Webmozart\Assert\Assert;

final class FixedAmount implements SurchargeTypeInterface
{
    /** @var AdjustmentFactoryInterface */
    private $adjustmentFactory;

    public function __construct(AdjustmentFactoryInterface $adjustmentFactory)
    {
        $this->adjustmentFactory = $adjustmentFactory;
    }

    public function calculate(OrderInterface $order, MollieGatewayConfig $paymentMethod): OrderInterface
    {
        Assert::notNull($paymentMethod->getPaymentSurchargeFee());
        $fixedAmount = $paymentMethod->getPaymentSurchargeFee()->getFixedAmount();

        if (false === $order->getAdjustments(AdjustmentInterface::FIXED_AMOUNT_ADJUSTMENT)->isEmpty()) {
            $order->removeAdjustments(AdjustmentInterface::FIXED_AMOUNT_ADJUSTMENT);
        }

        /** @var AdjustmentInterface $adjustment */
        $adjustment = $this->adjustmentFactory->createNew();
        $adjustment->setType(AdjustmentInterface::FIXED_AMOUNT_ADJUSTMENT);
        Assert::notNull($fixedAmount);
        $adjustment->setAmount((int) ($fixedAmount * 100));
        $adjustment->setNeutral(false);

        $order->addAdjustment($adjustment);

        return $order;
    }

    public function canCalculate(string $type): bool
    {
        return Options::FIXED_FEE === array_search($type, Options::getAvailablePaymentSurchargeFeeType(), true);
    }
}
