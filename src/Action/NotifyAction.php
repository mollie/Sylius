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
use BitBag\SyliusMolliePlugin\Entity\SubscriptionInterface;
use BitBag\SyliusMolliePlugin\Repository\SubscriptionRepositoryInterface;
use BitBag\SyliusMolliePlugin\Request\StateMachine\StatusRecurringSubscription;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Reply\HttpResponse;
use Payum\Core\Request\GetHttpRequest;
use Payum\Core\Request\Notify;

final class NotifyAction extends BaseApiAwareAction implements ActionInterface, ApiAwareInterface, GatewayAwareInterface
{
    use GatewayAwareTrait;

    /**
     * @var GetHttpRequest
     */
    private $getHttpRequest;

    /**
     * @var SubscriptionRepositoryInterface
     */
    private $subscriptionRepository;

    /**
     * @param GetHttpRequest $getHttpRequest
     * @param SubscriptionRepositoryInterface $subscriptionRepository
     */
    public function __construct(GetHttpRequest $getHttpRequest, SubscriptionRepositoryInterface $subscriptionRepository)
    {
        $this->getHttpRequest = $getHttpRequest;
        $this->subscriptionRepository = $subscriptionRepository;
    }

    /**
     * {@inheritdoc}
     *
     * @param Notify $request
     */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $details = ArrayObject::ensureArrayObject($request->getModel());

        $this->gateway->execute($this->getHttpRequest);

        if (true === isset($details['payment_mollie_id'])) {
            $payment = $this->mollieApiClient->payments->get($this->getHttpRequest->request['id']);

            if ($details['metadata']['order_id'] === filter_var($payment->metadata->order_id, FILTER_VALIDATE_INT)) {
                $details['payment_mollie_id'] = $this->getHttpRequest->request['id'];
            }

            throw new HttpResponse('OK', 200);
        }

        if (true === isset($details['subscription_id'])) {
            /** @var SubscriptionInterface $subscription */
            $subscription = $this->subscriptionRepository->findOneByOrderId($details['metadata']['order_id']);

            $this->gateway->execute(new StatusRecurringSubscription($subscription));

            throw new HttpResponse('OK', 200);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function supports($request): bool
    {
        return
            $request instanceof Notify &&
            $request->getModel() instanceof \ArrayAccess
        ;
    }
}
