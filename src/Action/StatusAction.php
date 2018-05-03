<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action;

use BitBag\SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Request\GetStatusInterface;
use Sylius\Component\Core\Model\PaymentInterface;

final class StatusAction extends BaseApiAwareAction implements ActionInterface, GatewayAwareInterface, ApiAwareInterface
{
    use GatewayAwareTrait;

    /**
     * {@inheritdoc}
     *
     * @param GetStatusInterface $request
     */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        /** @var PaymentInterface $payment */
        $payment = $request->getModel();

        $details = $payment->getDetails();

        if (!isset($details['payment_mollie_id']) && !isset($details['subscription_mollie_id'])) {
            $request->markNew();

            return;
        }

        if (true === isset($details['subscription_mollie_id'])) {
            $subscription = $this->mollieApiClient->customers_subscriptions->withParentId($details['customer_mollie_id'])->get($details['subscription_mollie_id']);

            switch ($subscription->status) {
                case \Mollie_API_Object_Customer_Subscription::STATUS_CANCELLED:
                    $request->markCanceled();

                    break;
                case \Mollie_API_Object_Customer_Subscription::STATUS_ACTIVE:
                case \Mollie_API_Object_Customer_Subscription::STATUS_PENDING:
                case \Mollie_API_Object_Customer_Subscription::STATUS_COMPLETED:
                case \Mollie_API_Object_Customer_Subscription::STATUS_SUSPENDED:
                    $request->markCaptured();

                    break;
                default:
                    $request->markUnknown();

                    break;
            }

            return;
        }

        $paymentData = $this->mollieApiClient->payments->get($details['payment_mollie_id']);

        switch ($paymentData->status) {
            case \Mollie_API_Object_Payment::STATUS_OPEN:
                $request->markNew();

                break;
            case \Mollie_API_Object_Payment::STATUS_PAID:
                $request->markCaptured();

                break;
            case \Mollie_API_Object_Payment::STATUS_CANCELLED:
                $request->markCanceled();

                break;
            case \Mollie_API_Object_Payment::STATUS_PENDING:
                $request->markPending();

                break;
            case \Mollie_API_Object_Payment::STATUS_FAILED:
                $request->markFailed();

                break;
            case \Mollie_API_Object_Payment::STATUS_PAIDOUT:
                $request->markPayedout();

                break;
            case \Mollie_API_Object_Payment::STATUS_EXPIRED:
                $request->markExpired();

                break;
            case \Mollie_API_Object_Payment::STATUS_REFUNDED:
                $request->markRefunded();

                break;
            default:
                $request->markUnknown();

                break;
        }
    }

    /**
     * {@inheritdoc}
     */
    public function supports($request): bool
    {
        return
            $request instanceof GetStatusInterface &&
            $request->getModel() instanceof PaymentInterface
        ;
    }
}
