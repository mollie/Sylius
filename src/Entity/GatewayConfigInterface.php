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
use Sylius\Bundle\PayumBundle\Model\GatewayConfigInterface as BaseGatewayConfigInterface;

interface GatewayConfigInterface extends BaseGatewayConfigInterface
{
    public function getMollieGatewayConfig(): ?Collection;

    public function setMollieGatewayConfig(?Collection $mollieGatewayConfig): void;
}
