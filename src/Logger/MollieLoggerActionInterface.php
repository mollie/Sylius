<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Logger;

use Symfony\Component\HttpFoundation\Response;

interface MollieLoggerActionInterface
{
    public const NOTICE = 1;
    public const ERROR = 2;

    public const LOG_DISABLED = 0;
    public const LOG_ERRORS = 1;
    public const LOG_EVERYTHING = 2;

    public function addLog(string $message, int $logLevel = self::NOTICE, int $errorCode = Response::HTTP_OK): void;

    public function addNegativeLog(string $message, int $logLevel = self::ERROR, int $errorCode = Response::HTTP_INTERNAL_SERVER_ERROR): void;
}
