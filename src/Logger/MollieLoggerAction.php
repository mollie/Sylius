<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Logger;

use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Factory\MollieLoggerFactoryInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\HttpFoundation\Response;

final class MollieLoggerAction implements MollieLoggerActionInterface
{
    /** @var MollieLoggerFactoryInterface */
    private $loggerFactory;

    /** @var RepositoryInterface */
    private $repository;

    /** @var RepositoryInterface */
    private $gatewayRepository;

    public function __construct(
        MollieLoggerFactoryInterface $loggerFactory,
        RepositoryInterface $repository,
        RepositoryInterface $gatewayRepository
    ) {
        $this->loggerFactory = $loggerFactory;
        $this->repository = $repository;
        $this->gatewayRepository = $gatewayRepository;
    }

    public function addLog(string $message, int $logLevel = self::NOTICE, int $errorCode = Response::HTTP_OK): void
    {
        if (false === $this->canSaveLog($logLevel)) {
            return;
        }

        $logger = $this->loggerFactory->create($message, $logLevel, $errorCode);
        $this->repository->add($logger);
    }

    public function addNegativeLog(string $message, int $logLevel = self::ERROR, int $errorCode = Response::HTTP_INTERNAL_SERVER_ERROR): void
    {
        if (false === $this->canSaveLog($logLevel)) {
            return;
        }

        $logger = $this->loggerFactory->create($message, $logLevel, $errorCode);
        $this->repository->add($logger);
    }

    private function canSaveLog(int $logLevel): bool
    {
        /** @var GatewayConfigInterface $gatewayConfig */
        $gatewayConfig = $this->gatewayRepository->findOneBy(['factoryName' => MollieGatewayFactory::FACTORY_NAME]);
        $level = $gatewayConfig->getConfig()['loggerLevel'];

        if ($level === MollieLoggerActionInterface::LOG_EVERYTHING) {
            return true;
        }

        if ($level === MollieLoggerActionInterface::LOG_ERRORS && $logLevel === self::ERROR) {
            return true;
        }

        return false;
    }
}
