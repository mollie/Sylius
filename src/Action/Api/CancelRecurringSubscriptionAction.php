<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action\Api;

use BitBag\SyliusMolliePlugin\Entity\SubscriptionInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CancelRecurringSubscription;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;

final class CancelRecurringSubscriptionAction extends BaseApiAwareAction implements ActionInterface, GatewayAwareInterface, ApiAwareInterface
{
    use GatewayAwareTrait;

    /**
     * {@inheritdoc}
     *
     * @param CancelRecurringSubscription $request
     */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        /** @var SubscriptionInterface $subscription */
        $subscription = $request->getModel();

        $this->mollieApiClient
            ->customers_subscriptions->withParentId($subscription->getCustomerId())
            ->cancel($subscription->getSubscriptionId())
        ;
    }

    /**
     * {@inheritdoc}
     */
    public function supports($request): bool
    {
        return
            $request instanceof CancelRecurringSubscription &&
            $request->getModel() instanceof SubscriptionInterface
        ;
    }
}
