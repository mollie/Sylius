<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Refund\Generator;

use BitBag\SyliusMolliePlugin\DTO\PartialRefundItem;
use BitBag\SyliusMolliePlugin\DTO\PartialRefundItems;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Sylius\RefundPlugin\Entity\RefundInterface;
use Sylius\RefundPlugin\Model\RefundType;

final class PaymentRefundedGenerator implements PaymentRefundedGeneratorInterface
{
    /** @var RepositoryInterface */
    private $refundUnitsRepository;

    public function __construct(RepositoryInterface $refundUnitsRepository)
    {
        $this->refundUnitsRepository = $refundUnitsRepository;
    }

    public function generate(OrderInterface $order): PartialRefundItems
    {
        $refundedUnits = $this->refundUnitsRepository->findBy([
            'orderNumber' => $order->getNumber(),
            'type' => RefundType::orderItemUnit(),
        ]);

        $partialRefundItems = new PartialRefundItems();

        /** @var RefundInterface $refundedUnit */
        foreach ($refundedUnits as $refundedUnit) {
            $partialRefundItem = new PartialRefundItem();

            if ($partialRefund = $partialRefundItems->findById($refundedUnit->getRefundedUnitId())) {
                $partialRefund->setAmountRefunded($refundedUnit->getAmount());

                continue;
            }

            $partialRefundItem->setId($refundedUnit->getRefundedUnitId());
            $partialRefundItem->setAmountRefunded($refundedUnit->getAmount());

            $partialRefundItems->setPartialRefundItems($partialRefundItem);
        }

        return $partialRefundItems;
    }
}
