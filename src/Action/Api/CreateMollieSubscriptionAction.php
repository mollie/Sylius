<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action\Api;

use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionFactoryInterface;
use BitBag\SyliusMolliePlugin\Order\SubscriptionOrderClonerInterface;
use BitBag\SyliusMolliePlugin\Repository\MollieSubscriptionRepositoryInterface;
use BitBag\SyliusMolliePlugin\Repository\OrderRepositoryInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CreateMollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Request\StateMachine\StatusRecurringSubscription;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Request\GetCurrency;
use Payum\Core\Security\GenericTokenFactoryAwareInterface;
use Payum\Core\Security\GenericTokenFactoryInterface;

final class CreateMollieSubscriptionAction extends BaseApiAwareAction implements ActionInterface, ApiAwareInterface, GatewayAwareInterface, GenericTokenFactoryAwareInterface
{
    use GatewayAwareTrait;

    private ?GenericTokenFactoryInterface $tokenFactory;

    public function setGenericTokenFactory(GenericTokenFactoryInterface $genericTokenFactory = null): void
    {
        $this->tokenFactory = $genericTokenFactory;
    }

    private MollieSubscriptionRepositoryInterface $subscriptionRepository;
    private MollieSubscriptionFactoryInterface $subscriptionFactory;
    private OrderRepositoryInterface $orderRepository;
    private SubscriptionOrderClonerInterface $orderCloner;

    public function __construct(
        MollieSubscriptionRepositoryInterface $subscriptionRepository,
        MollieSubscriptionFactoryInterface $subscriptionFactory,
        OrderRepositoryInterface $orderRepository,
        SubscriptionOrderClonerInterface $orderCloner
    )
    {
        $this->subscriptionRepository = $subscriptionRepository;
        $this->subscriptionFactory = $subscriptionFactory;
        $this->orderRepository = $orderRepository;
        $this->orderCloner = $orderCloner;
    }

    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);
        $model = ArrayObject::ensureArrayObject($request->getModel());

        if (null === $model['metadata']['order_id'] ?? null || null === $model['payment_mollie_id'] ?? null) {
            return;
        }

        $subscriptions = $this->subscriptionRepository->findByOrderId($model['metadata']['order_id']);
        $customer = $this->mollieApiClient->customers->get($model['customerId']);
        $payment = $this->mollieApiClient->payments->get($model['payment_mollie_id']);

        foreach ($subscriptions as $subscription) {
            $configuration = $subscription->getSubscriptionConfiguration();

            if (null === $configuration->getSubscriptionId()) {
                $order = $this->orderCloner->clone(
                    $subscription,
                    $subscription->getFirstOrder(),
                    $subscription->getOrderItem()
                );
                $notifyToken = $this->tokenFactory->createNotifyToken($model['metadata']['gateway']);
                $this->gateway->execute($currency = new GetCurrency('EUR'));
                $divisor = 10 ** $currency->exp;
                $amount = number_format(abs($order->getTotal() / $divisor), 2, '.', '');

                $mollieSubscription = $customer->createSubscription([
                    "amount" => [
                        "currency" => "$currency->code",
                        "value" => "$amount",
                    ],
                    "times" => $configuration->getNumberOfRepetitions(),
                    "interval" => $configuration->getInterval(),
                    "mandateId" => $payment->mandateId,
                    "description" => sprintf(
                        '%s - %s',
                        $subscription->getFirstOrder()->getNumber(),
                        str_pad((string)$subscription->getId(), 9, '0', STR_PAD_LEFT)
                    ),
                    "webhookUrl" => $notifyToken->getTargetUrl(),
                ]);

                $configuration->setSubscriptionId($mollieSubscription->id);
                $configuration->setMandateId($payment->mandateId);

                $this->subscriptionRepository->add($subscription);
            }

            $this->gateway->execute(new StatusRecurringSubscription($subscription));
        }
    }

    public function supports($request): bool
    {
        return
            $request instanceof CreateMollieSubscriptionInterface &&
            $request->getModel() instanceof \ArrayAccess;
    }
}
