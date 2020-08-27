<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Payments\Methods\MealVoucher;
use Sylius\Component\Core\Model\OrderItemInterface;

final class MealVoucherResolver implements MealVoucherResolverInterface
{
    public function resolve(MollieGatewayConfigInterface $method, OrderItemInterface $item): ?string
    {
        if ($method->getMethodId() === MealVoucher::MEAL_VOUCHERS) {
            return $this->getMealVoucherCategory($method, $item);
        }

        return null;
    }

    private function getMealVoucherCategory(MollieGatewayConfigInterface $method, OrderItemInterface $item): string
    {
        if (null === $method->getDefaultCategory()) {
            return $this->getMealVoucherFromItem($item);
        } else {
            return $method->getDefaultCategory()->getName();
        }
    }

    private function getMealVoucherFromItem(OrderItemInterface $item): string
    {
        $product = $item->getProduct();

        if (null === $product->getProductType()) {
            throw new \LogicException(\sprintf('No product category found in product name %s', $product->getName()));
        }

        return $product->getProductType()->getName();
    }
}
