<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\DependencyInjection;

use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;

final class SyliusMessageBusPolyfillPass implements CompilerPassInterface
{
    public const ID_FALLBACK = [
        'sylius.command_bus' => 'sylius_default.bus',
    ];

    public const COMMAND_BUS_ALIAS = 'bitbag.sylius_mollie_plugin.command_bus';

    private function setupDefaultCommandBus(array $buses, ContainerBuilder $container): void
    {
        $targetBusName = in_array('sylius.command_bus', $buses, true) ? 'sylius.command_bus' : 'sylius_default.bus';
        $container->setAlias(
            self::COMMAND_BUS_ALIAS,
            $targetBusName
        );
    }

    public function process(ContainerBuilder $container): void
    {
        $buses = array_keys($container->findTaggedServiceIds('messenger.bus'));
        $this->setupDefaultCommandBus($buses, $container);
    }
}
