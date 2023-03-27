<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\PaymentProcessing;

use Sylius\Component\Core\Model\PaymentInterface;

interface SubscriptionPaymentProcessorInterface
{
    public function processSuccess(PaymentInterface $payment): void;

    public function processFailed(PaymentInterface $payment): void;
}
