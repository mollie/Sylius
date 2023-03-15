<?php

declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver;

use SyliusMolliePlugin\Entity\OrderInterface;

interface MollieFactoryNameResolverInterface
{
    public function resolve(OrderInterface $order = null): string;
}
