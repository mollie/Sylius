<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Transitions\PartialShip;

final class ShipmentTransitions
{
    public const GRAPH = 'sylius_shipment';

    public const TRANSITION_CREATE_AND_SHIP = 'create_and_ship';

    private function __construct()
    {
    }
}
