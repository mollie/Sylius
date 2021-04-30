<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Refund;

use BitBag\SyliusMolliePlugin\Creator\PaymentRefundCommandCreatorInterface;
use BitBag\SyliusMolliePlugin\Exceptions\InvalidRefundAmountException;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use Mollie\Api\Resources\Payment;
use Symfony\Component\Messenger\Exception\HandlerFailedException;
use Symfony\Component\Messenger\MessageBusInterface;

final class PaymentRefund implements PaymentRefundInterface
{
    /** @var MessageBusInterface */
    private $commandBus;

    /** @var PaymentRefundCommandCreatorInterface */
    private $commandCreator;

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    public function __construct(
        MessageBusInterface $commandBus,
        PaymentRefundCommandCreatorInterface $commandCreator,
        MollieLoggerActionInterface $loggerAction
    ) {
        $this->commandBus = $commandBus;
        $this->commandCreator = $commandCreator;
        $this->loggerAction = $loggerAction;
    }

    public function refund(Payment $payment): void
    {
        try {
            $refundUnits = $this->commandCreator->fromPayment($payment);
            $this->commandBus->dispatch($refundUnits);
        } catch (InvalidRefundAmountException $e) {
            $this->loggerAction->addNegativeLog($e->getMessage());
        } catch (HandlerFailedException $e) {
            $this->loggerAction->addNegativeLog($e->getMessage());
        }
    }
}
