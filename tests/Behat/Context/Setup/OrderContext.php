<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Behat\Context\Setup;

use Behat\Behat\Context\Context;
use BitBag\SyliusMolliePlugin\MollieGatewayFactory;
use Doctrine\Common\Persistence\ObjectManager;
use Payum\Core\Payum;
use Payum\Core\Registry\RegistryInterface;
use SM\Factory\FactoryInterface as StateMachineFactoryInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Sylius\Component\Payment\PaymentTransitions;

final class OrderContext implements Context
{
    /**
     * @var ObjectManager
     */
    private $objectManager;

    /**
     * @var StateMachineFactoryInterface
     */
    private $stateMachineFactory;

    /**
     * @var RegistryInterface|Payum
     */
    private $payum;

    /**
     * @param ObjectManager $objectManager
     * @param StateMachineFactoryInterface $stateMachineFactory
     * @param RegistryInterface $payum
     */
    public function __construct(
        ObjectManager $objectManager,
        StateMachineFactoryInterface $stateMachineFactory,
        RegistryInterface $payum
    ) {
        $this->objectManager = $objectManager;
        $this->stateMachineFactory = $stateMachineFactory;
        $this->payum = $payum;
    }

    /**
     * @Given /^(this order) with mollie payment is already paid$/
     */
    public function thisOrderWithMolliePaymentIsAlreadyPaid(OrderInterface $order): void
    {
        $this->applyMolliePaymentTransitionOnOrder($order, PaymentTransitions::TRANSITION_COMPLETE);

        $this->objectManager->flush();
    }

    /**
     * @param OrderInterface $order
     * @param $transition
     *
     * @throws \SM\SMException
     */
    private function applyMolliePaymentTransitionOnOrder(OrderInterface $order, $transition): void
    {
        foreach ($order->getPayments() as $payment) {
            /** @var PaymentMethodInterface $paymentMethod */
            $paymentMethod = $payment->getMethod();

            if (MollieGatewayFactory::FACTORY_NAME === $paymentMethod->getGatewayConfig()->getFactoryName()) {
                $refundToken = $this->payum->getTokenFactory()->createRefundToken('mollie', $payment);

                $metadata = [];

                $metadata['refund_token'] = $refundToken->getHash();

                $model['metadata'] = $metadata;

                $model['amount'] = $payment->getAmount() / 100;
                $model['payment_mollie_id'] = 'test';

                $payment->setDetails($model);
            }

            $this->stateMachineFactory->get($payment, PaymentTransitions::GRAPH)->apply($transition);
        }
    }
}
