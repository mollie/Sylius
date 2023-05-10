<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver;

use SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;

interface PaymentMethodConfigResolverInterface
{
    public function getConfigFromMethodId(string $methodId): MollieGatewayConfigInterface;
}
