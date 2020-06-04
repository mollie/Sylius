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

use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use Sylius\Bundle\AdminBundle\Event\OrderShowMenuBuilderEvent;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;

final class AdminOrderShowMenuListener
{
    public function addPaymentlinkButton(OrderShowMenuBuilderEvent $event): void
    {
        $menu = $event->getMenu();
        $order = $event->getOrder();

        /** @var PaymentInterface $payment */
        $payment = $order->getPayments()->last();

        /** @var PaymentMethodInterface $paymentMethod */
        $paymentMethod = $payment->getMethod();

        if (
            PaymentInterface::STATE_NEW === $payment->getState() ||
            PaymentInterface::STATE_CANCELLED === $payment->getState() ||
            PaymentInterface::STATE_FAILED === $payment->getState() &&
            MollieGatewayFactory::FACTORY_NAME === $paymentMethod->getGatewayConfig()->getFactoryName()
        ) {
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
