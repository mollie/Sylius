<?php

/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Creator\MollieMethodsCreatorInterface;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Resolver\MollieMethodsResolver;
use BitBag\SyliusMolliePlugin\Resolver\MollieMethodsResolverInterface;
use Mollie\Api\Endpoints\MethodEndpoint;
use Mollie\Api\Resources\MethodCollection;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class MollieMethodsResolverSpec extends ObjectBehavior
{
    function let(
        MollieLoggerActionInterface $loggerAction,
        MollieApiClient $mollieApiClient,
        RepositoryInterface $gatewayConfigRepository,
        MollieMethodsCreatorInterface $helper
    ):void {
        $this->beConstructedWith(
            $loggerAction,
            $mollieApiClient,
            $gatewayConfigRepository,
            $helper
        );
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieMethodsResolver::class);
    }

    function it_should_implements_mollie_methods_creator_interface(): void
    {
        $this->shouldImplement(MollieMethodsResolverInterface::class);
    }

    function it_creates_mollie_methods_for_gateway_subscription(
        GatewayConfigInterface $gateway,
        MollieApiClient $mollieApiClient,
        MollieApiClient $client,
        MethodEndpoint $methodEndpoint,
        MollieMethodsCreatorInterface $helper,
        MollieLoggerActionInterface $loggerAction,
        \stdClass $class
    ): void {
        $gateway->getConfig()->willReturn([
            'environment' => 'test',
            'api_key_test' => 'test_key123',
            'times' => '5',
            'interval' => '12 months'
        ]);
        $mollieApiClient->setApiKey('test_key123')->willReturn($client);
        $client->setIsRecurringSubscription(true);
        $gateway->getFactoryName()->willReturn(MollieSubscriptionGatewayFactory::FACTORY_NAME);
        $client->methods = $methodEndpoint;
        $methodCollection = new MethodCollection(5,$class);
        $recurringCollection = ['test2'];
        $methodEndpoint->allActive(MollieMethodsResolverInterface::PARAMETERS)
            ->willReturn($methodCollection);
        $methodEndpoint->allActive(MollieMethodsResolverInterface::PARAMETERS_RECURRING)->willReturn($recurringCollection);

        $helper->createMethods($methodCollection, $gateway)->shouldBeCalled();
        $loggerAction->addLog(sprintf('Downloaded all methods from mollie API'))->shouldBeCalled();

        $this->createForGateway($gateway);
    }

    function it_creates_mollie_methods_for_gateway_non_subscription(
        GatewayConfigInterface $gateway,
        MollieApiClient $mollieApiClient,
        MollieApiClient $client,
        MethodEndpoint $methodEndpoint,
        MollieMethodsResolverInterface $helper,
        MollieLoggerActionInterface $loggerAction,
        \stdClass $class
    ): void {
        $gateway->getConfig()->willReturn([
            'environment' => 'test',
            'api_key_test' => 'test_key123',
            'times' => '5',
            'interval' => '12 months'
        ]);
        $mollieApiClient->setApiKey('test_key123')->willReturn($client);
        $client->setIsRecurringSubscription(true);
        $gateway->getFactoryName()->willReturn(MollieGatewayFactory::FACTORY_NAME);
        $client->methods = $methodEndpoint;
        $methodCollection = new MethodCollection(5,$class);
        $methodEndpoint->allActive(MollieMethodsResolverInterface::PARAMETERS)
            ->willReturn($methodCollection);

        $helper->createMethods($methodCollection, $gateway)->shouldBeCalled();
        $loggerAction->addLog(sprintf('Downloaded all methods from mollie API'))->shouldBeCalled();

        $this->createForGateway($gateway);
    }

    function it_creates_mollie_methods_for_gateway_error(
        GatewayConfigInterface $gateway,
        MollieApiClient $mollieApiClient,
        MollieApiClient $client,
        MollieLoggerActionInterface $loggerAction
    ): void {
        $gateway->getConfig()->willReturn([
            'environment' => 'test',
            'api_key_test' => 'test_key123',
            'times' => '5',
            'interval' => '12 months'
        ]);
        $mollieApiClient->setApiKey('test_key123')->willReturn($client);
        $client->setIsRecurringSubscription(true);
        $gateway->getFactoryName()->willReturn('not_mollie_for_sure');
        $gateway->getGatewayName()->willReturn('not_mollie');

        $loggerAction->addLog(sprintf('Unable to download methods for "%s"', 'not_mollie'))
            ->shouldBeCalled();

        $this->createForGateway($gateway);
    }
}
