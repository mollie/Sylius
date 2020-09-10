<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\PaymentSurcharge;

use BitBag\SyliusMolliePlugin\Exceptions\UnknownPaymentSurchargeTye;
use BitBag\SyliusMolliePlugin\PaymentSurcharge\Types\FixedAmount;
use BitBag\SyliusMolliePlugin\PaymentSurcharge\Types\FixedAmountAndPercentage;
use BitBag\SyliusMolliePlugin\PaymentSurcharge\Types\Percentage;
use Sylius\Component\Core\Model\OrderInterface;

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

    public function calculateFromCart()
    {

    }

    private function calculatePaymentSurcharge(OrderInterface $order)
    {
        $paymentType = 'null';

        if ($this->fixedAmount->canCalculate($paymentType)) {
            return $this->fixedAmount->calculate($order);
        }
        if ($this->percentage->canCalculate($paymentType)) {
            return $this->percentage->calculate($order);
        }
        if ($this->fixedAmountAndPercentage->canCalculate($paymentType)) {
            return $this->fixedAmountAndPercentage->calculate($order);
        }

        throw  new UnknownPaymentSurchargeTye(sprintf('Unknown paymeny type %s', $paymentType));
    }
}
