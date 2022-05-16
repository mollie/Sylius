<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Refund\Units;

use BitBag\SyliusMolliePlugin\Calculator\Refund\PaymentRefundCalculatorInterface;
use BitBag\SyliusMolliePlugin\DTO\PartialRefundItem;
use BitBag\SyliusMolliePlugin\Refund\Generator\PaymentNewUnitRefundGeneratorInterface;
use BitBag\SyliusMolliePlugin\Refund\Generator\PaymentRefundedGeneratorInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\RefundPlugin\Model\OrderItemUnitRefund;

final class PaymentUnitsItemRefund implements PaymentUnitsItemRefundInterface
{
    /** @var PaymentRefundedGeneratorInterface */
    private $paymentRefundedGenerator;

    /** @var PaymentNewUnitRefundGeneratorInterface */
    private $paymentNewUnitRefundGenerator;

    /** @var PaymentRefundCalculatorInterface */
    private $paymentRefundCalculator;

    public function __construct(
        PaymentRefundedGeneratorInterface $paymentRefundedGenerator,
        PaymentNewUnitRefundGeneratorInterface $paymentNewUnitRefundGenerator,
        PaymentRefundCalculatorInterface $paymentRefundCalculator
    ) {
        $this->paymentRefundedGenerator = $paymentRefundedGenerator;
        $this->paymentNewUnitRefundGenerator = $paymentNewUnitRefundGenerator;
        $this->paymentRefundCalculator = $paymentRefundCalculator;
    }

    public function refund(OrderInterface $order, int $totalToRefund): array
    {
        $partialRefundItems = $this->paymentRefundedGenerator->generate($order);
        $partialRefundItems = $this->paymentNewUnitRefundGenerator->generate($order, $partialRefundItems);
        $partialRefundItems = $this->paymentRefundCalculator->calculate($partialRefundItems, $totalToRefund);

        $unitsToRefund = [];
        /** @var PartialRefundItem $partialRefundItem */
        foreach ($partialRefundItems->getPartialRefundItems() as $partialRefundItem) {
            if (0 < $partialRefundItem->getAmountToRefund()) {
                $unitsToRefund[] = new OrderItemUnitRefund(
                    $partialRefundItem->getId(),
                    $partialRefundItem->getAmountToRefund()
                );
            }
        }

        return $unitsToRefund ?? [];
    }
}
