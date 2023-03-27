<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Action\Api;

use SyliusMolliePlugin\Client\MollieApiClient;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Exception\UnsupportedApiException;

abstract class BaseApiAwareAction implements ActionInterface, ApiAwareInterface
{
    /** @var MollieApiClient */
    protected $mollieApiClient;

    public function setApi($mollieApiClient): void
    {
        if (false === $mollieApiClient instanceof MollieApiClient) {
            throw new UnsupportedApiException('Not supported.Expected an instance of ' . MollieApiClient::class);
        }

        $this->mollieApiClient = $mollieApiClient;
    }
}
