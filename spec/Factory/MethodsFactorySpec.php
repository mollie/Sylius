<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Factory\MethodsFactory;
use BitBag\SyliusMolliePlugin\Factory\MethodsFactoryInterface;
use BitBag\SyliusMolliePlugin\Payments\Methods;
use BitBag\SyliusMolliePlugin\Payments\MethodsInterface;
use PhpSpec\ObjectBehavior;

final class MethodsFactorySpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(MethodsFactory::class);
    }

    function it_should_implements_methods_factory_interface(): void
    {
        $this->shouldImplement(MethodsFactoryInterface::class);
    }

    function it_creates_new(): void
    {
        $method = $this->createNew();
        $this->createNew()->shouldBeLike($method);
    }
}
