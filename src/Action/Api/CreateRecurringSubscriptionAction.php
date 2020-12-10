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
use BitBag\SyliusMolliePlugin\Request\Api\CreateRecurringSubscription;
use BitBag\SyliusMolliePlugin\Request\StateMachine\StatusRecurringSubscription;
use Doctrine\ORM\EntityManagerInterface;
use Mollie\Api\Exceptions\ApiException;
use Mollie\Api\Resources\Customer;
use Mollie\Api\Resources\Subscription;
use Mollie\Api\Types\MandateMethod;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use SM\Factory\FactoryInterface as SateMachineFactoryInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Repository\OrderRepositoryInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class CreateRecurringSubscriptionAction extends BaseApiAwareAction implements ActionInterface, GatewayAwareInterface, ApiAwareInterface
{
    use GatewayAwareTrait;

    /** @var FactoryInterface */
    private $subscriptionFactory;

    /** @var EntityManagerInterface */
    private $subscriptionManager;

    /** @var SateMachineFactoryInterface */
    private $subscriptionSateMachineFactory;

    /** @var OrderRepositoryInterface */
    private $orderRepository;

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    public function __construct(
        FactoryInterface $subscriptionFactory,
        EntityManagerInterface $subscriptionManager,
        SateMachineFactoryInterface $subscriptionSateMachineFactory,
        OrderRepositoryInterface $orderRepository,
        MollieLoggerActionInterface $loggerAction
    ) {
        $this->subscriptionFactory = $subscriptionFactory;
        $this->subscriptionManager = $subscriptionManager;
        $this->subscriptionSateMachineFactory = $subscriptionSateMachineFactory;
        $this->orderRepository = $orderRepository;
        $this->loggerAction = $loggerAction;
    }

    /** @param CreateRecurringSubscription $request */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $model = ArrayObject::ensureArrayObject($request->getModel());

        if (true === isset($model['subscription_id'])) {
            return;
        }

        try {
            /** @var Customer $customer */
            $customer = $this->mollieApiClient->customers->get($model['customer_mollie_id']);
        } catch (\Exception $e) {
            $this->loggerAction->addNegativeLog(sprintf('Error with get customer from mollie with: %s', $e->getMessage()));

            throw new ApiException(sprintf('Error with get customer from mollie with: %s', $e->getMessage()));
        }

        /** @var Subscription $subscriptionApiResult */
        $subscriptionApiResult = $customer->createSubscription([
            'amount' => $model['amount'],
            'interval' => $model['interval'],
            'description' => $model['description'],
            'method' => MandateMethod::DIRECTDEBIT,
            'webhookUrl' => $model['webhookUrl'],
        ]);

        /** @var SubscriptionInterface $subscription */
        $subscription = $this->subscriptionFactory->createNew();

        /** @var OrderInterface $order */
        $order = $this->orderRepository->find($model['metadata']['order_id']);

        $subscription->setSubscriptionId($subscriptionApiResult->id);
        $subscription->setCustomerId($model['customer_mollie_id']);
        $subscription->setOrder($order);

        $this->subscriptionManager->persist($subscription);

        $model['subscription_mollie_id'] = $subscriptionApiResult->id;

        $this->loggerAction->addLog(sprintf('Create requrring subscription with id: %s', $subscriptionApiResult->id));

        $this->gateway->execute(new StatusRecurringSubscription($subscription));
    }

    public function supports($request): bool
    {
        return
            $request instanceof CreateRecurringSubscription &&
            $request->getModel() instanceof \ArrayAccess
            ;
    }
}
