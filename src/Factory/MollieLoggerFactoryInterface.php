<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Entity\MollieLoggerInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

interface MollieLoggerFactoryInterface extends FactoryInterface
{
    public function create(
        string $message,
        int $logLevel,
        int $errorCode
    ): MollieLoggerInterface;
}
