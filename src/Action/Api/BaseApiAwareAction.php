<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action\Api;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Exception\UnsupportedApiException;

abstract class BaseApiAwareAction implements ActionInterface, ApiAwareInterface
{
    /**
     * @var MollieApiClient
     */
    protected $mollieApiClient;

    /**
     * {@inheritdoc}
     */
    public function setApi($mollieApiClient): void
    {
        if (false === $mollieApiClient instanceof \Mollie_API_Client) {
            throw new UnsupportedApiException('Not supported.Expected an instance of ' . \Mollie_API_Client::class);
        }

        $this->mollieApiClient = $mollieApiClient;
    }
}
