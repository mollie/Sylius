<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver;

use Sylius\Component\Core\Model\OrderInterface;

interface TaxShipmentResolverInterface
{
    public function resolve(OrderInterface $order): ?float;
}
