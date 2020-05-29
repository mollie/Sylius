<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Entity;

use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Sylius\Bundle\PayumBundle\Model\GatewayConfig as BaseGatewayConfig;

class GatewayConfig extends BaseGatewayConfig implements GatewayConfigInterface
{
    use GatewayConfigTrait;

    public function __construct()
    {
        parent::__construct();

        $this->mollieGatewayConfig = new ArrayCollection();
    }
}
