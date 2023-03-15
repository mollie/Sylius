<?php


declare(strict_types=1);

namespace spec\SyliusMolliePlugin\Factory;

use SyliusMolliePlugin\Factory\MethodsFactory;
use SyliusMolliePlugin\Factory\MethodsFactoryInterface;
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

    function it_creates_new_method(): void
    {
        $method = $this->createNew();
        $this->createNew()->shouldBeLike($method);
    }
}
