<?php
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

        $menuItem
            ->addChild('mollie_subscriptions', [
                'route' => 'bitbag_sylius_mollie_plugin_admin_mollie_subscription_index',
            ])
            ->setLabel('bitbag_sylius_mollie_plugin.ui.mollie_subscriptions')
            ->setLabelAttribute('icon', 'cart')
        ;
    }
}
