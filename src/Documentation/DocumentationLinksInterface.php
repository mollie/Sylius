<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Documentation;

interface DocumentationLinksInterface
{
    public function getSingleClickDoc(): string;

    public function getMollieComponentsDoc(): string;

    public function getPaymentMethodDoc(): string;

    public function getProfileIdDoc(): string;

    public function getApiKeyDoc(): string;
}
