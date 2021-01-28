<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Processor;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfig;
use BitBag\SyliusMolliePlugin\PaymentFee\Calculate;
use Doctrine\Common\Collections\Collection;
use Payum\Core\Model\PaymentInterface;
use Sylius\Component\Order\Model\OrderInterface;
use Sylius\Component\Payment\Model\PaymentMethodInterface;

final class PaymentSurchargeProcessor implements PaymentSurchargeProcessorInterface
{
    /** @var Calculate */
    private $calculate;

    public function __construct(Calculate $calculate)
    {
        $this->calculate = $calculate;
    }

    public function process(OrderInterface $order): void
    {
        /** @var PaymentInterface $payment */
        $payment = $order->getPayments()->first();

        /** @var PaymentMethodInterface $paymentMethod */
        $paymentMethod = $payment->getMethod();

        if ($paymentMethod->getGatewayConfig()->getFactoryName() !== 'mollie') {
            return;
        }

        $data = $payment->getDetails();

        if (null === $data) {
            return;
        }

        $molliePaymentMethod = $data['molliePaymentMethods'];

        $paymentSurcharge = $this->getMolliePaymentSurcharge($paymentMethod, $molliePaymentMethod);

        if (null === $paymentSurcharge) {
            return;
        }

        $this->calculate->calculateFromCart($order, $paymentSurcharge);
    }

    private function getMolliePaymentSurcharge(PaymentMethodInterface $paymentMethod, string $molliePaymentMethod = null): ?MollieGatewayConfig
    {
        /** @var Collection $configMethods */
        $configMethods = $paymentMethod->getGatewayConfig()->getMollieGatewayConfig();

        if ($molliePaymentMethod === null) {
            return $configMethods->last();
        }

        foreach ($configMethods as $configMethod) {
            /** @var MollieGatewayConfig $configMethod */
            if ($configMethod->getMethodId() === $molliePaymentMethod) {
                return $configMethod;
            }
        }

        return null;
    }
}
