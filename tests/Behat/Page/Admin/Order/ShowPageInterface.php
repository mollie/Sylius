<?php


declare(strict_types=1);

namespace Tests\SyliusMolliePlugin\Behat\Page\Admin\Order;

use Sylius\Behat\Page\Admin\Order\ShowPageInterface as BaseShowPageInterface;

interface ShowPageInterface extends BaseShowPageInterface
{
    public function openLastOrderPage(): void;
}
