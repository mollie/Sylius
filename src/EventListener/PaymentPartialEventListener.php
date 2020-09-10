<?php

namespace BitBag\SyliusMolliePlugin\EventListener;

use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Order\OrderPaymentRefundInterface;
use Sylius\RefundPlugin\Event\UnitsRefunded;
use Sylius\RefundPlugin\Exception\InvalidRefundAmountException;
use Symfony\Component\Messenger\Exception\HandlerFailedException;

final class PaymentPartialEventListener
{
    /** @var OrderPaymentRefundInterface */
    private $orderPaymentRefund;

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    public function __construct
    (
        OrderPaymentRefundInterface $orderPaymentRefund,
        MollieLoggerActionInterface $loggerAction
    ) {
        $this->orderPaymentRefund = $orderPaymentRefund;
        $this->loggerAction = $loggerAction;
    }

    public function __invoke(UnitsRefunded $unitRefunded): void
    {
        try {
            $this->orderPaymentRefund->refund($unitRefunded);
        } catch (InvalidRefundAmountException $exception) {
            $this->loggerAction->addNegativeLog($exception->getMessage());
        } catch (HandlerFailedException $exception) {
            /** @var \Exception $previousException */
            $previousException = $exception->getPrevious();

            $this->loggerAction->addNegativeLog($previousException->getMessage());
        }
    }
}
