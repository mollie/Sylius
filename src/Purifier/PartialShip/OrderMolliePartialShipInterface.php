<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Purifier\PartialShip;

use Sylius\Component\Core\Model\OrderInterface;

interface OrderMolliePartialShipInterface
{
    public function partialShip(OrderInterface $order): void;
}
