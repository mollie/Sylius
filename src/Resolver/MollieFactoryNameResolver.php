<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use Sylius\Component\Order\Context\CartContextInterface;

final class MollieFactoryNameResolver implements MollieFactoryNameResolverInterface
{
    private CartContextInterface $cartContext;

    public function __construct(CartContextInterface $cartContext)
    {
        $this->cartContext = $cartContext;
    }

    public function resolve(OrderInterface $order = null): string
    {
        if (null === $order) {
            $order = $this->cartContext->getCart();
        }

        if (true === $order instanceof OrderInterface && true === $order->hasRecurringContents()) {
            return MollieSubscriptionGatewayFactory::FACTORY_NAME;
        }

        return MollieGatewayFactory::FACTORY_NAME;
    }
}
