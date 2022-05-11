<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Behat\Context\Ui\Shop;

use Behat\Behat\Context\Context;
use Sylius\Component\Core\Repository\PaymentRepositoryInterface;
use Sylius\Component\Payment\Model\PaymentInterface;

final class ProductContext implements Context
{
    private PaymentRepositoryInterface $paymentRepository;

    private const SUCCESSFUL_PAYMENT_AMOUNT = 1999;

    public function __construct(PaymentRepositoryInterface $paymentRepository)
    {
        $this->paymentRepository = $paymentRepository;
    }

    /**
     * @When I fix payment amount to pay successfully
     */
    public function iFixPaymentAmountToPaySuccessfully(): void
    {
        /** @var PaymentInterface $payment */
        $payment = $this->paymentRepository->findOneBy([
            'state' => PaymentInterface::STATE_NEW,
        ]);

        $payment->setAmount(self::SUCCESSFUL_PAYMENT_AMOUNT);

        $this->paymentRepository->add($payment);
    }
}
