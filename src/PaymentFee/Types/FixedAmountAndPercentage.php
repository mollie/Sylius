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
use Doctrine\Common\Collections\Collection;
use Sylius\Component\Order\Factory\AdjustmentFactoryInterface;
use Sylius\Component\Order\Model\OrderInterface;

final class FixedAmountAndPercentage implements SurchargeTypeInterface
{
    /** @var AdjustmentFactoryInterface */
    private $adjustmentFactory;

    /** @var Percentage */
    private $percentage;

    /** @var FixedAmount */
    private $fixedAmount;

    public function __construct(
        AdjustmentFactoryInterface $adjustmentFactory,
        Percentage $percentage,
        FixedAmount $fixedAmount
    ) {
        $this->adjustmentFactory = $adjustmentFactory;
        $this->percentage = $percentage;
        $this->fixedAmount = $fixedAmount;
    }

    public function calculate(OrderInterface $order, MollieGatewayConfig $paymentMethod): OrderInterface
    {
        $limit = $paymentMethod->getPaymentSurchargeFee()->getSurchargeLimit() * 100;

        $percentage = $this->percentage->calculate($order, $paymentMethod);
        $fixed = $this->fixedAmount->calculate($order, $paymentMethod);

        $percentageAmount = $this->getSumOfCalculatedValue($percentage->getAdjustments(AdjustmentInterface::PERCENTAGE_ADJUSTMENT));
        $fixAmount = $this->getSumOfCalculatedValue($fixed->getAdjustments(AdjustmentInterface::FIXED_AMOUNT_ADJUSTMENT));

        $amount = $percentageAmount + $fixAmount;

        if (isset($limit) && $amount > $limit) {
            $amount = $limit;
        }

        $order->removeAdjustments(AdjustmentInterface::FIXED_AMOUNT_ADJUSTMENT);
        $order->removeAdjustments(AdjustmentInterface::PERCENTAGE_ADJUSTMENT);

        if ($order->getAdjustments(AdjustmentInterface::PERCENTAGE_AND_AMOUNT_ADJUSTMENT)) {
            $order->removeAdjustments(AdjustmentInterface::PERCENTAGE_AND_AMOUNT_ADJUSTMENT);
        }

        /** @var AdjustmentInterface $adjustment */
        $adjustment = $this->adjustmentFactory->createNew();
        $adjustment->setType(AdjustmentInterface::PERCENTAGE_AND_AMOUNT_ADJUSTMENT);
        $adjustment->setAmount((int) ceil($amount));
        $adjustment->setNeutral(false);
        $order->addAdjustment($adjustment);

        return $order;
    }

    public function canCalculate(string $type): bool
    {
        return array_search($type, Options::getAvailablePaymentSurchargeFeeType()) === Options::FIXED_FEE_AND_PERCENTAGE;
    }

    private function getSumOfCalculatedValue(Collection $adjustments): float
    {
        $value = 0;

        /** @var AdjustmentInterface $adjustment */
        foreach ($adjustments as $adjustment) {
            $value += $adjustment->getAmount();
        }

        return $value;
    }
}
