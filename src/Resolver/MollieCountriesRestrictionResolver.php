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

final class MollieCountriesRestrictionResolver implements MollieCountriesRestrictionResolverInterface
{
    /** @var MolliePaymentMethodImageResolverInterface */
    private $imageResolver;

    public function __construct(MolliePaymentMethodImageResolverInterface $imageResolver)
    {
        $this->imageResolver = $imageResolver;
    }

    public function resolve(MollieGatewayConfigInterface $paymentMethod, array $methods, string $countryCode): ?array
    {
        if ($paymentMethod->getCountryRestriction() === MollieGatewayConfigInterface::ALL_COUNTRIES) {
            return $this->excludeCountryLevel($paymentMethod, $methods, $countryCode);
        }
        if ($paymentMethod->getCountryRestriction() === MollieGatewayConfigInterface::SELECTED_COUNTRIES) {
            return $this->allowCountryLevel($paymentMethod, $methods, $countryCode);
        }

        return $methods;
    }

    private function allowCountryLevel(MollieGatewayConfigInterface $paymentMethod, array $methods, string $countryCode): array
    {
        if (is_array($paymentMethod->getCountryLevelAllowed()) &&
            in_array($countryCode, $paymentMethod->getCountryLevelAllowed())) {
            return $this->setData($methods, $paymentMethod);
        }

        return $methods;
    }

    private function excludeCountryLevel(MollieGatewayConfigInterface $paymentMethod, array $methods, string $countryCode): array
    {
        if (is_array($paymentMethod->getCountryLevelExcluded()) &&
            in_array($countryCode, $paymentMethod->getCountryLevelExcluded())) {
            return $methods;
        }

        return $this->setData($methods, $paymentMethod);
    }

    private function setData(array $methods, MollieGatewayConfigInterface $paymentMethod): array
    {
        $methods['data'][$paymentMethod->getName()] = $paymentMethod->getMethodId();
        $methods['image'][$paymentMethod->getMethodId()] = $this->imageResolver->resolve($paymentMethod);
        $methods['issuers'][$paymentMethod->getMethodId()] = $paymentMethod->getIssuers();
        $methods['paymentFee'][$paymentMethod->getMethodId()] = $paymentMethod->getPaymentSurchargeFee()->getType()
            ? $paymentMethod->getPaymentSurchargeFee() : [];

        return $methods;
    }
}
