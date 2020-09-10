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

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Sylius\Bundle\PayumBundle\Model\GatewayConfig as BaseGatewayConfig;

class GatewayConfig extends BaseGatewayConfig implements GatewayConfigInterface
{
    /** @var MollieGatewayConfigInterface[] */
    private $mollieGatewayConfig;

    public function __construct()
    {
        parent::__construct();
        $this->mollieGatewayConfig = new ArrayCollection();
    }

    public function getMollieGatewayConfig(): ?Collection
    {
        return $this->mollieGatewayConfig;
    }

    public function setMollieGatewayConfig(?Collection $mollieGatewayConfig): void
    {
        $this->mollieGatewayConfig = $mollieGatewayConfig;
    }
}
