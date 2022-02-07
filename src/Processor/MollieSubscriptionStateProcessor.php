<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Processor;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Parser\Response\GuzzleNegativeResponseParserInterface;
use BitBag\SyliusMolliePlugin\Resolver\MollieApiClientKeyResolverInterface;
use Mollie\Api\Exceptions\ApiException;
use Mollie\Api\Resources\Subscription;
use Mollie\Api\Types\SubscriptionStatus;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

final class MollieSubscriptionStateProcessor implements MollieSubscriptionStateProcessorInterface
{
    private MollieApiClientKeyResolverInterface $mollieApiClientKeyResolver;
    private MollieLoggerActionInterface $loggerAction;
    private GuzzleNegativeResponseParserInterface $guzzleNegativeResponseParser;
    private SessionInterface $session;

    public function __construct(
        MollieApiClientKeyResolverInterface $mollieApiClientKeyResolver,
        MollieLoggerActionInterface $loggerAction,
        GuzzleNegativeResponseParserInterface $guzzleNegativeResponseParser,
        SessionInterface $session
    )
    {
        $this->mollieApiClientKeyResolver = $mollieApiClientKeyResolver;
        $this->loggerAction = $loggerAction;
        $this->guzzleNegativeResponseParser = $guzzleNegativeResponseParser;
        $this->session = $session;
    }

    public function processCancel(MollieSubscriptionInterface $mollieSubscription): void
    {
        try {
            $subscription = $this->resolveSubscription($mollieSubscription);
            $client = $this->mollieApiClientKeyResolver->getClientWithKey($mollieSubscription->getFirstOrder());
            $client->subscriptions->cancelForId($subscription->customerId, $subscription->id);
        } catch (ApiException $exception) {
            $message = $this->guzzleNegativeResponseParser->parse($exception);
            $this->loggerAction->addNegativeLog(
                sprintf('Error with subscription cancel: %s', $exception->getMessage())
            );

            if (empty($message)) {
                throw new ApiException(sprintf('Error with subscription cancel: %s', $exception->getMessage()));
            }

            $this->session->getFlashBag()->add('info', $message)
            ;
        }
    }

    private function resolveSubscription(MollieSubscriptionInterface $subscription): Subscription
    {
        $mollieSubscriptionConfiguration = $subscription->getSubscriptionConfiguration();
        $client = $this->mollieApiClientKeyResolver->getClientWithKey($subscription->getFirstOrder());
        $customer = $client->customers->get($mollieSubscriptionConfiguration->getCustomerId());

        return $client->subscriptions->getFor(
            $customer,
            $mollieSubscriptionConfiguration->getSubscriptionId()
        );
    }
}
