<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Client;

use BitBag\SyliusMolliePlugin\BitBagSyliusMolliePlugin;
use Mollie\Api\MollieApiClient as BaseMollieApiClient;

class MollieApiClient extends BaseMollieApiClient
{
    /** @var array */
    protected $config = [];

    /** @var bool */
    protected $isRecurringSubscription = false;

    public function getVersion(): string
    {
        return BitBagSyliusMolliePlugin::VERSION;
    }

    public function getUserAgentToken(): string
    {
        return BitBagSyliusMolliePlugin::USER_AGENT_TOKEN;
    }

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
