<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\EventListener;

use Sylius\Bundle\AdminBundle\Event\ProductVariantMenuBuilderEvent;

final class ProductVariantRecurringOptionsListener
{
    public function addRecurringOptionsMenu(ProductVariantMenuBuilderEvent $event): void
    {
        $menu = $event->getMenu();
        $menu
            ->addChild('recurring')
            ->setAttribute('template', '@BitBagSyliusMolliePlugin/ProductVariant/Tab/_recurring.html.twig')
            ->setLabel('bitbag_sylius_mollie_plugin.ui.product_variant.tab.recurring')
        ;
    }
}
