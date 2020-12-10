<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\PaymentFee;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfig;
use BitBag\SyliusMolliePlugin\Exceptions\UnknownPaymentSurchargeTye;
use BitBag\SyliusMolliePlugin\PaymentFee\Types\FixedAmount;
use BitBag\SyliusMolliePlugin\PaymentFee\Types\FixedAmountAndPercentage;
use BitBag\SyliusMolliePlugin\PaymentFee\Types\Percentage;
use Sylius\Component\Order\Model\OrderInterface;

final class Calculate
{
    /** @var FixedAmount */
    private $fixedAmount;

    /** @var Percentage */
    private $percentage;

    /** @var FixedAmountAndPercentage */
    private $fixedAmountAndPercentage;

    public function __construct(
        FixedAmount $fixedAmount,
        Percentage $percentage,
        FixedAmountAndPercentage $fixedAmountAndPercentage
    ) {
        $this->fixedAmount = $fixedAmount;
        $this->percentage = $percentage;
        $this->fixedAmountAndPercentage = $fixedAmountAndPercentage;
    }

    public function calculateFromCart(OrderInterface $order, MollieGatewayConfig $paymentMethod): ?OrderInterface
    {
        if (null === $paymentMethod->getPaymentSurchargeFee()->getType()) {
            return null;
        }

        return $this->calculatePaymentSurcharge($order, $paymentMethod);
    }

    private function calculatePaymentSurcharge(OrderInterface $order, MollieGatewayConfig $paymentMethod): OrderInterface
    {
        if (empty($paymentMethod->getPaymentSurchargeFee()->getType()) || $paymentMethod->getPaymentSurchargeFee()->getType() === ' ') {
            return $order;
        }

        $paymentType = $paymentMethod->getPaymentSurchargeFee()->getType();

        if ($this->fixedAmount->canCalculate($paymentType)) {
            return $this->fixedAmount->calculate($order, $paymentMethod);
        }
        if ($this->percentage->canCalculate($paymentType)) {
            return $this->percentage->calculate($order, $paymentMethod);
        }
        if ($this->fixedAmountAndPercentage->canCalculate($paymentType)) {
            return $this->fixedAmountAndPercentage->calculate($order, $paymentMethod);
        }
        if ('no_fee' === $paymentType) {
            return $order;
        }

        throw new UnknownPaymentSurchargeTye(sprintf('Unknown payment type %s', $paymentType));
    }
}
