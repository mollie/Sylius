<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\PaymentFee\Types;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfig;
use BitBag\SyliusMolliePlugin\Order\AdjustmentInterface;
use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use Sylius\Component\Order\Factory\AdjustmentFactoryInterface;
use Sylius\Component\Order\Model\OrderInterface;

final class Percentage implements SurchargeTypeInterface
{
    /** @var AdjustmentFactoryInterface */
    private $adjustmentFactory;

    public function __construct(AdjustmentFactoryInterface $adjustmentFactory)
    {
        $this->adjustmentFactory = $adjustmentFactory;
    }

    public function calculate(OrderInterface $order, MollieGatewayConfig $paymentMethod): OrderInterface
    {
        $limit = $paymentMethod->getPaymentSurchargeFee()->getSurchargeLimit() * 100;
        $percentage = $paymentMethod->getPaymentSurchargeFee()->getPercentage();
        $amount = ($order->getItemsTotal() / 100) * $percentage;

        if ($order->getAdjustments(AdjustmentInterface::PERCENTAGE_ADJUSTMENT)) {
            $order->removeAdjustments(AdjustmentInterface::PERCENTAGE_ADJUSTMENT);
        }

        if ($limit > 0 && $limit <= $amount) {
            $amount = $limit;
        }

        /** @var AdjustmentInterface $adjustment */
        $adjustment = $this->adjustmentFactory->createNew();
        $adjustment->setType(AdjustmentInterface::PERCENTAGE_ADJUSTMENT);
        $adjustment->setAmount((int) ceil($amount));
        $adjustment->setNeutral(false);
        $order->addAdjustment($adjustment);

        return $order;
    }

    public function canCalculate(string $type): bool
    {
        return array_search($type, Options::getAvailablePaymentSurchargeFeeType()) === Options::PERCENTAGE;
    }
}
