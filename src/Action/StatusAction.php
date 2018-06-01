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
use Mollie\Api\Resources\Customer;
use Mollie\Api\Resources\Subscription;
use Mollie\Api\Types\PaymentStatus;
use Mollie\Api\Types\SubscriptionStatus;
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
            /** @var Customer $customer */
            $customer = $this->mollieApiClient->customers->get($details['customer_mollie_id']);

            /** @var Subscription $subscription */
            $subscription = $customer->getSubscription($details['subscription_mollie_id']);

            switch ($subscription->status) {
                case SubscriptionStatus::STATUS_CANCELED:
                    $request->markCanceled();

                    break;
                case SubscriptionStatus::STATUS_ACTIVE:
                case SubscriptionStatus::STATUS_PENDING:
                case SubscriptionStatus::STATUS_COMPLETED:
                case SubscriptionStatus::STATUS_SUSPENDED:
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
            case PaymentStatus::STATUS_OPEN:
                $request->markNew();

                break;
            case PaymentStatus::STATUS_PAID:
                $request->markCaptured();

                break;
            case PaymentStatus::STATUS_CANCELED:
                $request->markCanceled();

                break;
            case PaymentStatus::STATUS_PENDING:
                $request->markPending();

                break;
            case PaymentStatus::STATUS_FAILED:
                $request->markFailed();

                break;
            case PaymentStatus::STATUS_EXPIRED:
                $request->markExpired();

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
