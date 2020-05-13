<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\PaymentProcessing;

use BitBag\SyliusMolliePlugin\Entity\SubscriptionInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use BitBag\SyliusMolliePlugin\Request\Api\CancelRecurringSubscription;
use Payum\Core\Payum;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Symfony\Component\HttpFoundation\Session\Session;

final class CancelRecurringSubscriptionProcessor implements CancelRecurringSubscriptionProcessorInterface
{
    /**
     * @var Payum
     */
    private $payum;

    /**
     * @var Session
     */
    private $session;

    /**
     * @param Payum $payum
     * @param Session $session
     */
    public function __construct(Payum $payum, Session $session)
    {
        $this->payum = $payum;
        $this->session = $session;
    }

    /**
     * {@inheritdoc}
     */
    public function process(SubscriptionInterface $subscription): void
    {
        $payment = $subscription->getOrder()->getLastPayment();

        if (null === $payment) {
            return;
        }

        /** @var PaymentMethodInterface $paymentMethod */
        $paymentMethod = $payment->getMethod();

        if (null === $paymentMethod->getGatewayConfig() ||
            MollieSubscriptionGatewayFactory::FACTORY_NAME !== $paymentMethod->getGatewayConfig()->getFactoryName()
        ) {
            return;
        }

        $gateway = $this->payum->getGateway($paymentMethod->getGatewayConfig()->getGatewayName());

        $gateway->execute(new CancelRecurringSubscription($subscription));
    }
}
