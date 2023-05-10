<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Repository;

use SyliusMolliePlugin\Entity\GatewayConfigInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

interface MollieGatewayConfigRepositoryInterface extends RepositoryInterface
{
    public function findAllEnabledByGateway(GatewayConfigInterface $gateway): array;
}
