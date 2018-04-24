<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Behat\Mocker;

use Sylius\Behat\Service\Mocker\MockerInterface;

final class MollieApiMocker
{
    /**
     * @var MockerInterface
     */
    private $mocker;

    /**
     * @param MockerInterface $mocker
     */
    public function __construct(MockerInterface $mocker)
    {
        $this->mocker = $mocker;
    }

    /**
     * @param callable $action
     */
    public function mockApiCreatePayment(callable $action): void
    {
        $payment = \Mockery::mock('payment');

        $payment->id = 1;

        $payment
            ->shouldReceive('getPaymentUrl')
            ->andReturn('')
        ;

        $payment = \Mockery::mock('payment');

        $payment
            ->shouldReceive('create')
            ->andReturn($payment)
        ;

        $mock = $this->mocker->mockService('bitbag_sylius_mollie_plugin.mollie_api_client', \Mollie_API_Client::class);

        $mock
            ->shouldReceive('setApiKey')
        ;

        $mock->payments = $payment;

        $action();

        $this->mocker->unmockAll();
    }

    /**
     * @param callable $action
     */
    public function mockApiSuccessfulPayment(callable $action): void
    {
        $payment = \Mockery::mock('payment');

        $payment->metadata = (object) [
            'order_id' => 1,
        ];

        $payment
            ->shouldReceive('isPaid')
            ->andReturn(true)
        ;

        $payment
            ->shouldReceive('isPaidOut')
            ->andReturn(false)
        ;

        $payments = \Mockery::mock('payments');

        $payments
            ->shouldReceive('get')
            ->andReturn($payment)
        ;

        $mock = $this->mocker->mockService('bitbag_sylius_mollie_plugin.mollie_api_client', \Mollie_API_Client::class);

        $mock
            ->shouldReceive('setApiKey')
        ;

        $mock->payments = $payments;

        $action();

        $this->mocker->unmockAll();
    }

    /**
     * @param callable $action
     */
    public function mockApiCancelledPayment(callable $action): void
    {
        $payment = \Mockery::mock('payment');

        $payment->metadata = (object) [
            'order_id' => 1,
        ];

        $payment
            ->shouldReceive('isPaid', 'isPaidOut', 'isPending')
            ->andReturn(false)
        ;

        $payment
            ->shouldReceive('isCancelled')
            ->andReturn(true)
        ;

        $payments = \Mockery::mock('payments');

        $payments
            ->shouldReceive('get')
            ->andReturn($payment)
        ;

        $mock = $this->mocker->mockService('bitbag_sylius_mollie_plugin.mollie_api_client', \Mollie_API_Client::class);

        $mock
            ->shouldReceive('setApiKey')
        ;

        $mock->payments = $payments;

        $action();

        $this->mocker->unmockAll();
    }

    /**
     * @param callable $action
     */
    public function mockApiRefundedPayment(callable $action): void
    {
        $payment = \Mockery::mock('payment');

        $payment
            ->shouldReceive('canBeRefunded')
            ->andReturn(true)
        ;

        $payments = \Mockery::mock('payments');

        $payments
            ->shouldReceive('get')
            ->andReturn($payment)
        ;

        $payments
            ->shouldReceive('refund')
        ;

        $mock = $this->mocker->mockService('bitbag_sylius_mollie_plugin.mollie_api_client', \Mollie_API_Client::class);

        $mock
            ->shouldReceive('setApiKey')
        ;

        $mock->payments = $payments;

        $action();

        $this->mocker->unmockAll();
    }
}
