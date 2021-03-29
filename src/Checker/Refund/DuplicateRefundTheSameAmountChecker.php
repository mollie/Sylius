<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Checker\Refund;

use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Repository\CreditMemoRepositoryInterface;
use BitBag\SyliusMolliePlugin\Repository\OrderRepositoryInterface;
use Sylius\RefundPlugin\Command\RefundUnits;

final class DuplicateRefundTheSameAmountChecker implements DuplicateRefundTheSameAmountCheckerInterface
{
    /** @var CreditMemoRepositoryInterface */
    private $creditMemoRepository;

    /** @var OrderRepositoryInterface */
    private $orderRepository;

    public function __construct(
        CreditMemoRepositoryInterface $creditMemoRepository,
        OrderRepositoryInterface $orderRepository
    ) {
        $this->creditMemoRepository = $creditMemoRepository;
        $this->orderRepository = $orderRepository;
    }

    public function check(RefundUnits $command): bool
    {
        $dateTimeInterval = new \DateInterval(self::ONE_HOUR_INTERVAL);
        $now = new \DateTime('now');
        $now->sub($dateTimeInterval);

        /** @var OrderInterface $order */
        $order = $this->orderRepository->findOneBy(['number' => $command->orderNumber()]);

        $creditMemos = $this->creditMemoRepository->findByOrderNumberAndDateTime(
            $order->getId(),
            $now,
            $this->getTotalAmount($command)
        );

        return !empty($creditMemos);
    }

    private function getTotalAmount(RefundUnits $command): int
    {
        $total = 0;

        foreach ($command->units() as $unit) {
            $total += $unit->total();
        }

        foreach ($command->shipments() as $shipment) {
            $total += $shipment->total();
        }

        return $total;
    }
}
