<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Order;

use BitBag\SyliusMolliePlugin\Order\OrderItemCloner;
use BitBag\SyliusMolliePlugin\Order\OrderItemClonerInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Order\Model\OrderItemUnitInterface;
use Sylius\Component\Core\Model\ProductVariantInterface;
use Sylius\Component\Order\Factory\OrderItemUnitFactoryInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class OrderItemClonerSpec extends ObjectBehavior
{
    function let(
        FactoryInterface $orderItemFactory,
        OrderItemUnitFactoryInterface $orderItemUnitFactory
    ): void
    {
        $this->beConstructedWith(
            $orderItemFactory,
            $orderItemUnitFactory
        );
    }
    function it_is_initializable(): void
    {
        $this->shouldHaveType(OrderItemCloner::class);
    }

    function it_should_have_implement_order_item_cloner_interface(): void
    {
        $this->shouldImplement(OrderItemClonerInterface::class);
    }

    function it_clones(
        FactoryInterface $orderItemFactory,
        OrderItemUnitFactoryInterface $orderItemUnitFactory,
        OrderItemInterface $orderItem,
        OrderItemInterface $clonedOrderItem,
        OrderItemUnitInterface $clonedUnit,
        OrderInterface $order,
        ProductVariantInterface $variant
    ): void {
        $orderItemFactory->createNew()->willReturn($clonedOrderItem);

        $orderItem->getProductName()->willReturn('test_product_name');
        $orderItem->getUnitPrice()->willReturn(59);
        $orderItem->getVariant()->willReturn($variant);
        $orderItem->getVariantName()->willReturn('test_variant_name');
        $orderItem->getVersion()->willReturn(3);
        $orderItem->isImmutable()->willReturn(true);

        $clonedOrderItem->setOrder($order);
        $clonedOrderItem->setProductName('test_product_name');
        $clonedOrderItem->setUnitPrice(59);
        $clonedOrderItem->setVariant($variant);
        $clonedOrderItem->setVariantName('test_variant_name');
        $clonedOrderItem->setVersion(3);
        $clonedOrderItem->setImmutable(true);

        $orderItemUnitFactory->createForItem($clonedOrderItem)->willReturn($clonedUnit);

        $clonedOrderItem->addUnit($clonedUnit);

        $clonedOrderItem->recalculateUnitsTotal();
        $clonedOrderItem->recalculateAdjustmentsTotal();

        $this->clone($orderItem, $order)->shouldReturn($clonedOrderItem);
    }
}
