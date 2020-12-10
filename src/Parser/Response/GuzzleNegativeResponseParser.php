<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Parser\Response;

use Mollie\Api\Exceptions\ApiException;

final class GuzzleNegativeResponseParser implements GuzzleNegativeResponseParserInterface
{
    public function parse(ApiException $exception): string
    {
        if ($exception->hasResponse()) {
            $response = $exception->getResponse();
            $responseBodyAsString = json_decode((string) $response->getBody(), true);
            if (isset($responseBodyAsString['extra']['failureReason'])) {
                return $responseBodyAsString['extra']['failureReason'];
            }
        }

        return '';
    }
}
