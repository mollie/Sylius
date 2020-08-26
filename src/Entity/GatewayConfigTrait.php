<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

use Doctrine\Common\Collections\Collection;

trait GatewayConfigTrait
{
    /** @var Collection|MollieGatewayConfigInterface[] */
    protected $mollieGatewayConfig;

    public function getMollieGatewayConfig(): ?Collection
    {
        return $this->mollieGatewayConfig;
    }

    public function setMollieGatewayConfig(?Collection $mollieGatewayConfig): void
    {
        $this->mollieGatewayConfig = $mollieGatewayConfig;
    }

    public function getMethodByName(string $methodName): ?MollieGatewayConfigInterface
    {
        $method = $this->mollieGatewayConfig->filter(function (MollieGatewayConfigInterface  $mollieGatewayConfig) use ($methodName) {
            return $mollieGatewayConfig->getMethodId() === $methodName;
        });

        return $method->isEmpty() ? null : $method->first();
    }
}
