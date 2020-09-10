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
use Mollie\Api\Types\OrderStatus;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Request\GetStatusInterface;
use Sylius\Component\Core\Model\PaymentInterface;

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
        $orderData = $this->mollieApiClient->orders->get($details['order_mollie_id']);

        if (true === $this->mollieApiClient->isRefunded($orderData)) {
            $request->markRefunded();

            return;
        }

        switch ($orderData->status) {
            case OrderStatus::STATUS_CREATED:
                $request->markPending();

                break;
            case OrderStatus::STATUS_COMPLETED:
            case OrderStatus::STATUS_SHIPPING:
            case OrderStatus::STATUS_PAID:
                $request->markCaptured();

                break;
            case OrderStatus::STATUS_AUTHORIZED:
                $request->markAuthorized();

                break;
            case OrderStatus::STATUS_CANCELED:
                $request->markCanceled();

                break;
            case OrderStatus::STATUS_EXPIRED:
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
}
