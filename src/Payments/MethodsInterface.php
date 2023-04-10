<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Payments;

use SyliusMolliePlugin\Payments\Methods\ApplePay;
use SyliusMolliePlugin\Payments\Methods\Bancontact;
use SyliusMolliePlugin\Payments\Methods\BankTransfer;
use SyliusMolliePlugin\Payments\Methods\Belfius;
use SyliusMolliePlugin\Payments\Methods\CreditCard;
use SyliusMolliePlugin\Payments\Methods\DirectDebit;
use SyliusMolliePlugin\Payments\Methods\Eps;
use SyliusMolliePlugin\Payments\Methods\GiftCard;
use SyliusMolliePlugin\Payments\Methods\Giropay;
use SyliusMolliePlugin\Payments\Methods\Ideal;
use SyliusMolliePlugin\Payments\Methods\In3;
use SyliusMolliePlugin\Payments\Methods\Kbc;
use SyliusMolliePlugin\Payments\Methods\Klarnapaylater;
use SyliusMolliePlugin\Payments\Methods\KlarnaPayNow;
use SyliusMolliePlugin\Payments\Methods\Klarnasliceit;
use SyliusMolliePlugin\Payments\Methods\MealVoucher;
use SyliusMolliePlugin\Payments\Methods\MyBank;
use SyliusMolliePlugin\Payments\Methods\PayPal;
use SyliusMolliePlugin\Payments\Methods\Przelewy24;
use SyliusMolliePlugin\Payments\Methods\SofortBanking;
use Mollie\Api\Resources\Method;

interface MethodsInterface
{
    public const GATEWAYS = [
        ApplePay::class,
        Bancontact::class,
        BankTransfer::class,
        Belfius::class,
        CreditCard::class,
        Eps::class,
        GiftCard::class,
        Giropay::class,
        Ideal::class,
        Kbc::class,
        Klarnapaylater::class,
        Klarnasliceit::class,
        KlarnaPayNow::class,
        MyBank::class,
        PayPal::class,
        Przelewy24::class,
        SofortBanking::class,
        MealVoucher::class,
        DirectDebit::class,
        In3::class
    ];

    public function getAllEnabled(): array;

    public function add(Method $mollieMethod): void;
}
