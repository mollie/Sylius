<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Entity\OrderInterface;

interface MollieFactoryNameResolverInterface
{
    public function resolve(OrderInterface $order = null): string;
}
