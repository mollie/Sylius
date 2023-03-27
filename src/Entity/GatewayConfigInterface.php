<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Entity;

use Doctrine\Common\Collections\Collection;
use Sylius\Bundle\PayumBundle\Model\GatewayConfigInterface as BaseGatewayConfigInterface;

interface GatewayConfigInterface extends BaseGatewayConfigInterface
{
    public function getMollieGatewayConfig(): ?Collection;

    public function setMollieGatewayConfig(?Collection $mollieGatewayConfig): void;

    public function getMethodByName(string $methodName): ?MollieGatewayConfigInterface;
}
