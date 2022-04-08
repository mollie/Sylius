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
use Mollie\Api\Resources\Payment;
use Mollie\Api\Types\PaymentStatus;
use Mollie\Api\Types\SubscriptionStatus;
use Sylius\Behat\Service\Mocker\MockerInterface;

final class MollieApiMocker
{
    /** @var MockerInterface */
    private $mocker;

    public function __construct(MockerInterface $mocker)
    {
        $this->mocker = $mocker;
    }

    public function mockApiCreatePayment(callable $action): void
    {
        $payment = \Mockery::mock('payment', Payment::class);

        $payment->id = 1;

        $payment
            ->shouldReceive('getCheckoutUrl')
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

        $mock
            ->shouldReceive('isRefunded')
            ->andReturn(false)
        ;

        $mock->payments = $payments;

        $action();

        $this->mocker->unmockAll();
    }

    public function mockApiSuccessfulPayment(callable $action): void
    {
        $payment = \Mockery::mock('payment', Payment::class);

        $payment->metadata = (object) [
            'order_id' => 1,
        ];

        $payment->status = PaymentStatus::STATUS_PAID;

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

        $mock
            ->shouldReceive('isRefunded')
            ->andReturn(false)
        ;

        $mock->payments = $payments;

        $action();

        $this->mocker->unmockAll();
    }

    public function mockApiCancelledPayment(callable $action): void
    {
        $payment = \Mockery::mock('payment', Payment::class);

        $payment->metadata = (object) [
            'order_id' => 1,
        ];

        $payment->status = PaymentStatus::STATUS_CANCELED;

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

        $mock
            ->shouldReceive('isRefunded')
            ->andReturn(false)
        ;

        $mock->payments = $payments;

        $action();

        $this->mocker->unmockAll();
    }

    public function mockApiRefundedPayment(callable $action): void
    {
        $payment = \Mockery::mock('payment', Payment::class);

        $payment->status = 'refund';

        $payment
            ->shouldReceive('canBeRefunded')
            ->andReturn(true)
        ;

        $payment
            ->shouldReceive('refund')
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

        $mock
            ->shouldReceive('isRefunded')
            ->andReturn(true);

        $mock->payments = $payments;

        $action();

        $this->mocker->unmockAll();
    }

    public function mockApiCreateRecurringSubscription(callable $action): void
    {
        $payment = \Mockery::mock('payment', Payment::class);

        $payment->id = 'id_1';
        $payment->status = SubscriptionStatus::STATUS_ACTIVE;

        $payment
            ->shouldReceive('getCheckoutUrl')
            ->andReturn('')
        ;

        $payment
            ->shouldReceive('create')
            ->andReturn($payment)
        ;

        $payment
            ->shouldReceive('createMandate')
            ->andReturn($payment)
        ;

        $payment
            ->shouldReceive('createSubscription')
            ->andReturn($payment)
        ;

        $payment
            ->shouldReceive('getSubscription')
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
            ->shouldReceive('isRefunded')
            ->andReturn(false)
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

    public function mockApiCancelledRecurringSubscription(callable $action): void
    {
        $payment = \Mockery::mock('payment', Payment::class);

        $payment->status = SubscriptionStatus::STATUS_CANCELED;

        $payment
            ->shouldReceive('cancelSubscription')
            ->andReturn($payment)
        ;

        $payments = \Mockery::mock('payments');

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
            ->shouldReceive('isRefunded')
            ->andReturn(false)
        ;

        $mock->customers_subscriptions = $payments;
        $mock->customers = $payments;

        $action();

        $this->mocker->unmockAll();
    }
}
