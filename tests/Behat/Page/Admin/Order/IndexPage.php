<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Behat\Page\Admin\Order;

use Behat\Mink\Element\NodeElement;
use Sylius\Behat\Page\Admin\Order\IndexPage as BaseIndexPage;

final class IndexPage extends BaseIndexPage implements IndexPageInterface
{
    public function allOrdersHaveSameTotal(string $total): bool
    {
        $correctCells = 0;
        $ordersCount = $this->countOrders();
        $tableCells = $this->getDocument()->findAll('css', 'td');

        /** @var NodeElement $tableCell */
        foreach ($tableCells as $tableCell) {
            if ($total === $tableCell->getText()) {
                ++$correctCells;
            }
        }

        if ($ordersCount === $correctCells) {
            return true;
        }

        return false;
    }

    private function countOrders(): int
    {
        $table = $this->getElement('customer_orders');

        return count($table->findAll('css', 'tbody > tr'));
    }

    protected function getDefinedElements(): array
    {
        return array_merge(parent::getDefinedElements(), [
            'customer_orders' => '[data-test-grid-table]',
        ]);
    }
}
