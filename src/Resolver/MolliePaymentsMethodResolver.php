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
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Repository\MollieGatewayConfigRepository;
use BitBag\SyliusMolliePlugin\Repository\MollieGatewayConfigRepositoryInterface;
use BitBag\SyliusMolliePlugin\Repository\PaymentMethodRepositoryInterface;
use BitBag\SyliusMolliePlugin\Resolver\Order\PaymentCheckoutOrderResolverInterface;
use Mollie\Api\Exceptions\ApiException;
use Sylius\Component\Core\Model\OrderInterface;
use Webmozart\Assert\Assert;

final class MolliePaymentsMethodResolver implements MolliePaymentsMethodResolverInterface
{
    /** @var MollieGatewayConfigRepositoryInterface */
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
        MollieGatewayConfigRepository $mollieGatewayRepository,
        MollieCountriesRestrictionResolverInterface $countriesRestrictionResolver,
        ProductVoucherTypeCheckerInterface $productVoucherTypeChecker,
        PaymentCheckoutOrderResolverInterface $paymentCheckoutOrderResolver,
        PaymentMethodRepositoryInterface $paymentMethodRepository,
        MollieAllowedMethodsResolverInterface $allowedMethodsResolver,
        MollieLoggerActionInterface $loggerAction,
        MollieFactoryNameResolverInterface $mollieFactoryNameResolver
    ) {
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
        /** @var OrderInterface $order */
        $order = $this->paymentCheckoutOrderResolver->resolve();

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
        Assert::notNull($address->getCountryCode());

        return $this->getMolliePaymentOptions($order, $address->getCountryCode());
    }

    private function getMolliePaymentOptions(MollieOrderInterface $order, string $countryCode): array
    {
        $allowedMethods = [];
        $methods = $this->getDefaultOptions();
        $factoryName = $this->mollieFactoryNameResolver->resolve($order);

        Assert::notNull($order->getChannel());
        $paymentMethod = $this->paymentMethodRepository->findOneByChannelAndGatewayFactoryName(
            $order->getChannel(),
            $factoryName
        );

        if (null === $paymentMethod) {
            return $this->getDefaultOptions();
        }

        /** @var ?GatewayConfigInterface $gateway */
        $gateway = $paymentMethod->getGatewayConfig();

        if (null === $gateway) {
            return $this->getDefaultOptions();
        }

        $paymentConfigs = $this->mollieGatewayRepository->findAllEnabledByGateway($gateway);

        if (0 === count($paymentConfigs)) {
            return $this->getDefaultOptions();
        }

        try {
            $allowedMethodsIds = $this->allowedMethodsResolver->resolve($order);
        } catch (ApiException $e) {
            $this->loggerAction->addNegativeLog($e->getMessage());

            return $this->getDefaultOptions();
        }

        /** @var MollieGatewayConfig $allowedMethod */
        foreach ($paymentConfigs as $allowedMethod) {
            if (in_array($allowedMethod->getMethodId(), $allowedMethodsIds, true)) {
                $allowedMethods[] = $allowedMethod;
            }
        }

        if (0 === count($allowedMethods)) {
            return $this->getDefaultOptions();
        }

        /** @var MollieGatewayConfigInterface $allowedMethod */
        foreach ($allowedMethods as $allowedMethod) {
            Assert::notNull($methods);
            $methods = $this->countriesRestrictionResolver->resolve($allowedMethod, $methods, $countryCode);
        }
        if (null === $methods) {
            return $this->getDefaultOptions();
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
