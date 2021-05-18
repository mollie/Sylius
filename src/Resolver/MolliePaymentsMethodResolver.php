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
use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Form\Type\MollieGatewayConfigurationType;
use BitBag\SyliusMolliePlugin\Repository\PaymentMethodRepositoryInterface;
use BitBag\SyliusMolliePlugin\Resolver\Order\PaymentCheckoutOrderResolverInterface;
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

    /** @var MollieAmountRestrictionResolverInterface  */
    private $amountRestrictionResolver;

    /** @var RepositoryInterface  */
    private $gatewayConfigRepository;

    /** @var MollieApiClient  */
    private $mollieApiClient;

    public function __construct(
        RepositoryInterface $mollieGatewayRepository,
        MollieCountriesRestrictionResolverInterface $countriesRestrictionResolver,
        ProductVoucherTypeCheckerInterface $productVoucherTypeChecker,
        PaymentCheckoutOrderResolverInterface $paymentCheckoutOrderResolver,
        PaymentMethodRepositoryInterface $paymentMethodRepository,
        MollieAmountRestrictionResolverInterface $amountRestrictionResolver,
        RepositoryInterface $gatewayConfigRepository,
        MollieApiClient $mollieApiClient
    ) {
        $this->mollieGatewayRepository = $mollieGatewayRepository;
        $this->countriesRestrictionResolver = $countriesRestrictionResolver;
        $this->productVoucherTypeChecker = $productVoucherTypeChecker;
        $this->paymentCheckoutOrderResolver = $paymentCheckoutOrderResolver;
        $this->paymentMethodRepository = $paymentMethodRepository;
        $this->amountRestrictionResolver = $amountRestrictionResolver;
        $this->gatewayConfigRepository = $gatewayConfigRepository;
        $this->mollieApiClient = $mollieApiClient;
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
        $requestedMethods = $this->requestMethods($order);

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

        /** @var MollieGatewayConfigInterface $paymentMethod */
        foreach ($paymentConfigs as $paymentMethod) {
            $methods = $this->countriesRestrictionResolver->resolve($paymentMethod, $methods, $countryCode);
        }

        foreach ($paymentConfigs as $paymentMethod) {
            $methods = $this->amountRestrictionResolver->resolve($paymentMethod, $methods, $order);
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

    private function requestMethods(OrderInterface $order): array
    {
        $gateways = $this->gatewayConfigRepository->findBy(['factoryName' => MollieGatewayFactory::FACTORY_NAME]);

        /** @var GatewayConfigInterface $gateway */
        foreach ($gateways as $gateway) {
            $config = $gateway->getConfig();
            $environment = true === $config['environment'] ?
                MollieGatewayConfigurationType::API_KEY_LIVE :
                MollieGatewayConfigurationType::API_KEY_TEST;

            $client = $this->mollieApiClient->setApiKey($config[$environment]);

            $allMollieMethods = $client->methods->allActive([
                'amount[value]' => substr_replace((string) $order->getTotal(), '.', -2, 0),
                'amount[currency]' => $order->getCurrencyCode(),
                'locale' => $order->getLocaleCode()
            ]);
        }

        foreach($allMollieMethods as $method) {
            dump($method);
        }
        die;
        return [];
    }
}
