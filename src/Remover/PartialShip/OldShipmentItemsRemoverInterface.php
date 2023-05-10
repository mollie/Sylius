<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Remover\PartialShip;

use SyliusMolliePlugin\DTO\PartialShipItems;
use Sylius\Component\Core\Model\OrderInterface;

interface OldShipmentItemsRemoverInterface
{
    public function remove(OrderInterface $order, PartialShipItems $shipItems): OrderInterface;
}
