<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\PaymentFee\Types;

use SyliusMolliePlugin\Entity\MollieGatewayConfig;
use SyliusMolliePlugin\Order\AdjustmentInterface;
use SyliusMolliePlugin\Payments\PaymentTerms\Options;
use Sylius\Component\Order\Factory\AdjustmentFactoryInterface;
use Sylius\Component\Order\Model\OrderInterface;
use Webmozart\Assert\Assert;

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
        $paymentSurchargeFee = $paymentMethod->getPaymentSurchargeFee();

        Assert::notNull($paymentSurchargeFee);
        Assert::notNull($paymentSurchargeFee->getSurchargeLimit());
        $limit = $paymentSurchargeFee->getSurchargeLimit() * 100;
        $percentage = $paymentSurchargeFee->getPercentage();

        Assert::notNull($percentage);
        $amount = ($order->getItemsTotal() / 100) * $percentage;

        if (false === $order->getAdjustments(AdjustmentInterface::PERCENTAGE_ADJUSTMENT)->isEmpty()) {
            $order->removeAdjustments(AdjustmentInterface::PERCENTAGE_ADJUSTMENT);
        }

        if (0 < $limit && $limit <= $amount) {
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
        return Options::PERCENTAGE === array_search($type, Options::getAvailablePaymentSurchargeFeeType(), true);
    }
}
