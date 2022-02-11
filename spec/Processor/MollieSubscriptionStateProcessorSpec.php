<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Processor;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionConfigurationInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Parser\Response\GuzzleNegativeResponseParserInterface;
use BitBag\SyliusMolliePlugin\Processor\MollieSubscriptionStateProcessor;
use BitBag\SyliusMolliePlugin\Processor\MollieSubscriptionStateProcessorInterface;
use BitBag\SyliusMolliePlugin\Resolver\MollieApiClientKeyResolverInterface;
use Mollie\Api\Endpoints\CustomerEndpoint;
use Mollie\Api\Endpoints\SubscriptionEndpoint;
use Mollie\Api\Exceptions\ApiException;
use Mollie\Api\Resources\Customer;
use Mollie\Api\Resources\Subscription;
use PhpSpec\ObjectBehavior;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

final class MollieSubscriptionStateProcessorSpec extends ObjectBehavior
{
    function let(
        MollieApiClientKeyResolverInterface $mollieApiClientKeyResolver,
        MollieLoggerActionInterface $loggerAction,
        GuzzleNegativeResponseParserInterface $guzzleNegativeResponseParser,
        SessionInterface $session
    ): void
    {
        $this->beConstructedWith(
            $mollieApiClientKeyResolver,
            $loggerAction,
            $guzzleNegativeResponseParser,
            $session
        );
    }
    function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieSubscriptionStateProcessor::class);
    }

    function it_should_implements_interface(): void
    {
        $this->shouldImplement(MollieSubscriptionStateProcessorInterface::class);
    }

    function it_successful_process_cancel(
        MollieSubscriptionInterface $subscription,
        Subscription $returnedSubscription,
        MollieSubscriptionConfigurationInterface $configuration,
        MollieApiClientKeyResolverInterface $mollieApiClientKeyResolver,
        OrderInterface $order,
        MollieApiClient $client,
        CustomerEndpoint $customerEndpoint,
        SubscriptionEndpoint $subscriptionEndpoint,
        Customer $customer
    ): void {
        $subscription->getSubscriptionConfiguration()->willReturn($configuration);
        $subscription->getFirstOrder()->willReturn($order);
        $mollieApiClientKeyResolver->getClientWithKey($order)->willReturn($client);
        $client->customers = $customerEndpoint;
        $configuration->getCustomerId()->willReturn(3);
        $configuration->getSubscriptionId()->willReturn(4);
        $customerEndpoint->get(3)->willReturn($customer);
        $client->subscriptions = $subscriptionEndpoint;

        $subscriptionEndpoint->getFor(
            $customer,
            4
        )->willReturn($returnedSubscription);

        $returnedSubscription->customerId = '3';
        $returnedSubscription->id = '4';
        $mollieApiClientKeyResolver->getClientWithKey($order)->willReturn($client);

        $this->processCancel($subscription);

        $subscriptionEndpoint->cancelForId(3,4)->shouldBeCalled();
    }

}
