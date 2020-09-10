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
use Mollie\Api\Resources\PaymentCollection;
use Mollie\Api\Types\PaymentStatus;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Request\GetStatusInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Mollie\Api\Resources\Payment as PaymentMollieInterface;


final class StatusOrderAction extends BaseApiAwareAction implements ActionInterface, GatewayAwareInterface, ApiAwareInterface
{
    use GatewayAwareTrait;

    /**
     * @param GetStatusInterface $request
     */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        /** @var PaymentInterface $payment */
        $payment = $request->getModel();

        $details = $payment->getDetails();

        if (!isset($details['order_mollie_id'])) {
            $request->markNew();

            return;
        }

        $paymentsMollie = $this->mollieApiClient->payments->page();
        $paymentMollie = $this->getPaymentMollie($paymentsMollie, $details['order_mollie_id']);

        if (true === $this->mollieApiClient->isRefunded($paymentMollie)) {
            $request->markRefunded();

            return;
        }

        switch ($paymentMollie->status) {
            case PaymentStatus::STATUS_PENDING:
            case PaymentStatus::STATUS_OPEN:
                $request->markPending();

                break;
            case PaymentStatus::STATUS_AUTHORIZED:
                $request->markAuthorized();

                break;
            case PaymentStatus::STATUS_PAID:
                $request->markCaptured();

                break;
            case PaymentStatus::STATUS_CANCELED:
                $request->markCanceled();

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

    public function supports($request): bool
    {
        return
            $request instanceof GetStatusInterface &&
            $request->getModel() instanceof PaymentInterface;
    }

    private function getPaymentMollie(PaymentCollection $payments, string $orderId): PaymentMollieInterface
    {
        foreach ($payments as $paymentMollie) {
            return $paymentMollie->orderId === $orderId ? $paymentMollie: null;
        }

        return null;
    }
}
