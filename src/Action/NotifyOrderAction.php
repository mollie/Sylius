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
use BitBag\SyliusMolliePlugin\Repository\SubscriptionRepositoryInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Reply\HttpResponse;
use Payum\Core\Request\GetHttpRequest;
use Payum\Core\Request\Notify;

final class NotifyOrderAction extends BaseApiAwareAction implements NotifyOrderActionInterface
{
    use GatewayAwareTrait;

    /** @var GetHttpRequest */
    private $getHttpRequest;

    /** @var SubscriptionRepositoryInterface */
    private $subscriptionRepository;

    public function __construct(GetHttpRequest $getHttpRequest, SubscriptionRepositoryInterface $subscriptionRepository)
    {
        $this->getHttpRequest = $getHttpRequest;
        $this->subscriptionRepository = $subscriptionRepository;
    }

    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $details = ArrayObject::ensureArrayObject($request->getModel());

        $this->gateway->execute($this->getHttpRequest);

        if (true === isset($details['order_mollie_id'])) {
            $order = $this->mollieApiClient->orders->get($this->getHttpRequest->request['id']);

            if ($details['metadata']['order_id'] === filter_var($order->metadata->order_id, FILTER_VALIDATE_INT)) {
                $details['order_mollie_id'] = $this->getHttpRequest->request['id'];
            }

            throw new HttpResponse('OK', 200);
        }
    }

    public function supports($request): bool
    {
        return
            $request instanceof Notify &&
            $request->getModel() instanceof \ArrayAccess;
    }
}
