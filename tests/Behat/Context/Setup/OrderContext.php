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
use BitBag\SyliusMolliePlugin\Checker\Gateway\MollieGatewayFactoryCheckerInterface;
use Doctrine\ORM\EntityManager;
use Payum\Core\Payum;
use Payum\Core\Registry\RegistryInterface;
use SM\Factory\FactoryInterface as StateMachineFactoryInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Sylius\Component\Payment\PaymentTransitions;
use Webmozart\Assert\Assert;

final class OrderContext implements Context
{
    /** @var EntityManager */
    private $entityManager;

    /** @var StateMachineFactoryInterface */
    private $stateMachineFactory;

    /** @var RegistryInterface|Payum */
    private $payum;

    private MollieGatewayFactoryCheckerInterface $mollieGatewayFactoryChecker;

    public function __construct(
        EntityManager $entityManager,
        StateMachineFactoryInterface $stateMachineFactory,
        RegistryInterface $payum,
        MollieGatewayFactoryCheckerInterface $mollieGatewayFactoryChecker
    ) {
        $this->entityManager = $entityManager;
        $this->stateMachineFactory = $stateMachineFactory;
        $this->payum = $payum;
        $this->mollieGatewayFactoryChecker = $mollieGatewayFactoryChecker;
    }

    /**
     * @Given /^(this order) with mollie payment is already paid$/
     */
    public function thisOrderWithMolliePaymentIsAlreadyPaid(OrderInterface $order): void
    {
        $this->applyMolliePaymentTransitionOnOrder($order, PaymentTransitions::TRANSITION_COMPLETE);

        $this->entityManager->flush();
    }

    private function applyMolliePaymentTransitionOnOrder(OrderInterface $order, string $transition): void
    {
        foreach ($order->getPayments() as $payment) {
            /** @var PaymentMethodInterface $paymentMethod */
            $paymentMethod = $payment->getMethod();

            $gatewayConfig = $paymentMethod->getGatewayConfig();

            Assert::notNull($gatewayConfig);

            if ($this->mollieGatewayFactoryChecker->isMollieGateway($gatewayConfig)) {
                Assert::isInstanceOf($this->payum, Payum::class);
                $refundToken = $this->payum->getTokenFactory()->createRefundToken('mollie', $payment);

                $metadata = [];
                $model = [];
                $metadata['refund_token'] = $refundToken->getHash();

                $model['metadata'] = $metadata;

                Assert::notNull($payment->getAmount());
                $model['amount'] = $payment->getAmount() / 100;
                $model['payment_mollie_id'] = 'test';

                $payment->setDetails($model);
            }

            $this->stateMachineFactory->get($payment, PaymentTransitions::GRAPH)->apply($transition);
        }
    }
}
