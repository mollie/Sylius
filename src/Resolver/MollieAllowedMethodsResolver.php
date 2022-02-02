<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Creator\MollieMethodsCreatorInterface;
use Mollie\Api\Resources\Method;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\OrderProcessing\OrderPricesRecalculator;
use Sylius\Component\Currency\Context\CurrencyContextInterface;
use Sylius\Component\Currency\Converter\CurrencyConverterInterface;

final class MollieAllowedMethodsResolver implements MollieAllowedMethodsResolverInterface
{
    /** @var MollieApiClientKeyResolverInterface */
    private $mollieApiClientKeyResolver;

    /** @var PaymentLocaleResolverInterface */
    private $paymentLocaleResolver;

    public function __construct(
        MollieApiClientKeyResolverInterface $mollieApiClientKeyResolver,
        PaymentLocaleResolverInterface $paymentLocaleResolver
    )
    {
        $this->mollieApiClientKeyResolver = $mollieApiClientKeyResolver;
        $this->paymentLocaleResolver = $paymentLocaleResolver;
    }

    public function resolve(OrderInterface $order): array
    {
        $allowedMethodsIds = [];

        $client = $this->mollieApiClientKeyResolver->getClientWithKey($order);

        /** API will return only payment methods allowed for order total, currency, billing country */
        $allowedMethods = $client->methods->allActive($this->createParametersByOrder($order));

        /** @var Method $method */
        foreach ($allowedMethods as $method) {
            $allowedMethodsIds[] = $method->id;
        }

        return $allowedMethodsIds;
    }

    private function createParametersByOrder(OrderInterface $order): array
    {
        $defaultParameters = MollieMethodsCreatorInterface::PARAMETERS;
        if (
            true === $order instanceof \BitBag\SyliusMolliePlugin\Entity\OrderInterface
            && $order->hasRecurringContents()
        ) {
            $defaultParameters = MollieMethodsCreatorInterface::PARAMETERS_RECURRING;
        }
        $parameters = array_merge(
            [
                'amount' => [
                    'value' => $this->parseTotalToString($order->getTotal()),
                    'currency' => $order->getCurrencyCode(),
                ],
                'billingCountry' => null !== $order->getBillingAddress()
                    ? $order->getBillingAddress()->getCountryCode()
                    : null,
            ],
            $defaultParameters
        );

        if (null !== ($paymentLocale = $this->paymentLocaleResolver->resolveFromOrder($order))) {
            $parameters['locale'] = $paymentLocale;
        }

        return $parameters;
    }

    private function parseTotalToString(int $total): string
    {
        return substr_replace((string)$total, '.', -2, 0);
    }
}
