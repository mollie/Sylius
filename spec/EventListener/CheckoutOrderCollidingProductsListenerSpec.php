<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\EventListener;

use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\EventListener\CheckoutOrderCollidingProductsListener;
use PhpSpec\ObjectBehavior;
use Sylius\Bundle\ResourceBundle\Event\ResourceControllerEvent;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

final class CheckoutOrderCollidingProductsListenerSpec extends ObjectBehavior
{
    function let(
        RouterInterface $router,
        TranslatorInterface $translator,
        FlashBagInterface $flashBag
    ): void {
        $this->beConstructedWith(
            $router,
            $translator,
            $flashBag
        );
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(CheckoutOrderCollidingProductsListener::class);
    }

    function it_execute_on_update(
        ResourceControllerEvent $event,
        OrderInterface $order,
        RouterInterface $router,
        FlashBagInterface $flashBag,
        TranslatorInterface $translator
    ): void {
        $order->hasNonRecurringContents()->willReturn(true);
        $order->hasRecurringContents()->willReturn(true);
        $router->generate('sylius_shop_cart_summary')->willReturn('/sylius_shop_cart_summary');
        $event->getSubject()->willReturn($order);
        $event->setResponse(new RedirectResponse('/sylius_shop_cart_summary'));

        $message = 'There are mixed products (recurring and non-recurring) within your cart.
             Proceeding with mixed content is forbidden.';

        $translator->trans('bitbag_sylius_mollie_plugin.order_checkout.colliding_products')
            ->willReturn($message);

        $this->onUpdate($event);

        $flashBag->add('error', $message)->shouldBeCalledOnce();
        $event->stop($message,ResourceControllerEvent::TYPE_WARNING)->shouldBeCalledOnce();
    }
}
