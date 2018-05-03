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

class MollieApiClient extends \Mollie_API_Client
{
    /**
     * @var array
     */
    protected $config = [];

    /**
     * @var bool
     */
    protected $isRecurringSubscription = false;

    /**
     * @param array $config
     */
    public function setConfig(array $config): void
    {
        $this->config = $config;
    }

    /**
     * @return array
     */
    public function getConfig(): array
    {
        return $this->config;
    }

    /**
     * @param bool $isRecurringSubscription
     */
    public function setIsRecurringSubscription(bool $isRecurringSubscription): void
    {
        $this->isRecurringSubscription = $isRecurringSubscription;
    }

    /**
     * @return bool
     */
    public function isRecurringSubscription(): bool
    {
        return $this->isRecurringSubscription;
    }
}
