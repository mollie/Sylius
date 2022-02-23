<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Action;

use _HumbugBoxe5640220fe34\Nette\Neon\Exception;
use BitBag\SyliusMolliePlugin\Action\StatusAction;
use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Payments\Methods\MealVoucher;
use BitBag\SyliusMolliePlugin\Refund\OrderRefundInterface;
use BitBag\SyliusMolliePlugin\Refund\PaymentRefundInterface;
use BitBag\SyliusMolliePlugin\Updater\Order\OrderVoucherAdjustmentUpdaterInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Mollie\Api\Endpoints\CustomerEndpoint;
use Mollie\Api\Endpoints\OrderEndpoint;
use Mollie\Api\Endpoints\PaymentEndpoint;
use Mollie\Api\Exceptions\ApiException;
use Mollie\Api\Resources\Customer;
use Mollie\Api\Resources\Order;
use Mollie\Api\Resources\Payment;
use Mollie\Api\Resources\Subscription;
use Mollie\Api\Types\PaymentStatus;
use Mollie\Api\Types\SubscriptionStatus;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayInterface;
use Payum\Core\Request\GetStatusInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Core\Model\PaymentInterface;

final class StatusActionSpec extends ObjectBehavior
{
    function let(
        PaymentRefundInterface $paymentRefund,
        OrderRefundInterface $orderRefund,
        MollieLoggerActionInterface $loggerAction,
        OrderVoucherAdjustmentUpdaterInterface $orderVoucherAdjustmentUpdater,
        GatewayInterface $gateway,
        MollieApiClient $mollieApiClient
    ): void {
        $this->beConstructedWith(
            $paymentRefund,
            $orderRefund,
            $loggerAction,
            $orderVoucherAdjustmentUpdater
        );

        $this->setApi($mollieApiClient);
        $this->setGateway($gateway);
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(StatusAction::class);
    }

    function it_implements_action_interface(): void
    {
        $this->shouldHaveType(ActionInterface::class);
    }

    function it_implements_api_aware_interface(): void
    {
        $this->shouldHaveType(ApiAwareInterface::class);
    }

    function it_implements_gateway_aware_interface(): void
    {
        $this->shouldHaveType(GatewayAwareInterface::class);
    }

    function it_executes_with_unset_details(
        GetStatusInterface $request,
        PaymentInterface $payment,
        MollieLoggerActionInterface $loggerAction
    ): void {
        $payment->getDetails()->willReturn([]);
        $payment->getId()->willReturn(1);
        $request->getModel()->willReturn($payment);

        $request->markNew()->shouldBeCalled();
        $loggerAction->addLog(sprintf('Mark new payment with id %s', 1))->shouldBeCalled();

        $this->execute($request);
    }

    function it_executes_with_status_error(
        GetStatusInterface $request,
        PaymentInterface $payment
    ): void {

        $details = [
            'payment_mollie_id',
            'subscription_mollie_id',
            'order_mollie_id',
            'statusError' => 1,
        ];
        $payment->getDetails()->willReturn($details);
        $payment->getId()->willReturn(1);
        $request->getModel()->willReturn($payment);

        $request->markFailed()->shouldBeCalled();

        $this->execute($request);
    }

    function it_executes_with_subscription_mollie_id_throws_exception(
        GetStatusInterface $request,
        PaymentInterface $payment,
        CustomerEndpoint $customerEndpoint,
        MollieApiClient $mollieApiClient,
        Customer $customer,
        Subscription $subscription,
        MollieLoggerActionInterface $loggerAction
    ): void {

        $details = [
            'payment_mollie_id',
            'subscription_mollie_id' => 1,
            'customer_mollie_id' => 1,
            'order_mollie_id',
            'statusError',
        ];
        $payment->getDetails()->willReturn($details);
        $payment->getId()->willReturn(1);
        $request->getModel()->willReturn($payment);

        $mollieApiClient->customers = $customerEndpoint;
        $e = new Exception();
        $customerEndpoint->get(1)->willThrow($e);

        $loggerAction->addNegativeLog(sprintf('Error with get customer from mollie with: %s', $e->getMessage()))->shouldBeCalled();

        $this->shouldThrow(ApiException::class)->during('execute', [$request]);
    }

    function it_executes_with_subscription_mollie_id_status_canceled(
        GetStatusInterface $request,
        PaymentInterface $payment,
        CustomerEndpoint $customerEndpoint,
        MollieApiClient $mollieApiClient,
        Customer $customer,
        Subscription $subscription,
        MollieLoggerActionInterface $loggerAction
    ): void {

        $details = [
            'payment_mollie_id',
            'subscription_mollie_id' => 1,
            'customer_mollie_id' => 1,
            'order_mollie_id',
            'statusError',
        ];
        $payment->getDetails()->willReturn($details);
        $payment->getId()->willReturn(1);
        $request->getModel()->willReturn($payment);

        $mollieApiClient->customers = $customerEndpoint;
        $customerEndpoint->get(1)->willReturn($customer);
        $customer->getSubscription(1)->willReturn($subscription);
        $subscription->status = SubscriptionStatus::STATUS_CANCELED;

        $request->markCanceled()->shouldBeCalled();
        $loggerAction->addLog(sprintf('Mark subscription status to: %s', $subscription->status))->shouldBeCalled();

        $this->execute($request);
    }

    function it_executes_with_subscription_mollie_id_status_active(
        GetStatusInterface $request,
        PaymentInterface $payment,
        CustomerEndpoint $customerEndpoint,
        MollieApiClient $mollieApiClient,
        Customer $customer,
        Subscription $subscription,
        MollieLoggerActionInterface $loggerAction
    ): void {

        $details = [
            'payment_mollie_id',
            'subscription_mollie_id' => 1,
            'customer_mollie_id' => 1,
            'order_mollie_id',
            'statusError',
        ];
        $payment->getDetails()->willReturn($details);
        $payment->getId()->willReturn(1);
        $request->getModel()->willReturn($payment);

        $mollieApiClient->customers = $customerEndpoint;
        $customerEndpoint->get(1)->willReturn($customer);
        $customer->getSubscription(1)->willReturn($subscription);
        $subscription->status = SubscriptionStatus::STATUS_ACTIVE;

        $request->markCaptured()->shouldBeCalled();
        $loggerAction->addLog(sprintf('Mark subscription status to: %s', $subscription->status))->shouldBeCalled();

        $this->execute($request);
    }

    function it_executes_with_subscription_mollie_id_status_pending(
        GetStatusInterface $request,
        PaymentInterface $payment,
        CustomerEndpoint $customerEndpoint,
        MollieApiClient $mollieApiClient,
        Customer $customer,
        Subscription $subscription,
        MollieLoggerActionInterface $loggerAction
    ): void {

        $details = [
            'payment_mollie_id',
            'subscription_mollie_id' => 1,
            'customer_mollie_id' => 1,
            'order_mollie_id',
            'statusError',
        ];
        $payment->getDetails()->willReturn($details);
        $payment->getId()->willReturn(1);
        $request->getModel()->willReturn($payment);

        $mollieApiClient->customers = $customerEndpoint;
        $customerEndpoint->get(1)->willReturn($customer);
        $customer->getSubscription(1)->willReturn($subscription);
        $subscription->status = SubscriptionStatus::STATUS_PENDING;

        $request->markCaptured()->shouldBeCalled();
        $loggerAction->addLog(sprintf('Mark subscription status to: %s', $subscription->status))->shouldBeCalled();

        $this->execute($request);
    }

    function it_executes_with_subscription_mollie_id_status_completed(
        GetStatusInterface $request,
        PaymentInterface $payment,
        CustomerEndpoint $customerEndpoint,
        MollieApiClient $mollieApiClient,
        Customer $customer,
        Subscription $subscription,
        MollieLoggerActionInterface $loggerAction
    ): void {

        $details = [
            'payment_mollie_id',
            'subscription_mollie_id' => 1,
            'customer_mollie_id' => 1,
            'order_mollie_id',
            'statusError',
        ];
        $payment->getDetails()->willReturn($details);
        $payment->getId()->willReturn(1);
        $request->getModel()->willReturn($payment);

        $mollieApiClient->customers = $customerEndpoint;
        $customerEndpoint->get(1)->willReturn($customer);
        $customer->getSubscription(1)->willReturn($subscription);
        $subscription->status = SubscriptionStatus::STATUS_COMPLETED;

        $request->markCaptured()->shouldBeCalled();
        $loggerAction->addLog(sprintf('Mark subscription status to: %s', $subscription->status))->shouldBeCalled();

        $this->execute($request);
    }

    function it_executes_with_subscription_mollie_id_status_suspended(
        GetStatusInterface $request,
        PaymentInterface $payment,
        CustomerEndpoint $customerEndpoint,
        MollieApiClient $mollieApiClient,
        Customer $customer,
        Subscription $subscription,
        MollieLoggerActionInterface $loggerAction
    ): void {

        $details = [
            'payment_mollie_id',
            'subscription_mollie_id' => 1,
            'customer_mollie_id' => 1,
            'order_mollie_id',
            'statusError',
        ];
        $payment->getDetails()->willReturn($details);
        $payment->getId()->willReturn(1);
        $request->getModel()->willReturn($payment);

        $mollieApiClient->customers = $customerEndpoint;
        $customerEndpoint->get(1)->willReturn($customer);
        $customer->getSubscription(1)->willReturn($subscription);
        $subscription->status = SubscriptionStatus::STATUS_SUSPENDED;

        $request->markCaptured()->shouldBeCalled();
        $loggerAction->addLog(sprintf('Mark subscription status to: %s', $subscription->status))->shouldBeCalled();

        $this->execute($request);
    }

    function it_executes_with_subscription_mollie_id_status_unknown(
        GetStatusInterface $request,
        PaymentInterface $payment,
        CustomerEndpoint $customerEndpoint,
        MollieApiClient $mollieApiClient,
        Customer $customer,
        Subscription $subscription,
        MollieLoggerActionInterface $loggerAction
    ): void {

        $details = [
            'payment_mollie_id',
            'subscription_mollie_id' => 1,
            'customer_mollie_id' => 1,
            'order_mollie_id',
            'statusError',
        ];
        $payment->getDetails()->willReturn($details);
        $payment->getId()->willReturn(1);
        $request->getModel()->willReturn($payment);

        $mollieApiClient->customers = $customerEndpoint;
        $customerEndpoint->get(1)->willReturn($customer);
        $customer->getSubscription(1)->willReturn($subscription);
        $subscription->status = 'unknown_status';

        $request->markUnknown()->shouldBeCalled();
        $loggerAction->addLog(sprintf('Mark subscription status to: %s', $subscription->status))->shouldBeCalled();

        $this->execute($request);
    }

    function it_executes_without_subscription_mollie_id_and_order_id_and_with_payment_with_refund(
        GetStatusInterface $request,
        PaymentInterface $payment,
        PaymentEndpoint $paymentEndpoint,
        MollieApiClient $mollieApiClient,
        Payment $molliePayment,
        MollieLoggerActionInterface $loggerAction,
        PaymentRefundInterface $paymentRefund
    ): void {
        $details = [
            'payment_mollie_id' => 2,
            'customer_mollie_id' => 1,
            'statusError',
        ];
        $payment->getDetails()->willReturn($details);
        $payment->getId()->willReturn(1);
        $request->getModel()->willReturn($payment);

        $mollieApiClient->payments = $paymentEndpoint;
        $paymentEndpoint->get(2)->willReturn($molliePayment);
        $molliePayment->hasRefunds()->willReturn(true);
        $molliePayment->hasChargebacks()->willReturn(true);

        $paymentRefund->refund($molliePayment)->shouldBeCalled();
        $loggerAction->addLog(sprintf('Mark payment refunded to: %s', $molliePayment->status))->shouldBeCalled();

        $this->execute($request);
    }

    function it_executes_without_subscription_mollie_id_and_order_id_and_with_payment_with_no_refund(
        GetStatusInterface $request,
        PaymentInterface $payment,
        PaymentEndpoint $paymentEndpoint,
        MollieApiClient $mollieApiClient,
        Payment $molliePayment,
        MollieLoggerActionInterface $loggerAction,
        PaymentRefundInterface $paymentRefund
    ): void {
        $details = [
            'payment_mollie_id' => 2,
            'customer_mollie_id' => 1,
            'statusError',
        ];
        $payment->getDetails()->willReturn($details);
        $payment->getId()->willReturn(1);
        $request->getModel()->willReturn($payment);

        $mollieApiClient->payments = $paymentEndpoint;
        $paymentEndpoint->get(2)->willReturn($molliePayment);
        $molliePayment->hasRefunds()->willReturn(false);
        $molliePayment->hasChargebacks()->willReturn(false);

        $molliePayment->status = PaymentStatus::STATUS_PENDING;
        $request->markPending()->shouldBeCalled();
        $loggerAction->addLog(sprintf('Mark payment status to: %s', $molliePayment->status))
        ->shouldBeCalled();

        $this->execute($request);
    }

    function it_executes_without_subscription_mollie_id_and_with_order_id_with_no_refund(
        GetStatusInterface $request,
        PaymentInterface $corePayment,
        Payment $payment,
        Payment $molliePayment,
        PaymentEndpoint $paymentEndpoint,
        OrderEndpoint $orderEndpoint,
        MollieApiClient $mollieApiClient,
        MollieLoggerActionInterface $loggerAction,
        Order $order,
        OrderVoucherAdjustmentUpdaterInterface $orderVoucherAdjustmentUpdater
    ): void {
        $details = [
            'payment_mollie_id' => null,
            'customer_mollie_id' => 1,
            'order_mollie_id' => 1,
            'statusError',
        ];
        $corePayment->getDetails()->willReturn($details);
        $corePayment->getId()->willReturn(1);
        $request->getModel()->willReturn($corePayment);

        $mollieApiClient->orders = $orderEndpoint;
        $orderEndpoint->get(1, ['embed' => 'payments'])->willReturn($order);

        $payment->method = 'voucher';
        $payment->id = 1;
        $order->_embedded = new \stdClass();
        $order->_embedded->payments = [$payment->getWrappedObject()];
        $order->metadata = new \stdClass();
        $order->metadata->order_id = 1;

        $orderVoucherAdjustmentUpdater->update($payment, 1)->shouldBeCalled();

        $mollieApiClient->payments = $paymentEndpoint;
        $paymentEndpoint->get(1)->willReturn($molliePayment);
        $molliePayment->metadata = $order->metadata;
        $molliePayment->hasRefunds()->willReturn(false);
        $molliePayment->hasChargebacks()->willReturn(false);

        $molliePayment->status = PaymentStatus::STATUS_AUTHORIZED;
        $request->markAuthorized()->shouldBeCalled();
        $loggerAction->addLog(sprintf('Mark payment status to: %s', $molliePayment->status))
        ->shouldBeCalled();

        $this->execute($request);
    }

    function it_executes_without_subscription_mollie_id_and_with_order_id_with_refund(
        GetStatusInterface $request,
        PaymentInterface $corePayment,
        Payment $payment,
        Payment $molliePayment,
        PaymentEndpoint $paymentEndpoint,
        OrderEndpoint $orderEndpoint,
        MollieApiClient $mollieApiClient,
        MollieLoggerActionInterface $loggerAction,
        Order $order,
        OrderVoucherAdjustmentUpdaterInterface $orderVoucherAdjustmentUpdater,
        OrderRefundInterface $orderRefund
    ): void {
        $details = [
            'payment_mollie_id' => null,
            'customer_mollie_id' => 1,
            'order_mollie_id' => 1,
            'statusError',
        ];
        $corePayment->getDetails()->willReturn($details);
        $corePayment->getId()->willReturn(1);
        $request->getModel()->willReturn($corePayment);

        $mollieApiClient->orders = $orderEndpoint;
        $orderEndpoint->get(1, ['embed' => 'payments'])->willReturn($order);

        $payment->method = 'voucher';
        $payment->id = 1;
        $order->_embedded = new \stdClass();
        $order->_embedded->payments = [$payment->getWrappedObject()];
        $order->metadata = new \stdClass();
        $order->metadata->order_id = 1;

        $orderVoucherAdjustmentUpdater->update($payment, 1)->shouldBeCalled();

        $mollieApiClient->payments = $paymentEndpoint;
        $paymentEndpoint->get(1)->willReturn($molliePayment);
        $molliePayment->metadata = $order->metadata;
        $molliePayment->hasRefunds()->willReturn(true);
        $molliePayment->hasChargebacks()->willReturn(true);

        $orderRefund->refund($order)->shouldBeCalled();
        $loggerAction->addLog(sprintf('Mark payment order refunded to: %s', $molliePayment->status))
            ->shouldBeCalled();

        $this->execute($request);
    }

    function it_supports_only_get_status_request_and_array_access(
        GetStatusInterface $request,
        PaymentInterface $payment
    ): void {
        $request->getModel()->willReturn($payment);

        $this->supports($request)->shouldReturn(true);
    }
}
