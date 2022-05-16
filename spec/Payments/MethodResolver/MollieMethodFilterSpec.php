<?php

/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Payments\MethodResolver;

use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use BitBag\SyliusMolliePlugin\Payments\MethodResolver\MollieMethodFilter;
use BitBag\SyliusMolliePlugin\Payments\MethodResolver\MollieMethodFilterInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Core\Model\PaymentMethodInterface;

final class MollieMethodFilterSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieMethodFilter::class);
    }

    function it_implements_interface(): void
    {
        $this->shouldImplement(MollieMethodFilterInterface::class);
    }

    function it_returns_non_recurring_method(
        PaymentMethodInterface $method1,
        PaymentMethodInterface $method2,
        GatewayConfigInterface $config1,
        GatewayConfigInterface $config2
    ): void {
        $paymentMethods = [
            $method1,
            $method2
        ];
        $method1->getGatewayConfig()->willReturn($config1);
        $config1->getFactoryName()->willReturn(MollieSubscriptionGatewayFactory::FACTORY_NAME);

        $method2->getGatewayConfig()->willReturn($config2);
        $config2->getFactoryName()->willReturn('not_mollie_subscription');

        $this->nonRecurringFilter($paymentMethods)->shouldReturn([$method2]);
    }

    function it_returns_recurring_method(
        PaymentMethodInterface $method1,
        PaymentMethodInterface $method2,
        GatewayConfigInterface $config1,
        GatewayConfigInterface $config2
    ): void {
        $paymentMethods = [
            $method1,
            $method2
        ];
        $method1->getGatewayConfig()->willReturn($config1);
        $config1->getFactoryName()->willReturn(MollieGatewayFactory::FACTORY_NAME);

        $method2->getGatewayConfig()->willReturn($config2);
        $config2->getFactoryName()->willReturn('mollie_subscription');

        $this->recurringFilter($paymentMethods)->shouldReturn([$method2]);
    }
}
