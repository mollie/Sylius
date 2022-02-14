<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Creator;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Creator\MollieMethodsCreator;
use BitBag\SyliusMolliePlugin\Creator\MollieMethodsCreatorInterface;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MethodsFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayConfigFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use Doctrine\ORM\EntityManagerInterface;
use Mollie\Api\Endpoints\MethodEndpoint;
use Mollie\Api\Resources\MethodCollection;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class MollieMethodsCreatorSpec extends ObjectBehavior
{
    function let(
        MethodsFactoryInterface $methodsFactory,
        EntityManagerInterface $entityManager,
        MollieLoggerActionInterface $loggerAction,
        MollieApiClient $mollieApiClient,
        RepositoryInterface $gatewayConfigRepository,
        MollieGatewayConfigFactoryInterface $factory
    ):void {
        $this->beConstructedWith(
            $methodsFactory,
            $entityManager,
            $loggerAction,
            $mollieApiClient,
            $gatewayConfigRepository,
            $factory
        );
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieMethodsCreator::class);
    }

    function it_should_implements_mollie_methods_creator_interface(): void
    {
        $this->shouldImplement(MollieMethodsCreatorInterface::class);
    }

    function it_creates(
        GatewayConfigInterface $gateways,
        GatewayConfigInterface $gateway1,
        GatewayConfigInterface $gateway2,
        RepositoryInterface $gatewayConfigRepository,
        MollieApiClient $mollieApiClient,
        MollieApiClient $client,
        MollieLoggerActionInterface $loggerAction
    ): void {

        $gatewayConfigRepository->findBy(['factoryName' => [
            MollieGatewayFactory::FACTORY_NAME,
        ]])->willReturn([$gateways]);

        $gateways = [
            $gateway1,
            $gateway2,
        ];
        $loggerAction->addLog('Unable to download methods for not_mollie_name')->shouldNotBeCalled();
        $this->create();
        $this->createForGateway($gateways[0])->shouldBeCalled();
    }

    function it_creates_for_gateway(
        GatewayConfigInterface $gateway,
        MollieApiClient $mollieApiClient,
        MollieApiClient $client,
        MethodEndpoint $methodEndpoint,
        MethodCollection $methodCollection,
        MethodCollection $recurringCollection
    ): void {
        $gateway->getConfig()->willReturn([
            'environment' => 'test',
            'api_key_test' => 'test_key123',
            'times' => '5',
            'interval' => '12 months'
        ]);
        $environment = 'api_key_test';
        $recurring = true;
        $mollieApiClient->setApiKey('test_key123')->willReturn($client);
        $client->setIsRecurringSubscription($recurring);
        $gateway->getFactoryName()->willReturn(MollieSubscriptionGatewayFactory::FACTORY_NAME);
        $client->methods = $methodEndpoint;
        $methodEndpoint->allActive(MollieMethodsCreatorInterface::PARAMETERS)->willReturn($methodCollection);
        $methodEndpoint->allActive(MollieMethodsCreatorInterface::PARAMETERS_RECURRING)->willReturn($recurringCollection);
//        $methodCollection->append($recurringCollection[0])->shouldBeCalled();
        $this->createForGateway($gateway);
    }

}
