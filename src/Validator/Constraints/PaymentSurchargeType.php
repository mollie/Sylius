<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

final class PaymentSurchargeType extends Constraint
{
    public $message = 'bitbag_sylius_mollie_plugin.form.error.payment_surcharge_not_empty';

    public function validatedBy(): string
    {
        return PaymentSurchargeTypeValidator::class;
    }

    public function getTargets(): array
    {
        return [self::CLASS_CONSTRAINT];
    }
}
