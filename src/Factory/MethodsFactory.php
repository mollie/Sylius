<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Payments\Methods;
use BitBag\SyliusMolliePlugin\Payments\MethodsInterface;

final class MethodsFactory implements MethodsFactoryInterface
{
    public function createNew(): MethodsInterface
    {
        return new Methods();
    }
}
