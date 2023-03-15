<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\PaymentFee\Types;

use SyliusMolliePlugin\Entity\MollieGatewayConfig;
use SyliusMolliePlugin\Order\AdjustmentInterface;
use SyliusMolliePlugin\Payments\PaymentTerms\Options;
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
