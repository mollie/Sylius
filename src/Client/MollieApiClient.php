<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Client;

use BitBag\SyliusMolliePlugin\BitBagSyliusMolliePlugin;
use Mollie\Api\MollieApiClient as BaseMollieApiClient;
use function League\Uri\resolve;

class MollieApiClient extends BaseMollieApiClient
{
    /** @var array */
    protected $config = [];

    /** @var bool */
    protected $isRecurringSubscription = false;

    /** @var string */
    protected $version;

    public function getVersion(): string
    {
        return BitBagSyliusMolliePlugin::VERSION;
    }

    /** @param array $config */
    public function setConfig(array $config): void
    {
        $this->config = $config;
    }

    public function getConfig(): array
    {
        return $this->config;
    }

    public function setIsRecurringSubscription(bool $isRecurringSubscription): void
    {
        $this->isRecurringSubscription = $isRecurringSubscription;
    }

    public function isRecurringSubscription(): bool
    {
        return $this->isRecurringSubscription;
    }
}
