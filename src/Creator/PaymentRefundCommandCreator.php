<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Creator;

use BitBag\SyliusMolliePlugin\Exceptions\OfflineRefundPaymentMethodNotFound;
use BitBag\SyliusMolliePlugin\Refund\Units\PaymentUnitsItemRefundInterface;
use BitBag\SyliusMolliePlugin\Refund\Units\ShipmentUnitRefundInterface;
use Mollie\Api\Resources\Payment;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Order\Factory\AdjustmentFactoryInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Sylius\RefundPlugin\Command\RefundUnits;
use Sylius\RefundPlugin\Provider\RefundPaymentMethodsProviderInterface;
use Webmozart\Assert\Assert;

final class PaymentRefundCommandCreator implements PaymentRefundCommandCreatorInterface
{
    /** @var RepositoryInterface */
    private $orderRepository;

    /** @var RepositoryInterface */
    private $refundUnitsRepository;

    /** @var PaymentUnitsItemRefundInterface */
    private $itemRefund;

    /** @var ShipmentUnitRefundInterface */
    private $shipmentRefund;

    /** @var AdjustmentFactoryInterface */
    private $adjustmentFactory;

    /** @var RefundPaymentMethodsProviderInterface */
    private $refundPaymentMethodProvider;

    public function __construct(
        RepositoryInterface $orderRepository,
        RepositoryInterface $refundUnitsRepository,
        PaymentUnitsItemRefundInterface $itemRefund,
        ShipmentUnitRefundInterface $shipmentRefund,
        AdjustmentFactoryInterface $adjustmentFactory,
        RefundPaymentMethodsProviderInterface $refundPaymentMethodProvider
    ) {
        $this->orderRepository = $orderRepository;
        $this->refundUnitsRepository = $refundUnitsRepository;
        $this->itemRefund = $itemRefund;
        $this->shipmentRefund = $shipmentRefund;
        $this->adjustmentFactory = $adjustmentFactory;
        $this->refundPaymentMethodProvider = $refundPaymentMethodProvider;
    }

    public function fromPayment(Payment $payment): RefundUnits
    {
        $orderId = $payment->metadata->order_id;

        /** @var ?OrderInterface $order */
        $order = $this->orderRepository->findOneBy(['id' => $orderId]);
        Assert::notNull($order, sprintf('Cannot find order id with id %s', $orderId));

        $allRefunded = $this->refundUnitsRepository->findBy(['order' => $order->getId()]);

        $refunded = $this->getSumOfAmountExistingRefunds($allRefunded);

        Assert::notNull($payment->amountRefunded);
        $mollieRefund = (float) $payment->amountRefunded->value * 100;
        $toRefund = (int) $mollieRefund - $refunded;

        Assert::notNull($order->getChannel());
        $refundMethods = $this->refundPaymentMethodProvider->findForChannel($order->getChannel());

        if (0 === count($refundMethods)) {
            throw new OfflineRefundPaymentMethodNotFound(
                sprintf('Not found offline payment method on this channel with code :%s', $order->getChannel()->getCode())
            );
        }

        $refundMethod = current($refundMethods);

        $orderItemUnitRefund = $this->itemRefund->refund($order, $toRefund);
        $shipmentRefund = $this->shipmentRefund->refund($order, $orderItemUnitRefund, $toRefund);

        Assert::notNull($order->getNumber());

        return new RefundUnits($order->getNumber(), $orderItemUnitRefund, $shipmentRefund, $refundMethod->getId(), '');
    }

    private function getSumOfAmountExistingRefunds(array $refundedUnits): int
    {
        $sum = 0;

        if (0 === count($refundedUnits)) {
            return $sum;
        }

        foreach ($refundedUnits as $refundedUnit) {
            $sum += $refundedUnit->getAmount();
        }

        return $sum;
    }
}
