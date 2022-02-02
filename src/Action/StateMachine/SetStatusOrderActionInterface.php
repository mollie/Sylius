<?php

namespace BitBag\SyliusMolliePlugin\Action\StateMachine;

use Mollie\Api\Resources\Order;

interface SetStatusOrderActionInterface
{
    public function execute(Order $order): void;
}
