<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver;

use SyliusMolliePlugin\Checker\Voucher\ProductVoucherTypeCheckerInterface;
use SyliusMolliePlugin\Entity\GatewayConfigInterface;
use SyliusMolliePlugin\Entity\MollieGatewayConfig;
use SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use SyliusMolliePlugin\Entity\OrderInterface as MollieOrderInterface;
use SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use SyliusMolliePlugin\Repository\MollieGatewayConfigRepository;
use SyliusMolliePlugin\Repository\MollieGatewayConfigRepositoryInterface;
use SyliusMolliePlugin\Repository\PaymentMethodRepositoryInterface;
use SyliusMolliePlugin\Resolver\Order\PaymentCheckoutOrderResolverInterface;
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
            if (!empty($allowedMethod[0]) && in_array($allowedMethod[0]->getMethodId(), $allowedMethodsIds, true)) {

                $orderTotal = (float)$order->getTotal()/100;

                $minAmountLimit = $allowedMethod['minimumAmount'] ?: $allowedMethod[0]->getMinimumAmount()['value'];
                if ($minAmountLimit !== null && $minAmountLimit > $orderTotal) {
                    continue;
                }

                $maxAmountLimit = $allowedMethod['maximumAmount'] ?: $allowedMethod[0]->getMaximumAmount()['value'];
                if ($maxAmountLimit !== null && $maxAmountLimit < $orderTotal) {
                    continue;
                }

                $allowedMethods[] = $allowedMethod[0];
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
