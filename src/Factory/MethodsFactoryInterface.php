<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Factory;

use SyliusMolliePlugin\Payments\MethodsInterface;

interface MethodsFactoryInterface
{
    public function createNew(): MethodsInterface;
}
