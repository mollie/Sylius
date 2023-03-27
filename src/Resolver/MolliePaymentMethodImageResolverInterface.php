<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver;

use SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;

interface MolliePaymentMethodImageResolverInterface
{
    public function resolve(MollieGatewayConfigInterface $paymentMethod): string;
}
