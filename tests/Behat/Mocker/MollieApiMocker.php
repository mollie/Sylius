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

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
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

        $payments = \Mockery::mock('payments');

        $payments
            ->shouldReceive('create')
            ->andReturn($payment)
        ;

        $mock = $this->mocker->mockService('bitbag_sylius_mollie_plugin.mollie_api_client', MollieApiClient::class);

        $mock
            ->shouldReceive('setApiKey')
        ;

        $mock
            ->shouldReceive('isRecurringSubscription')
            ->andReturn(false)
        ;

        $mock->payments = $payments;

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

        $payment->status = \Mollie_API_Object_Payment::STATUS_PAID;

        $payments = \Mockery::mock('payments');

        $payments
            ->shouldReceive('get')
            ->andReturn($payment)
        ;

        $mock = $this->mocker->mockService('bitbag_sylius_mollie_plugin.mollie_api_client', MollieApiClient::class);

        $mock
            ->shouldReceive('setApiKey')
        ;

        $mock
            ->shouldReceive('isRecurringSubscription')
            ->andReturn(false)
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

        $payment->status = \Mollie_API_Object_Payment::STATUS_CANCELLED;

        $payments = \Mockery::mock('payments');

        $payments
            ->shouldReceive('get')
            ->andReturn($payment)
        ;

        $mock = $this->mocker->mockService('bitbag_sylius_mollie_plugin.mollie_api_client', MollieApiClient::class);

        $mock
            ->shouldReceive('setApiKey')
        ;

        $mock
            ->shouldReceive('isRecurringSubscription')
            ->andReturn(false)
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

        $payment->status = \Mollie_API_Object_Payment::STATUS_REFUNDED;

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

        $mock = $this->mocker->mockService('bitbag_sylius_mollie_plugin.mollie_api_client', MollieApiClient::class);

        $mock
            ->shouldReceive('setApiKey')
        ;

        $mock
            ->shouldReceive('isRecurringSubscription')
            ->andReturn(false)
        ;

        $mock->payments = $payments;

        $action();

        $this->mocker->unmockAll();
    }

    /**
     * @param callable $action
     */
    public function mockApiCreateRecurringSubscription(callable $action): void
    {
        $payment = \Mockery::mock('payment');

        $payment->id = 'id_1';
        $payment->status = \Mollie_API_Object_Customer_Subscription::STATUS_ACTIVE;

        $payment
            ->shouldReceive('getPaymentUrl')
            ->andReturn('')
        ;

        $payment
            ->shouldReceive('create')
            ->andReturn($payment)
        ;

        $payment
            ->shouldReceive('get')
            ->andReturn($payment)
        ;

        $payments = \Mockery::mock('payments');

        $payments
            ->shouldReceive('create')
            ->andReturn($payment)
        ;

        $payments
            ->shouldReceive('withParentId')
            ->andReturn($payment)
        ;

        $payments
            ->shouldReceive('get')
            ->andReturn($payment)
        ;

        $mock = $this->mocker->mockService('bitbag_sylius_mollie_plugin.mollie_api_client', MollieApiClient::class);

        $mock
            ->shouldReceive('setApiKey', 'setConfig', 'setIsRecurringSubscription')
        ;

        $mock
            ->shouldReceive('isRecurringSubscription')
            ->andReturn(true)
        ;

        $mock
            ->shouldReceive('getConfig')
            ->andReturn([
                'times' => 12,
                'interval' => '1 months',
            ])
        ;

        $mock->payments = $payments;
        $mock->customers = $payments;
        $mock->customers_mandates = $payments;
        $mock->customers_subscriptions = $payments;

        $action();

        $this->mocker->unmockAll();
    }

    /**
     * @param callable $action
     */
    public function mockApiCancelledRecurringSubscription(callable $action): void
    {
        $payment = \Mockery::mock('payment');

        $payment->status = \Mollie_API_Object_Customer_Subscription::STATUS_CANCELLED;

        $payment
            ->shouldReceive('cancel')
            ->andReturn($payment)
        ;

        $payments = \Mockery::mock('payments');

        $payments
            ->shouldReceive('withParentId')
            ->andReturn($payment)
        ;

        $mock = $this->mocker->mockService('bitbag_sylius_mollie_plugin.mollie_api_client', MollieApiClient::class);

        $mock
            ->shouldReceive('setApiKey', 'setConfig', 'setIsRecurringSubscription')
        ;

        $mock
            ->shouldReceive('isRecurringSubscription')
            ->andReturn(true)
        ;

        $mock->customers_subscriptions = $payments;

        $action();

        $this->mocker->unmockAll();
    }
}
