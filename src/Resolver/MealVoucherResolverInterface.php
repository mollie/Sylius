<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver;

use SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use Sylius\Component\Core\Model\OrderItemInterface;

interface MealVoucherResolverInterface
{
    public function resolve(MollieGatewayConfigInterface $method, OrderItemInterface $item): ?string;
}
