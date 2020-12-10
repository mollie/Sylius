<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action\Api;

use BitBag\SyliusMolliePlugin\Entity\SubscriptionInterface;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CancelRecurringSubscription;
use Mollie\Api\Exceptions\ApiException;
use Mollie\Api\Resources\Customer;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;

final class CancelRecurringSubscriptionAction extends BaseApiAwareAction implements ActionInterface, GatewayAwareInterface, ApiAwareInterface
{
    use GatewayAwareTrait;

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    public function __construct(MollieLoggerActionInterface $loggerAction)
    {
        $this->loggerAction = $loggerAction;
    }

    /** @param CancelRecurringSubscription $request */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        /** @var SubscriptionInterface $subscription */
        $subscription = $request->getModel();

        try {
            /** @var Customer $customer */
            $customer = $this->mollieApiClient->customers->get($subscription->getCustomerId());
        } catch (\Exception $e) {
            $this->loggerAction->addNegativeLog(sprintf('Error with get customer in recurring subscription with: %s', $e->getMessage()));

            throw new ApiException('Error with get customer in recurring subscription with ' . $e->getMessage());
        }

        $this->loggerAction->addLog(sprintf('Cancel recurring subscription with id:  %s', $subscription->getSubscriptionId()));

        $customer->cancelSubscription($subscription->getSubscriptionId());
    }

    public function supports($request): bool
    {
        return
            $request instanceof CancelRecurringSubscription &&
            $request->getModel() instanceof SubscriptionInterface
            ;
    }
}
