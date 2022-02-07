<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action\Api;

use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Parser\Response\GuzzleNegativeResponseParserInterface;
use BitBag\SyliusMolliePlugin\Processor\SubscriptionProcessorInterface;
use BitBag\SyliusMolliePlugin\Repository\MollieSubscriptionRepositoryInterface;
use BitBag\SyliusMolliePlugin\Request\Api\ConfigureNextOrder;
use BitBag\SyliusMolliePlugin\Request\StateMachine\StatusRecurringSubscription;
use Mollie\Api\Exceptions\ApiException;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;

final class ConfigureNextOrderAction extends BaseApiAwareAction implements ActionInterface, ApiAwareInterface, GatewayAwareInterface
{
    use GatewayAwareTrait;

    private SubscriptionProcessorInterface $subscriptionProcessor;
    private MollieLoggerActionInterface $loggerAction;
    private GuzzleNegativeResponseParserInterface $guzzleNegativeResponseParser;
    private MollieSubscriptionRepositoryInterface $subscriptionRepository;

    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);
        $model = ArrayObject::ensureArrayObject($request->getModel());

        if ('recurring' !== $model['metadata']['sequenceType']) {
            return;
        }

        try {
            $mollieSubscription = $this->mollieApiClient->subscriptions->getForId(
                $model['customerId'],
                $model['subscriptionId']
            );
        } catch (ApiException $e) {
            $message = sprintf('Error with create next order, unable to fetch subscription with: %s', $e->getMessage());
            $this->loggerAction->addNegativeLog($message);

            throw new ApiException($message);
        }

        $subscription = $this->subscriptionRepository->findOneBySubscriptionId($mollieSubscription->id);

        if (null === $subscription) {
            return;
        }

        $this->subscriptionProcessor->processNextSubscriptionPayment($subscription);
        $lastPayment = $subscription->getLastPayment();
        $lastPayment->setDetails($model->getArrayCopy());

        $this->gateway->execute(new StatusRecurringSubscription($subscription));
    }

    public function supports($request): bool
    {
        return
            $request instanceof ConfigureNextOrder &&
            $request->getModel() instanceof \ArrayAccess;
    }
}
