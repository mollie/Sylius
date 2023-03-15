<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Creator;

interface AbandonedPaymentLinkCreatorInterface
{
    public function create(): void;
}
