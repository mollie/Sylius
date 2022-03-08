<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin;

use BitBag\SyliusMolliePlugin\DependencyInjection\SyliusMessageBusPolyfillPass;
use Sylius\Bundle\CoreBundle\Application\SyliusPluginTrait;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

final class BitBagSyliusMolliePlugin extends Bundle
{
    public const VERSION = '4.0.0-beta.2';

    public const USER_AGENT_TOKEN = 'p5ACCDx8Tbn8vjpr';

    use SyliusPluginTrait;

    public function build(ContainerBuilder $container): void
    {
        parent::build($container);

        $container->addCompilerPass(new SyliusMessageBusPolyfillPass());
    }
}
