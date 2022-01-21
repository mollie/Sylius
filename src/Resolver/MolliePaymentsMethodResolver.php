<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Checker\Voucher\ProductVoucherTypeCheckerInterface;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfig;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface as MollieOrderInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Repository\PaymentMethodRepositoryInterface;
use BitBag\SyliusMolliePlugin\Resolver\Order\PaymentCheckoutOrderResolverInterface;
use Mollie\Api\Exceptions\ApiException;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class MolliePaymentsMethodResolver implements MolliePaymentsMethodResolverInterface
{
    /** @var RepositoryInterface */
    private $mollieGatewayRepository;

    /** @var MollieCountriesRestrictionResolverInterface */
    private $countriesRestrictionResolver;

    /** @var ProductVoucherTypeCheckerInterface */
    private $productVoucherTypeChecker;

    /** @var PaymentCheckoutOrderResolverInterface */
    private $paymentCheckoutOrderResolver;

    /** @var PaymentMethodRepositoryInterface */
    private $paymentMethodRepository;

    /** @var MollieAllowedMethodsResolverInterface */
    private $allowedMethodsResolver;

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    /** @var MollieFactoryNameResolverInterface */
    private $mollieFactoryNameResolver;

    public function __construct(
        RepositoryInterface $mollieGatewayRepository,
        MollieCountriesRestrictionResolverInterface $countriesRestrictionResolver,
        ProductVoucherTypeCheckerInterface $productVoucherTypeChecker,
        PaymentCheckoutOrderResolverInterface $paymentCheckoutOrderResolver,
        PaymentMethodRepositoryInterface $paymentMethodRepository,
        MollieAllowedMethodsResolverInterface $allowedMethodsResolver,
        MollieLoggerActionInterface $loggerAction,
        MollieFactoryNameResolverInterface $mollieFactoryNameResolver
    )
    {
        $this->mollieGatewayRepository = $mollieGatewayRepository;
        $this->countriesRestrictionResolver = $countriesRestrictionResolver;
        $this->productVoucherTypeChecker = $productVoucherTypeChecker;
        $this->paymentCheckoutOrderResolver = $paymentCheckoutOrderResolver;
        $this->paymentMethodRepository = $paymentMethodRepository;
        $this->allowedMethodsResolver = $allowedMethodsResolver;
        $this->loggerAction = $loggerAction;
        $this->mollieFactoryNameResolver = $mollieFactoryNameResolver;
    }

    public function resolve(): array
    {
        $order = $this->paymentCheckoutOrderResolver->resolve();

        /** @var OrderInterface $order */
        $address = $order->getBillingAddress();

        if (null === $address) {
            $address = $order->getShippingAddress();
        }

        if (null === $address) {
            return $this->getDefaultOptions();
        }

        if (false === $order instanceof MollieOrderInterface) {
            return $this->getDefaultOptions();
        }

        return $this->getMolliePaymentOptions($order, $address->getCountryCode());
    }

    private function getMolliePaymentOptions(MollieOrderInterface $order, string $countryCode): array
    {
        $allowedMethods = [];
        $methods = $this->getDefaultOptions();
        $factoryName = $this->mollieFactoryNameResolver->resolve($order);

        /** @var GatewayConfigInterface $gateway */
        $paymentMethod = $this->paymentMethodRepository->findOneByChannelAndGatewayFactoryName(
            $order->getChannel(),
            $factoryName
        );

        if (null === $paymentMethod) {
            return $this->getDefaultOptions();
        }

        $gateway = $paymentMethod->getGatewayConfig();

        if (null === $gateway) {
            return $this->getDefaultOptions();
        }

        $paymentConfigs = $this->mollieGatewayRepository->findAllEnabledByGateway($gateway);

        if (empty($paymentConfigs)) {
            return $this->getDefaultOptions();
        }

        try {
            $allowedMethodsIds = $this->allowedMethodsResolver->resolve($order);
        } catch (ApiException $e) {
            $this->loggerAction->addNegativeLog($e->getMessage());

            return $this->getDefaultOptions();
        }

        /** @var MollieGatewayConfig $paymentMethod */
        foreach ($paymentConfigs as $paymentMethod) {
            if (in_array($paymentMethod->getMethodId(), $allowedMethodsIds, true)) {
                $allowedMethods[] = $paymentMethod;
            }
        }

        if (empty($allowedMethods)) {
            return $this->getDefaultOptions();
        }

        /** @var MollieGatewayConfigInterface $paymentMethod */
        foreach ($allowedMethods as $paymentMethod) {
            $methods = $this->countriesRestrictionResolver->resolve($paymentMethod, $methods, $countryCode);
        }

        return $this->productVoucherTypeChecker->checkTheProductTypeOnCart($order, $methods);
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
