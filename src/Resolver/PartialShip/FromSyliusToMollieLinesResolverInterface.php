<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver\PartialShip;

use SyliusMolliePlugin\DTO\PartialShipItems;
use Doctrine\Common\Collections\Collection;
use Mollie\Api\Resources\Order;

interface FromSyliusToMollieLinesResolverInterface
{
    public function resolve(Collection $units, Order $mollieOrder): PartialShipItems;
}
