<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.io and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Menu;

use Sylius\Bundle\UiBundle\Menu\Event\MenuBuilderEvent;

final class MollieMenuListener
{
    public function buildMenu(MenuBuilderEvent $menuBuilderEvent): void
    {
        $menu = $menuBuilderEvent->getMenu();
        $cmsRootMenuItem =
            $menu
                ->addChild('mollie')
                ->setLabel('bitbag_sylius_mollie_plugin.ui.mollie_gateway_label');

        $cmsRootMenuItem
            ->addChild('mollie_logger', [
                'route' => 'bitbag_sylius_mollie_plugin_admin_mollie_logger_index',
            ])
            ->setLabel('bitbag_sylius_mollie_plugin.ui.mollie_loggers')
            ->setLabelAttribute('icon', 'tags');

        $cmsRootMenuItem
            ->addChild('mollie_product_type', [
                'route' => 'bitbag_sylius_mollie_plugin_admin_product_type_index',
            ])
            ->setLabel('bitbag_sylius_mollie_plugin.ui.mollie_product_type')
            ->setLabelAttribute('icon', 'sitemap');
    }
}
