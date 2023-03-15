<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Factory;

use SyliusMolliePlugin\Entity\MollieLoggerInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

interface MollieLoggerFactoryInterface extends FactoryInterface
{
    public function create(
        string $message,
        int $logLevel,
        int $errorCode
    ): MollieLoggerInterface;
}
