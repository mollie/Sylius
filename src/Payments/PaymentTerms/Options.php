<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Payments\PaymentTerms;

use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Payments\Methods\MealVoucher;
use Mollie\Api\Types\PaymentMethod;

final class Options
{
    public const ORDER_API = 'Orders API';

    public const ORDER_API_VALUE = 'ORDER_API';

    public const PAYMENT_API = 'Payments API';

    public const PAYMENT_API_VALUE = 'PAYMENT_API';

    public const SUBSCRIPTIONS_API = 'Subscriptions API';

    public const PERCENTAGE = 'percentage';

    public const FIXED_FEE = 'fixed_fee';

    public const FIXED_FEE_AND_PERCENTAGE = 'fixed_fee_and_percentage';

    public const LOG_NOTHING = 'bitbag_sylius_mollie_plugin.ui.nothing_log';

    public const LOG_ERRORS = 'bitbag_sylius_mollie_plugin.ui.errors';

    public const LOG_EVERYTHING = 'bitbag_sylius_mollie_plugin.ui.everything';

    public const LOG_INFO = 'bitbag_sylius_mollie_plugin.ui.info';

    public static function getAvailablePaymentType(): array
    {
        return [
            self::PAYMENT_API => self::PAYMENT_API_VALUE,
            self::ORDER_API => self::ORDER_API_VALUE,
        ];
    }

    public static function getAvailablePaymentSurchargeFeeType(): array
    {
        return [
            self::PERCENTAGE => self::PERCENTAGE,
            self::FIXED_FEE => self::FIXED_FEE,
            self::FIXED_FEE_AND_PERCENTAGE => self::FIXED_FEE_AND_PERCENTAGE,
        ];
    }

    public static function getDebugLevels(): array
    {
        return [
            self::LOG_NOTHING => MollieLoggerActionInterface::LOG_DISABLED,
            self::LOG_ERRORS => MollieLoggerActionInterface::LOG_ERRORS,
            self::LOG_EVERYTHING => MollieLoggerActionInterface::LOG_EVERYTHING,
        ];
    }

    public static function getLogLevels(): array
    {
        return [
            self::LOG_INFO => MollieLoggerActionInterface::LOG_ERRORS,
            self::LOG_ERRORS => MollieLoggerActionInterface::LOG_EVERYTHING,
        ];
    }

    public static function getOnlyOrderAPIMethods(): array
    {
        return [
            PaymentMethod::KLARNA_PAY_NOW,
            PaymentMethod::KLARNA_PAY_LATER,
            PaymentMethod::KLARNA_SLICE_IT,
            MealVoucher::MEAL_VOUCHERS,
        ];
    }
}
