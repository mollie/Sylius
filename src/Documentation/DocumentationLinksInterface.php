<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Documentation;

interface DocumentationLinksInterface
{
    public function getSingleClickDoc(): string;

    public function getMollieComponentsDoc(): string;

    public function getPaymentMethodDoc(): string;

    public function getProfileIdDoc(): string;

    public function getApiKeyDoc(): string;
}
