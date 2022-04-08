<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Grid\Filter;

use Sylius\Component\Grid\Data\DataSourceInterface;
use Sylius\Component\Grid\Filtering\FilterInterface;

final class MollieSubscriptionState implements FilterInterface
{
    public function apply(
        DataSourceInterface $dataSource,
        string $name,
        $data,
        array $options
    ): void {
        if (false === array_key_exists('state', $data) || [] === $data['state']) {
            return;
        }

        $dataSource->restrict($dataSource->getExpressionBuilder()->in('state', $data['state']));
    }
}
