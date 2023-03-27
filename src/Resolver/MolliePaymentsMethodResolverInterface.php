<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver;

interface MolliePaymentsMethodResolverInterface
{
    public function resolve(): array;
}
