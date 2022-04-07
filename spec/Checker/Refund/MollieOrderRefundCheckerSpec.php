<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Checker\Refund;

use BitBag\SyliusMolliePlugin\Checker\Refund\MollieOrderRefundChecker;
use BitBag\SyliusMolliePlugin\Checker\Refund\MollieOrderRefundCheckerInterface;
use Mollie\Api\Resources\Order;
use PhpSpec\ObjectBehavior;

final class MollieOrderRefundCheckerSpec extends ObjectBehavior
{
    public function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieOrderRefundChecker::class);
        $this->shouldImplement(MollieOrderRefundCheckerInterface::class);
    }

    public function it_returns_true_with_order_lines_quantity_refunded_equal_1_and_1(
        Order $order
    ): void {
        $line = (object) [
            'quantityRefunded' => 1,
        ];
        $line2 = (object) [
            'quantityRefunded' => 1,
        ];
        $lines = (object) [
            $line,
            $line2,
        ];

        $order->lines = $lines;

        $this->check($order)
            ->shouldReturn(true);
    }

    public function it_returns_false_with_order_lines_quantity_refunded_equal_0(
        Order $order
    ): void {
        $line = (object) [
            'quantityRefunded' => 0,
        ];
        $line2 = (object) [
            'quantityRefunded' => 0,
        ];
        $lines = (object) [
            $line,
            $line2,
        ];

        $order->lines = $lines;

        $this->check($order)
            ->shouldReturn(false);
    }

    public function it_returns_true_with_order_lines_quantity_refunded_equal_1_and_0(
        Order $order
    ): void {
        $line = (object) [
            'quantityRefunded' => 1,
        ];
        $line2 = (object) [
            'quantityRefunded' => 0,
        ];
        $lines = (object) [
            $line,
            $line2,
        ];

        $order->lines = $lines;

        $this->check($order)
            ->shouldReturn(true);
    }

    public function it_returns_true_with_order_lines_quantity_refunded_equal_0_and_1(
        Order $order
    ): void {
        $line = (object) [
            'quantityRefunded' => 0,
        ];
        $line2 = (object) [
            'quantityRefunded' => 1,
        ];
        $lines = (object) [
            $line,
            $line2,
        ];

        $order->lines = $lines;

        $this->check($order)
            ->shouldReturn(true);
    }
}
