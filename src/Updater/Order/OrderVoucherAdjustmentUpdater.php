<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Updater\Order;

use BitBag\SyliusMolliePlugin\Distributor\Order\OrderVoucherDistributorInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Order\Factory\AdjustmentFactoryInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Webmozart\Assert\Assert;

final class OrderVoucherAdjustmentUpdater implements OrderVoucherAdjustmentUpdaterInterface
{
    /** @var RepositoryInterface */
    private $orderRepository;

    /** @var AdjustmentFactoryInterface */
    private $adjustmentFactory;

    /** @var OrderVoucherDistributorInterface */
    private $orderVoucherDistributor;

    public function __construct(
        RepositoryInterface $orderRepository,
        AdjustmentFactoryInterface $adjustmentFactory,
        OrderVoucherDistributorInterface $orderVoucherDistributor
    ) {
        $this->orderRepository = $orderRepository;
        $this->adjustmentFactory = $adjustmentFactory;
        $this->orderVoucherDistributor = $orderVoucherDistributor;
    }

    public function update(\stdClass $molliePayment, int $orderId): void
    {
        $amount = 0;

        /** @var OrderInterface $order */
        $order = $this->orderRepository->find($orderId);
        Assert::isInstanceOf($order, OrderInterface::class);

        if (isset($molliePayment->details->vouchers)) {
            foreach ($molliePayment->details->vouchers as $voucher) {
                $amount += (float) $voucher->amount->value;
            }
        }

        $amount = (int) ($amount * 100);

        $this->orderVoucherDistributor->distribute($order, $amount);
    }
}
