<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

trait OrderTrait
{
    /** @var bool */
    protected $abandonedEmail = false;

    public function isAbandonedEmail(): bool
    {
        return $this->abandonedEmail;
    }

    public function setAbandonedEmail(bool $abandonedEmail): void
    {
        $this->abandonedEmail = $abandonedEmail;
    }
}
