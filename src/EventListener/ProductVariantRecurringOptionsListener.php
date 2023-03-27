<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\EventListener;

use Sylius\Bundle\AdminBundle\Event\ProductVariantMenuBuilderEvent;

final class ProductVariantRecurringOptionsListener
{
    public function addRecurringOptionsMenu(ProductVariantMenuBuilderEvent $event): void
    {
        $menu = $event->getMenu();
        $menu
            ->addChild('recurring')
            ->setAttribute('template', '@SyliusMolliePlugin/ProductVariant/Tab/_recurring.html.twig')
            ->setLabel('sylius_mollie_plugin.ui.product_variant.tab.recurring')
        ;
    }
}
