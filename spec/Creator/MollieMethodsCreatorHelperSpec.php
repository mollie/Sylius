<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Creator;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Creator\MollieMethodsCreatorHelper;
use BitBag\SyliusMolliePlugin\Creator\MollieMethodsCreatorHelperInterface;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfig;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MethodsFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayConfigFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use BitBag\SyliusMolliePlugin\Payments\Methods\MethodInterface;
use BitBag\SyliusMolliePlugin\Payments\MethodsInterface;
use Doctrine\ORM\EntityManagerInterface;
use Mollie\Api\Resources\Method;
use Mollie\Api\Resources\MethodCollection;
use PhpSpec\ObjectBehavior;

final class MollieMethodsCreatorHelperSpec extends ObjectBehavior
{
    function let(
        MethodsFactoryInterface $methodsFactory,
        EntityManagerInterface $entityManager,
        MollieGatewayConfigFactoryInterface $factory
    ): void {
        $this->beConstructedWith(
            $methodsFactory,
            $entityManager,
            $factory
        );
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieMethodsCreatorHelper::class);
    }

    function it_should_implement_interface(): void
    {
        $this->shouldImplement(MollieMethodsCreatorHelperInterface::class);
    }

    function it_creates_methods_when_all_mollie_methods_is_empty(
        MethodsFactoryInterface $methodsFactory,
        MethodsInterface $methods,
        MethodInterface $method,
        MethodCollection $methodCollection,
        GatewayConfigInterface $gatewayConfig,
        MollieGatewayConfigInterface $mollieGatewayConfig,
        MollieGatewayConfigFactoryInterface $factory,
        EntityManagerInterface $entityManager
    ): void {
        $methodsFactory->createNew()->willReturn($methods);

        $methodsCollectionArray = [];
        $methodsCollectionArrayIterator = new \ArrayObject($methodsCollectionArray);

        $methodCollection->getIterator()->willReturn($methodsCollectionArrayIterator);

        $methods->getAllEnabled()->willReturn([$method]);
        $factory->create($method,$gatewayConfig,0)->willReturn($mollieGatewayConfig);

        $entityManager->persist($mollieGatewayConfig)->shouldBeCalled();
        $entityManager->flush()->shouldBeCalled();

        $this->createMethods($methodCollection, $gatewayConfig);
    }

    function it_creates_methods_when_all_mollie_methods_unsupported(
        MethodsFactoryInterface $methodsFactory,
        MethodsInterface $methods,
        MethodInterface $method,
        MethodCollection $methodCollection,
        GatewayConfigInterface $gatewayConfig,
        MollieGatewayConfigInterface $mollieGatewayConfig,
        MollieGatewayConfigFactoryInterface $factory,
        EntityManagerInterface $entityManager,
        MollieApiClient $mollieApiClient
    ): void {
        $methodsFactory->createNew()->willReturn($methods);

        $mollieMethod = new Method($mollieApiClient->getWrappedObject());
        $mollieMethod->id = 'inghomepay';
        $methodsCollectionArray = [$mollieMethod];
        $methodsCollectionArrayIterator = new \ArrayObject($methodsCollectionArray);

        $methodCollection->getIterator()->willReturn($methodsCollectionArrayIterator);

        $methods->add($mollieMethod)->shouldNotBeCalled();

        $methods->getAllEnabled()->willReturn([$method]);
        $factory->create($method,$gatewayConfig,0)->willReturn($mollieGatewayConfig);

        $entityManager->persist($mollieGatewayConfig)->shouldBeCalled();
        $entityManager->flush()->shouldBeCalled();

        $this->createMethods($methodCollection, $gatewayConfig);
    }

    function it_creates_methods_when_all_mollie_methods_not_unsupported_and_factory_name_is_not_subscription_and_supported_false_and_initial_true(
        MethodsFactoryInterface $methodsFactory,
        MethodsInterface $methods,
        MethodInterface $method,
        MethodCollection $methodCollection,
        GatewayConfigInterface $gatewayConfig,
        MollieGatewayConfigInterface $mollieGatewayConfig,
        MollieGatewayConfigFactoryInterface $factory,
        EntityManagerInterface $entityManager,
        MollieApiClient $mollieApiClient
    ): void {
        $methodsFactory->createNew()->willReturn($methods);

        $mollieMethod = new Method($mollieApiClient->getWrappedObject());
        $mollieMethod->id = 'bancontact';
        $methodsCollectionArray = [$mollieMethod];
        $methodsCollectionArrayIterator = new \ArrayObject($methodsCollectionArray);

        $gatewayConfig->getFactoryName()->willReturn('not_subscription');
        $methodCollection->getIterator()->willReturn($methodsCollectionArrayIterator);

        $methods->add($mollieMethod)->shouldBeCalled();

        $methods->getAllEnabled()->willReturn([$method]);
        $factory->create($method,$gatewayConfig,0)->willReturn($mollieGatewayConfig);

        $entityManager->persist($mollieGatewayConfig)->shouldBeCalled();
        $entityManager->flush()->shouldBeCalled();

        $this->createMethods($methodCollection, $gatewayConfig);
    }

    function it_creates_methods_when_all_mollie_methods_not_unsupported_and_factory_name_is_not_subscription_and_supported_and_initial_false(
        MethodsFactoryInterface $methodsFactory,
        MethodsInterface $methods,
        MethodInterface $method,
        MethodCollection $methodCollection,
        GatewayConfigInterface $gatewayConfig,
        MollieGatewayConfigInterface $mollieGatewayConfig,
        MollieGatewayConfigFactoryInterface $factory,
        EntityManagerInterface $entityManager,
        MollieApiClient $mollieApiClient
    ): void {
        $methodsFactory->createNew()->willReturn($methods);

        $mollieMethod = new Method($mollieApiClient->getWrappedObject());
        $mollieMethod->id = 'not_inghomepay';
        $methodsCollectionArray = [$mollieMethod];
        $methodsCollectionArrayIterator = new \ArrayObject($methodsCollectionArray);

        $gatewayConfig->getFactoryName()->willReturn('not_subscription');
        $methodCollection->getIterator()->willReturn($methodsCollectionArrayIterator);

        $methods->add($mollieMethod)->shouldBeCalled();

        $methods->getAllEnabled()->willReturn([$method]);
        $factory->create($method,$gatewayConfig,0)->willReturn($mollieGatewayConfig);

        $entityManager->persist($mollieGatewayConfig)->shouldBeCalled();
        $entityManager->flush()->shouldBeCalled();

        $this->createMethods($methodCollection, $gatewayConfig);
    }

    function it_creates_methods_when_all_mollie_methods_not_unsupported_and_factory_name_is_not_subscription_and_supported_true_and_initial_false(
        MethodsFactoryInterface $methodsFactory,
        MethodsInterface $methods,
        MethodInterface $method,
        MethodCollection $methodCollection,
        GatewayConfigInterface $gatewayConfig,
        MollieGatewayConfigInterface $mollieGatewayConfig,
        MollieGatewayConfigFactoryInterface $factory,
        EntityManagerInterface $entityManager,
        MollieApiClient $mollieApiClient
    ): void {
        $methodsFactory->createNew()->willReturn($methods);

        $mollieMethod = new Method($mollieApiClient->getWrappedObject());
        $mollieMethod->id = 'directdebit';
        $methodsCollectionArray = [$mollieMethod];
        $methodsCollectionArrayIterator = new \ArrayObject($methodsCollectionArray);

        $gatewayConfig->getFactoryName()->willReturn('not_subscription');
        $methodCollection->getIterator()->willReturn($methodsCollectionArrayIterator);

        $methods->add($mollieMethod)->shouldBeCalled();

        $methods->getAllEnabled()->willReturn([$method]);
        $factory->create($method,$gatewayConfig,0)->willReturn($mollieGatewayConfig);

        $entityManager->persist($mollieGatewayConfig)->shouldBeCalled();
        $entityManager->flush()->shouldBeCalled();

        $this->createMethods($methodCollection, $gatewayConfig);
    }

    function it_creates_methods_when_all_mollie_methods_not_unsupported_and_factory_name_is_subscription_and_supported_false_and_initial_true(
        MethodsFactoryInterface $methodsFactory,
        MethodsInterface $methods,
        MethodInterface $method,
        MethodCollection $methodCollection,
        GatewayConfigInterface $gatewayConfig,
        MollieGatewayConfigInterface $mollieGatewayConfig,
        MollieGatewayConfigFactoryInterface $factory,
        EntityManagerInterface $entityManager,
        MollieApiClient $mollieApiClient
    ): void {
        $methodsFactory->createNew()->willReturn($methods);

        $mollieMethod = new Method($mollieApiClient->getWrappedObject());
        $mollieMethod->id = 'bancontact';
        $methodsCollectionArray = [$mollieMethod];
        $methodsCollectionArrayIterator = new \ArrayObject($methodsCollectionArray);

        $gatewayConfig->getFactoryName()->willReturn(MollieSubscriptionGatewayFactory::FACTORY_NAME);
        $methodCollection->getIterator()->willReturn($methodsCollectionArrayIterator);

        $methods->add($mollieMethod)->shouldBeCalled();

        $methods->getAllEnabled()->willReturn([$method]);
        $factory->create($method,$gatewayConfig,0)->willReturn($mollieGatewayConfig);

        $entityManager->persist($mollieGatewayConfig)->shouldBeCalled();
        $entityManager->flush()->shouldBeCalled();

        $this->createMethods($methodCollection, $gatewayConfig);
    }

    function it_creates_methods_when_all_mollie_methods_not_unsupported_and_factory_name_is_subscription_and_supported_and_initial_false(
        MethodsFactoryInterface $methodsFactory,
        MethodsInterface $methods,
        MethodInterface $method,
        MethodCollection $methodCollection,
        GatewayConfigInterface $gatewayConfig,
        MollieGatewayConfigInterface $mollieGatewayConfig,
        MollieGatewayConfigFactoryInterface $factory,
        EntityManagerInterface $entityManager,
        MollieApiClient $mollieApiClient
    ): void {
        $methodsFactory->createNew()->willReturn($methods);

        $mollieMethod = new Method($mollieApiClient->getWrappedObject());
        $mollieMethod->id = 'not_inghomepay';
        $methodsCollectionArray = [$mollieMethod];
        $methodsCollectionArrayIterator = new \ArrayObject($methodsCollectionArray);

        $gatewayConfig->getFactoryName()->willReturn(MollieSubscriptionGatewayFactory::FACTORY_NAME);
        $methodCollection->getIterator()->willReturn($methodsCollectionArrayIterator);

        $methods->add($mollieMethod)->shouldNotBeCalled();

        $methods->getAllEnabled()->willReturn([$method]);
        $factory->create($method,$gatewayConfig,0)->willReturn($mollieGatewayConfig);

        $entityManager->persist($mollieGatewayConfig)->shouldBeCalled();
        $entityManager->flush()->shouldBeCalled();

        $this->createMethods($methodCollection, $gatewayConfig);
    }

    function it_creates_methods_when_all_mollie_methods_not_unsupported_and_factory_name_is_subscription_and_supported_true_and_initial_false(
        MethodsFactoryInterface $methodsFactory,
        MethodsInterface $methods,
        MethodInterface $method,
        MethodCollection $methodCollection,
        GatewayConfigInterface $gatewayConfig,
        MollieGatewayConfigInterface $mollieGatewayConfig,
        MollieGatewayConfigFactoryInterface $factory,
        EntityManagerInterface $entityManager,
        MollieApiClient $mollieApiClient
    ): void {
        $methodsFactory->createNew()->willReturn($methods);

        $mollieMethod = new Method($mollieApiClient->getWrappedObject());
        $mollieMethod->id = 'creditcard';
        $methodsCollectionArray = [$mollieMethod];
        $methodsCollectionArrayIterator = new \ArrayObject($methodsCollectionArray);

        $gatewayConfig->getFactoryName()->willReturn(MollieSubscriptionGatewayFactory::FACTORY_NAME);
        $methodCollection->getIterator()->willReturn($methodsCollectionArrayIterator);

        $methods->add($mollieMethod)->shouldBeCalled();

        $methods->getAllEnabled()->willReturn([$method]);
        $factory->create($method,$gatewayConfig,0)->willReturn($mollieGatewayConfig);

        $entityManager->persist($mollieGatewayConfig)->shouldBeCalled();
        $entityManager->flush()->shouldBeCalled();

        $this->createMethods($methodCollection, $gatewayConfig);
    }
}
