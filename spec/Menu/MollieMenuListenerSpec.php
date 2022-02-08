<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Menu;

use BitBag\SyliusMolliePlugin\Menu\MollieMenuListener;
use Knp\Menu\ItemInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Bundle\UiBundle\Menu\Event\MenuBuilderEvent;

final class MollieMenuListenerSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieMenuListener::class);
    }

    function it_builds_menu(
        MenuBuilderEvent $menuBuilderEvent,
        ItemInterface $menu
    ): void {
        $menuBuilderEvent->getMenu()->willReturn($menu);

        $menu->addChild('mollie')->willReturn($menu);
        $menu->setLabel('bitbag_sylius_mollie_plugin.ui.mollie_gateway_label')->willReturn($menu);
        $menu->addChild('mollie_logger', [
            'route' => 'bitbag_sylius_mollie_plugin_admin_mollie_logger_index',
        ])->willReturn($menu);
        $menu->setLabel('bitbag_sylius_mollie_plugin.ui.mollie_loggers')->willReturn($menu);
        $menu->setLabelAttribute('icon', 'tags')->willReturn($menu);
        $menu->addChild('mollie_product_type', [
            'route' => 'bitbag_sylius_mollie_plugin_admin_product_type_index',
        ])->willReturn($menu);
        $menu->setLabel('bitbag_sylius_mollie_plugin.ui.mollie_product_type')->willReturn($menu);
        $menu->setLabelAttribute('icon', 'sitemap')->willReturn($menu);

        $menu->addChild('mollie')->shouldBeCalledOnce();
        $menu->setLabel('bitbag_sylius_mollie_plugin.ui.mollie_gateway_label')->shouldBeCalledOnce();
        $menu->addChild('mollie_logger', [
            'route' => 'bitbag_sylius_mollie_plugin_admin_mollie_logger_index',
            ])->shouldBeCalledOnce();
        $menu->setLabel('bitbag_sylius_mollie_plugin.ui.mollie_loggers')->shouldBeCalledOnce();
        $menu->setLabelAttribute('icon', 'tags')->shouldBeCalledOnce();
        $menu->addChild('mollie_product_type', [
                'route' => 'bitbag_sylius_mollie_plugin_admin_product_type_index',
            ])->shouldBeCalledOnce();
        $menu->setLabel('bitbag_sylius_mollie_plugin.ui.mollie_product_type')->shouldBeCalledOnce();
        $menu->setLabelAttribute('icon', 'sitemap')->shouldBeCalledOnce();

        $this->buildMenu($menuBuilderEvent);
    }
}
