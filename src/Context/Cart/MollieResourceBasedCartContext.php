<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Context\Cart;

use BitBag\SyliusMolliePlugin\Resolver\Order\MollieResourceOrderResolverInterface;
use Sylius\Component\Order\Context\CartContextInterface;
use Sylius\Component\Order\Context\CartNotFoundException;
use Sylius\Component\Order\Model\OrderInterface;
use Symfony\Component\HttpFoundation\RequestStack;

final class MollieResourceBasedCartContext implements CartContextInterface
{
    private RequestStack $requestStack;

    private MollieResourceOrderResolverInterface $mollieResourceOrderResolver;

    public function __construct(
        RequestStack $requestStack,
        MollieResourceOrderResolverInterface $mollieResourceOrderResolver
    ) {
        $this->requestStack = $requestStack;
        $this->mollieResourceOrderResolver = $mollieResourceOrderResolver;
    }

    public function getCart(): OrderInterface
    {
        $request = $this->requestStack->getMasterRequest();

        $mollieResourceId = $request->get('id');

        if (null === $mollieResourceId) {
            throw new CartNotFoundException('Sylius was not able to find the cart, as there is no resource identifier');
        }

        $order = $this
            ->mollieResourceOrderResolver
            ->resolve($mollieResourceId)
            ;

        return $order;
    }
}
