<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

use Doctrine\Common\Collections\Collection;
use Sylius\Bundle\PayumBundle\Model\GatewayConfigInterface as BaseGatewayConfigInterface;

interface GatewayConfigInterface extends BaseGatewayConfigInterface
{
    public function getMollieGatewayConfig(): ?Collection;

    public function setMollieGatewayConfig(?Collection $mollieGatewayConfig): void;

    public function getMethodByName(string $methodName): ?MollieGatewayConfigInterface;
}
