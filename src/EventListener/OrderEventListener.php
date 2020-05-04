<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\EventListener;

use BitBag\SyliusMolliePlugin\Processor\PaymentSurchargeProcessorInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Symfony\Component\EventDispatcher\GenericEvent;

final class OrderEventListener
{
    /** @var PaymentSurchargeProcessorInterface */
    private $paymentSurchargeProcessor;

    public function __construct(PaymentSurchargeProcessorInterface $paymentSurchargeProcessor)
    {
        $this->paymentSurchargeProcessor = $paymentSurchargeProcessor;
    }

    public function updateOrder(GenericEvent $event): void
    {
        /** @var OrderInterface $order */
        $order = $event->getSubject();

        if (false === $order->getPayments()->first()) {
            return;
        }

        $this->paymentSurchargeProcessor->process($order);
    }
}
