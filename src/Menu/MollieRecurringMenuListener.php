<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Menu;

use Sylius\Bundle\UiBundle\Menu\Event\MenuBuilderEvent;

final class MollieRecurringMenuListener
{
    public function buildMenu(MenuBuilderEvent $menuBuilderEvent): void
    {
        $menu = $menuBuilderEvent->getMenu();
        $menuItem =
            $menu
                ->getChild('mollie');

        if (null === $menuItem) {
            return;
        }

        $menuItem
            ->addChild('mollie_subscriptions', [
                'route' => 'bitbag_sylius_mollie_plugin_admin_mollie_subscription_index',
            ])
            ->setLabel('bitbag_sylius_mollie_plugin.ui.mollie_subscriptions')
            ->setLabelAttribute('icon', 'cart')
        ;
    }
}
