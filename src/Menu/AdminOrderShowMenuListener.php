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

use Mollie\Api\Types\OrderStatus;
use Sylius\Bundle\AdminBundle\Event\OrderShowMenuBuilderEvent;

final class AdminOrderShowMenuListener
{
    public function addPaymentlinkButton(OrderShowMenuBuilderEvent $event): void
    {
        $menu = $event->getMenu();
        $order = $event->getOrder();

        if (OrderStatus::STATUS_PAID !== $order->getPaymentState()) {
        $menu
            ->addChild('paymentlink', [
                'route' => 'bitbag_sylius_mollie_plugin_paymentlink',
                'routeParameters' => ['orderNumber' => $order->getNumber()],
            ])
            ->setAttribute('type', 'transition')
            ->setLabel('bitbag_sylius_mollie_plugin.ui.paymentlink_generate')
            ->setLabelAttribute('icon', 'link all')
            ->setLabelAttribute('color', 'blue');
        }
    }
}
