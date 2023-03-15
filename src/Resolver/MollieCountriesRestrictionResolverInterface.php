<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver;

use SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;

interface MollieCountriesRestrictionResolverInterface
{
    public function resolve(
        MollieGatewayConfigInterface $paymentMethod,
        array $methods,
        string $countryCode
    ): ?array;
}
