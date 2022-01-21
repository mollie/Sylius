<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Payments\MethodsInterface;

interface MethodsFactoryInterface
{
    public function createNew(): MethodsInterface;
}
