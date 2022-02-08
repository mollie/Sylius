<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Menu;

use BitBag\SyliusMolliePlugin\Menu\MollieRecurringMenuListener;
use Knp\Menu\ItemInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Bundle\UiBundle\Menu\Event\MenuBuilderEvent;

final class MollieRecurringMenuListenerSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieRecurringMenuListener::class);
    }

    function it_builds_menu(
        MenuBuilderEvent $menuBuilderEvent,
        ItemInterface $menu,
        ItemInterface $menuItem
    ): void {
        $menuBuilderEvent->getMenu()->willReturn($menu);

        $menu->getChild('mollie')->willReturn($menuItem);

        $menuItem->addChild('mollie_subscriptions', [
                'route' => 'bitbag_sylius_mollie_plugin_admin_mollie_subscription_index',
            ])->willReturn($menuItem);
        $menuItem->setLabel('bitbag_sylius_mollie_plugin.ui.mollie_subscriptions')->willReturn($menuItem);
        $menuItem->setLabelAttribute('icon', 'cart')->willReturn($menuItem);

        $this->buildMenu($menuBuilderEvent);

        $menuItem->addChild('mollie_subscriptions', [
            'route' => 'bitbag_sylius_mollie_plugin_admin_mollie_subscription_index',
        ])->shouldBeCalledOnce();
        $menuItem->setLabel('bitbag_sylius_mollie_plugin.ui.mollie_subscriptions')->shouldBeCalledOnce();
        $menuItem->setLabelAttribute('icon', 'cart')->shouldBeCalledOnce();

    }
}
