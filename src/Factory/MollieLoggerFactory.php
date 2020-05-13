<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Entity\MollieLoggerInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class MollieLoggerFactory implements MollieLoggerFactoryInterface
{
    /** @var FactoryInterface */
    private $factory;

    public function __construct(FactoryInterface $factory)
    {
        $this->factory = $factory;
    }

    public function createNew(): MollieLoggerInterface
    {
        return $this->factory->createNew();
    }

    public function create(string $message, int $logLevel, int $errorCode): MollieLoggerInterface
    {
        $mollieLogger = $this->createNew();
        $mollieLogger->setDateTime(new \DateTime('now'));
        $mollieLogger->setLevel($logLevel);
        $mollieLogger->setErrorCode($errorCode);
        $mollieLogger->setMessage($message);

        return $mollieLogger;
    }
}
