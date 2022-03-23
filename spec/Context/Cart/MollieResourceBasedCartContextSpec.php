<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Context\Cart;

use BitBag\SyliusMolliePlugin\Context\Cart\MollieResourceBasedCartContext;
use BitBag\SyliusMolliePlugin\Resolver\Order\MollieResourceOrderResolverInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Order\Context\CartContextInterface;
use Sylius\Component\Order\Context\CartNotFoundException;
use Sylius\Component\Order\Model\OrderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

final class MollieResourceBasedCartContextSpec extends ObjectBehavior
{
    public function let(
        RequestStack $requestStack,
        MollieResourceOrderResolverInterface $mollieResourceOrderResolver
    ): void {
        $this->beConstructedWith(
            $requestStack,
            $mollieResourceOrderResolver
        );
    }

    public function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieResourceBasedCartContext::class);
        $this->shouldImplement(CartContextInterface::class);
    }

    public function it_gets_cart_from_mollie_resource_id(
        RequestStack $requestStack,
        MollieResourceOrderResolverInterface $mollieResourceOrderResolver,
        Request $request,
        OrderInterface $order
    ): void {
        $mollieResourceId = 'ord_12345';

        $requestStack->getMasterRequest()
            ->willReturn($request)
            ;
        $request->get('id')
            ->willReturn($mollieResourceId);

        $mollieResourceOrderResolver
            ->resolve($mollieResourceId)
            ->willReturn($order);

        $this->getCart()
            ->shouldReturn($order);
    }

    public function it_throws_exception_if_there_is_no_mollie_resource_id(
        RequestStack $requestStack,
        Request $request
    ): void {
        $mollieResourceId = null;

        $requestStack->getMasterRequest()
            ->willReturn($request);

        $request->get('id')
            ->willReturn($mollieResourceId);

        $this->shouldThrow(
            new CartNotFoundException('Sylius was not able to find the cart, as there is no resource identifier')
        )
            ->during('getCart');
    }
}
