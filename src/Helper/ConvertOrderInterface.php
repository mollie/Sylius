<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Helper;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use Sylius\Component\Core\Model\OrderInterface;

interface ConvertOrderInterface
{
    public const PAYMENT_FEE = 'PAYMENT_FEE';
    public const PAYMENT_FEE_TYPE = 'surcharge';
    public const SHIPPING_TYPE = 'shipping_fee';
    public const SHIPPING_FEE = 'SHIPPING_FEE';
    public const PHYSICAL_TYPE = 'physical';

    public function convert(OrderInterface $order, array $details, int $divisor, MollieGatewayConfigInterface $method): array;
}
