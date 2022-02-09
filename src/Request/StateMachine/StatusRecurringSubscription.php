<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Request\StateMachine;

use Payum\Core\Request\Generic;
use Sylius\Component\Core\Model\PaymentInterface;

class StatusRecurringSubscription extends Generic
{
    private ?string $paymentId;
    private ?PaymentInterface $payment;

    public function __construct($model, string $paymentId = null, PaymentInterface $payment = null)
    {
        parent::__construct($model);
        $this->paymentId = $paymentId;
        $this->payment = $payment;
    }

    public function getPaymentId(): ?string
    {
        return $this->paymentId;
    }

    public function getPayment(): ?PaymentInterface
    {
        return $this->payment;
    }
}
