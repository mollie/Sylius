<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Creator;

use BitBag\SyliusMolliePlugin\Creator\MollieMethodsCreatorHelper;
use BitBag\SyliusMolliePlugin\Creator\MollieMethodsCreatorHelperInterface;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MethodsFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayConfigFactoryInterface;
use BitBag\SyliusMolliePlugin\Payments\MethodsInterface;
use Doctrine\ORM\EntityManagerInterface;
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

    function it_creates_methods(
        MethodsFactoryInterface $methodsFactory,
        MethodsInterface $methods,
        MethodCollection $methodCollection,
        GatewayConfigInterface $gatewayConfig,
        \stdClass $class
    ): void {
//        $methodsFactory->createNew()->willReturn($methods);
//        $methodCollection = new MethodCollection(1,$class);
        // todo
    }
}
