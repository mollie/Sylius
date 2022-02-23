<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\EventListener;

use BitBag\SyliusMolliePlugin\EventListener\ProductVariantRecurringOptionsListener;
use Knp\Menu\ItemInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Bundle\AdminBundle\Event\ProductVariantMenuBuilderEvent;

final class ProductVariantRecurringOptionsListenerSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(ProductVariantRecurringOptionsListener::class);
    }

    function it_adds_recurring_options_menu(
        ProductVariantMenuBuilderEvent $event,
        ItemInterface $menu
    ): void {
        $event->getMenu()->willReturn($menu);
        $menu->addChild('recurring')->willReturn($menu);
        $menu->setAttribute(
            'template',
            '@BitBagSyliusMolliePlugin/ProductVariant/Tab/_recurring.html.twig')->willReturn($menu);
        $menu->setLabel('bitbag_sylius_mollie_plugin.ui.product_variant.tab.recurring')->willReturn($menu);

        $this->addRecurringOptionsMenu($event);

        $menu->addChild('recurring')->shouldBeCalledOnce();
        $menu->setAttribute(
            'template',
            '@BitBagSyliusMolliePlugin/ProductVariant/Tab/_recurring.html.twig')->shouldBeCalledOnce();
        $menu->setLabel('bitbag_sylius_mollie_plugin.ui.product_variant.tab.recurring')->shouldBeCalledOnce();
    }
}
