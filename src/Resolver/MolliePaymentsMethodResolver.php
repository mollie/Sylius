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

use BitBag\SyliusMolliePlugin\Checker\Voucher\ProductVoucherTypeCheckerInterface;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Order\Context\CartContextInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\HttpFoundation\Session\Session;

final class MolliePaymentsMethodResolver implements MolliePaymentsMethodResolverInterface
{
    /** @var RepositoryInterface */
    private $orderRepository;

    /** @var RepositoryInterface */
    private $gatewayConfigRepository;

    /** @var MolliePaymentMethodImageResolverInterface */
    private $imageResolver;

    /** @var RepositoryInterface */
    private $mollieGatewayRepository;

    /** @var Session */
    private $session;

    /** @var CartContextInterface */
    private $cartContext;

    /** @var MollieCountriesRestrictionResolverInterface */
    private $countriesRestrictionResolver;

    /** @var ProductVoucherTypeCheckerInterface */
    private $productVoucherTypeChecker;

    public function __construct(
        RepositoryInterface $orderRepository,
        RepositoryInterface $gatewayConfigRepository,
        MolliePaymentMethodImageResolverInterface $imageResolver,
        RepositoryInterface $mollieGatewayRepository,
        Session $session,
        CartContextInterface $cartContext,
        MollieCountriesRestrictionResolverInterface $countriesRestrictionResolver,
        ProductVoucherTypeCheckerInterface $productVoucherTypeChecker
    ) {
        $this->orderRepository = $orderRepository;
        $this->gatewayConfigRepository = $gatewayConfigRepository;
        $this->imageResolver = $imageResolver;
        $this->mollieGatewayRepository = $mollieGatewayRepository;
        $this->session = $session;
        $this->cartContext = $cartContext;
        $this->countriesRestrictionResolver = $countriesRestrictionResolver;
        $this->productVoucherTypeChecker = $productVoucherTypeChecker;
    }

    public function resolve(): array
    {
        $orderId = $this->session->get('sylius_order_id');
        $orderFromSession = null;

        $order = $this->cartContext->getCart();

        if (null !== $orderId) {
            $orderFromSession = $this->orderRepository->findOneBy(['id' => $orderId]);
        }

        if (null !== $orderFromSession) {
            $order = $orderFromSession;
        }

        /** @var OrderInterface $order */
        $address = $order->getBillingAddress();

        if (null === $address) {
            $address = $order->getShippingAddress();
        }

        if (null === $address) {
            return $this->getDefaultOptions();
        }

        return $this->getMolliePaymentOptions($order, $address->getCountryCode());
    }

    private function getMolliePaymentOptions(OrderInterface $order, string $countryCode): array
    {
        $methods = $this->getDefaultOptions();

        /** @var GatewayConfigInterface $gateway */
        $gateway = $this->gatewayConfigRepository->findOneBy([
            'factoryName' => MollieGatewayFactory::FACTORY_NAME,
        ]);

        if (null === $gateway) {
            return $this->getDefaultOptions();
        }

        $paymentConfigs = $this->mollieGatewayRepository->findAllEnabledByGateway($gateway);

        if (empty($paymentConfigs)) {
            return $this->getDefaultOptions();
        }

        /** @var MollieGatewayConfigInterface $paymentMethod */
        foreach ($paymentConfigs as $paymentMethod) {
            $methods = $this->countriesRestrictionResolver->resolve($paymentMethod, $methods, $countryCode);
        }

        $methods = $this->productVoucherTypeChecker->checkTheProductTypeOnCart($order, $methods);

        return $methods;
    }

    private function getDefaultOptions(): array
    {
        return [
            'data' => [],
            'image' => [],
            'issuers' => [],
            'paymentFee' => [],
        ];
    }
}
