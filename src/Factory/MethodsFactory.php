<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

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
