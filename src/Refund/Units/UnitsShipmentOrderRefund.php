<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Refund\Units;

use BitBag\SyliusMolliePlugin\Helper\ConvertOrderInterface;
use Mollie\Api\Resources\Order;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Order\Model\Adjustment;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Sylius\RefundPlugin\Model\RefundType;
use Sylius\RefundPlugin\Model\ShipmentRefund;

final class UnitsShipmentOrderRefund implements UnitsShipmentOrderRefundInterface
{
    /** @var RepositoryInterface */
    private $refundUnitsRepository;

    public function __construct(RepositoryInterface $refundUnitsRepository)
    {
        $this->refundUnitsRepository = $refundUnitsRepository;
    }

    public function refund(Order $order, OrderInterface $syliusOrder): array
    {
        if ($this->hasShipmentRefund($syliusOrder)) {
            return [];
        }

        foreach ($order->lines as $line) {
            if ($line->type === ConvertOrderInterface::SHIPPING_TYPE && $line->quantityRefunded > 0) {
                /** @var Adjustment $refundedShipment */
                $refundedShipment = $syliusOrder->getAdjustments('shipping')->first();

                return [
                    new ShipmentRefund(
                        $refundedShipment->getId(),
                        $refundedShipment->getAmount()
                    ),
                ];
            }
        }

        return [];
    }

    private function hasShipmentRefund(OrderInterface $order): bool
    {
        $unitRefunded = $this->refundUnitsRepository->findOneBy([
            'order' => $order->getId(),
            'type' => RefundType::shipment(),
        ]);

        return $unitRefunded ? true : false;
    }
}
