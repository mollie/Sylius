<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Behat\Client;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;

class TestMollieApiClient extends MollieApiClient
{
    public function __construct($httpClient = null, $httpAdapterPicker = null)
    {
        parent::__construct($httpClient, $httpAdapterPicker);
        $this->apiEndpoint = 'http://localhost:8218';
    }
}
