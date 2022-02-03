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
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use Doctrine\ORM\EntityManagerInterface;
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
        $this->shouldBeAnInstanceOf(MollieMethodsCreator::class);
    }

    function it_should_implements_mollie_methods_creator_interface(): void
    {
        $this->shouldImplement(MollieMethodsCreatorInterface::class);
    }

    function it_creates(
        GatewayConfigInterface $gateway1,
        GatewayConfigInterface $gateway2,
        RepositoryInterface $gatewayRepository,
        MollieApiClient $mollieApiClient
    ): void {

        $gateways = [
            $gateway1,
            $gateway2
        ];

        $gateway1->getConfig()->willReturn([
            'environment' => 'test',
            'api_key_test' => 1234,
            'times' => 5,
            'interval' => 60
        ]);

        $mollieApiClient->setApiKey('api_key_test');
        $mollieApiClient->setIsRecurringSubscription(true);

        foreach($gateways as $gateway){
            $this->createForGateway($gateway);
        }
        $this->create();
    }
}
