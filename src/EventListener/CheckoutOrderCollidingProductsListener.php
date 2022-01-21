<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\EventListener;

use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use Sylius\Bundle\ResourceBundle\Event\ResourceControllerEvent;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

final class CheckoutOrderCollidingProductsListener
{
    private RouterInterface $router;
    private TranslatorInterface $translator;
    private FlashBagInterface $flashBag;

    public function __construct(
        RouterInterface $router,
        TranslatorInterface $translator,
        FlashBagInterface $flashBag
    )
    {
        $this->router = $router;
        $this->translator = $translator;
        $this->flashBag = $flashBag;
    }

    public function onUpdate(ResourceControllerEvent $event): void
    {
        if (false === ($subject = $event->getSubject()) instanceof OrderInterface) {
            return;
        }

        /** @var OrderInterface $subject */
        if (true === $subject->hasNonRecurringContents() && true === $subject->hasRecurringContents()) {
            $url = $this->router->generate('sylius_shop_cart_summary');
            $response = new RedirectResponse($url);
            $event->setResponse($response);
            $message = $this->translator->trans('bitbag_sylius_mollie_plugin.order_checkout.colliding_products');
            $event->stop(
                $message,
                ResourceControllerEvent::TYPE_WARNING
            );
            $this->flashBag->add('error', $message);
        }
    }
}
