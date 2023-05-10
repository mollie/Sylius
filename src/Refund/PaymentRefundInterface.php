<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Refund;

use Mollie\Api\Resources\Payment;

interface PaymentRefundInterface
{
    public function refund(Payment $payment): void;
}
