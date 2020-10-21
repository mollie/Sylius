<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Order;

use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use Sylius\Component\Core\Model\AdjustmentInterface as BaseAdjustmentInterface;

interface AdjustmentInterface extends BaseAdjustmentInterface
{
    public const PERCENTAGE_ADJUSTMENT = Options::PERCENTAGE;
    public const FIXED_AMOUNT_ADJUSTMENT = Options::FIXED_FEE;
    public const PERCENTAGE_AND_AMOUNT_ADJUSTMENT = Options::FIXED_FEE_AND_PERCENTAGE;
    public const VOUCHER_ADJUSTMENT = 'voucher';
}
