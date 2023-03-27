<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Factory;

use SyliusMolliePlugin\Payments\Methods;
use SyliusMolliePlugin\Payments\MethodsInterface;

final class MethodsFactory implements MethodsFactoryInterface
{
    public function createNew(): MethodsInterface
    {
        return new Methods();
    }
}
