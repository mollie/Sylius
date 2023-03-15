<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver;

use SyliusMolliePlugin\Client\MollieApiClient;
use SyliusMolliePlugin\Entity\OrderInterface;

interface MollieApiClientKeyResolverInterface
{
    public function getClientWithKey(OrderInterface $order = null): MollieApiClient;
}
