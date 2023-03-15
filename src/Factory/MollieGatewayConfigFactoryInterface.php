<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Factory;

use SyliusMolliePlugin\Entity\GatewayConfigInterface;
use SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use SyliusMolliePlugin\Payments\Methods\MethodInterface;

interface MollieGatewayConfigFactoryInterface
{
    public function create(
        MethodInterface $method,
        GatewayConfigInterface $gateway,
        int $key
    ): MollieGatewayConfigInterface;
}
