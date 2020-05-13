<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Controller\Action\Shop;

use BitBag\SyliusMolliePlugin\Order\AdjustmentInterface;

interface PaymentFeeCalculateActionInterface
{
    public const PAYMENTS_FEE_METHOD = [
        AdjustmentInterface::PERCENTAGE_ADJUSTMENT,
        AdjustmentInterface::FIXED_AMOUNT_ADJUSTMENT,
        AdjustmentInterface::PERCENTAGE_AND_AMOUNT_ADJUSTMENT,
    ];
}
