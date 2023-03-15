<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Parser\Response;

use Mollie\Api\Exceptions\ApiException;

interface GuzzleNegativeResponseParserInterface
{
    public function parse(ApiException $exception): string;
}
