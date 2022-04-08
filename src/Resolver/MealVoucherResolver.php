<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\ProductInterface;
use BitBag\SyliusMolliePlugin\Payments\Methods\MealVoucher;
use Sylius\Component\Core\Model\OrderItemInterface;
use Webmozart\Assert\Assert;

final class MealVoucherResolver implements MealVoucherResolverInterface
{
    public function resolve(MollieGatewayConfigInterface $method, OrderItemInterface $item): ?string
    {
        if (MealVoucher::MEAL_VOUCHERS === $method->getMethodId()) {
            return $this->getMealVoucherCategory($method, $item);
        }

        return null;
    }

    private function getMealVoucherCategory(MollieGatewayConfigInterface $method, OrderItemInterface $item): ?string
    {
        if (null !== $this->getMealVoucherFromItem($item)) {
            return $this->getMealVoucherFromItem($item);
        }
        if (null !== $method->getDefaultCategory()) {
            return $method->getDefaultCategory()->getName();
        }
        Assert::notNull($item->getProduct());

        throw new \LogicException(\sprintf('Voucher need default category, product category found in product name %s', $item->getProduct()->getName()));
    }

    private function getMealVoucherFromItem(OrderItemInterface $item): ?string
    {
        /** @var ProductInterface $product */
        $product = $item->getProduct();

        return null === $product->getProductType() ? null : $product->getProductType()->getName();
    }
}
