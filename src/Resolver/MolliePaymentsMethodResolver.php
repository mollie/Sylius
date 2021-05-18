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
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
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

    /** @var MollieAllowedMethodsResolver */
    private $allowedMethodsResolver;

    /** @var MollieLoggerActionInterface  */
    private $loggerAction;


    public function __construct(
        RepositoryInterface $mollieGatewayRepository,
        MollieCountriesRestrictionResolverInterface $countriesRestrictionResolver,
        ProductVoucherTypeCheckerInterface $productVoucherTypeChecker,
        PaymentCheckoutOrderResolverInterface $paymentCheckoutOrderResolver,
        PaymentMethodRepositoryInterface $paymentMethodRepository,
        MollieAllowedMethodsResolver $allowedMethodsResolver,
        MollieLoggerActionInterface $loggerAction
    ) {
        $this->mollieGatewayRepository = $mollieGatewayRepository;
        $this->countriesRestrictionResolver = $countriesRestrictionResolver;
        $this->productVoucherTypeChecker = $productVoucherTypeChecker;
        $this->paymentCheckoutOrderResolver = $paymentCheckoutOrderResolver;
        $this->paymentMethodRepository = $paymentMethodRepository;
        $this->allowedMethodsResolver = $allowedMethodsResolver;
        $this->loggerAction = $loggerAction;
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

        return $this->getMolliePaymentOptions($order, $address->getCountryCode());
    }

    private function getMolliePaymentOptions(OrderInterface $order, string $countryCode): array
    {
        $allowedMethods = [];

        $methods = $this->getDefaultOptions();

        /** @var GatewayConfigInterface $gateway */
        $paymentMethod = $this->paymentMethodRepository->findOneByChannelAndGatewayFactoryName(
            $order->getChannel(),
            MollieGatewayFactory::FACTORY_NAME
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
