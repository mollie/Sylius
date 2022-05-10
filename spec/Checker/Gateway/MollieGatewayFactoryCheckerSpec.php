<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Checker\Gateway;

use BitBag\SyliusMolliePlugin\Checker\Gateway\MollieGatewayFactoryChecker;
use BitBag\SyliusMolliePlugin\Checker\Gateway\MollieGatewayFactoryCheckerInterface;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use PhpSpec\ObjectBehavior;

final class MollieGatewayFactoryCheckerSpec extends ObjectBehavior
{
    public function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieGatewayFactoryChecker::class);
        $this->shouldImplement(MollieGatewayFactoryCheckerInterface::class);
    }

    public function it_returns_true_if_gateway_name_is_mollie(
        GatewayConfigInterface $gateway
    ): void {
        $mollieGateways = [
            MollieGatewayFactory::FACTORY_NAME,
            MollieSubscriptionGatewayFactory::FACTORY_NAME,
        ];

        $gateway->getFactoryName()
            ->willReturn('mollie');

        $this->isMollieGateway($gateway)
            ->shouldReturn(true);
    }

    public function it_returns_true_if_gateway_name_is_mollie_subscription(
        GatewayConfigInterface $gateway
    ): void {
        $mollieGateways = [
            MollieGatewayFactory::FACTORY_NAME,
            MollieSubscriptionGatewayFactory::FACTORY_NAME,
        ];

        $gateway->getFactoryName()
            ->willReturn('mollie_subscription');

        $this->isMollieGateway($gateway)
            ->shouldReturn(true);
    }

    public function it_returns_false_if_gateway_name_is_not_mollie(
        GatewayConfigInterface $gateway
    ): void {
        $mollieGateways = [
            MollieGatewayFactory::FACTORY_NAME,
            MollieSubscriptionGatewayFactory::FACTORY_NAME,
        ];

        $gateway->getFactoryName()
            ->willReturn('random_factory_name');

        $this->isMollieGateway($gateway)
            ->shouldReturn(false);
    }
}
