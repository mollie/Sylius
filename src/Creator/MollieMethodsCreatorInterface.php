<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Creator;

use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use Mollie\Api\Types\PaymentMethod;

interface MollieMethodsCreatorInterface
{
    /** @var string[] */
    public const  PARAMETERS = [
        'include' => 'issuers',
        'includeWallets' => 'applepay',
        'resource' => 'orders',
    ];

    public const  PARAMETERS_RECURRING = [
        'include' => 'issuers',
        'sequenceType' => 'recurring',
    ];


    /** @var string[] */
    public const UNSUPPORTED_METHODS = [
        PaymentMethod::INGHOMEPAY,
    ];

    /** @var string[] */
    public const RECURRING_PAYMENT_SUPPORTED_METHODS = [
        PaymentMethod::DIRECTDEBIT,
        PaymentMethod::CREDITCARD,
    ];

    public const RECURRING_PAYMENT_INITIAL_METHODS = [
        PaymentMethod::BANCONTACT,
        PaymentMethod::BELFIUS,
        PaymentMethod::EPS,
        PaymentMethod::GIROPAY,
        PaymentMethod::IDEAL,
        PaymentMethod::KBC,
        PaymentMethod::MYBANK,
        PaymentMethod::SOFORT,
    ];

    public function create(): void;

    public function createForGateway(GatewayConfigInterface $gateway): void;
}
