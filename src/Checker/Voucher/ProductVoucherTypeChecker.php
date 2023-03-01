<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Checker\Voucher;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\ProductInterface;
use BitBag\SyliusMolliePlugin\Entity\ProductType;
use BitBag\SyliusMolliePlugin\Payments\Methods\MealVoucher;
use BitBag\SyliusMolliePlugin\Repository\MollieGatewayConfigRepository;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Webmozart\Assert\Assert;

final class ProductVoucherTypeChecker implements ProductVoucherTypeCheckerInterface
{
    /** @var RepositoryInterface */
    private $paymentMethodRepository;

    public function __construct(MollieGatewayConfigRepository $paymentMethodRepository)
    {
        $this->paymentMethodRepository = $paymentMethodRepository;
    }

    public function checkTheProductTypeOnCart(OrderInterface $order, array $methods): array
    {
        if (false === $this->checkVoucherEnabled($methods)) {
            return $methods;
        }

        /** @var ?MollieGatewayConfigInterface $mealVoucher */
        $mealVoucher = $this->paymentMethodRepository->findOneBy(['methodId' => MealVoucher::MEAL_VOUCHERS]);
        Assert::isInstanceOf($mealVoucher, MollieGatewayConfigInterface::class);

        if ($mealVoucher->getDefaultCategory() instanceof ProductType) {
            return $methods;
        }

        $items = $order->getItems();
        /** @var OrderItemInterface $item */
        foreach ($items as $item) {
            /** @var ProductInterface $product */
            $product = $item->getProduct();
            if (null === $product->getProductType()) {
                $key = array_search (MealVoucher::MEAL_VOUCHERS, $methods['data']);
                unset($methods['data'][$key]);
            }
        }

        return $methods;
    }

    private function checkVoucherEnabled(array $methods): bool
    {
        return in_array(MealVoucher::MEAL_VOUCHERS, array_values($methods['data']));
    }
}
