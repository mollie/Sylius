<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

final class LiveApiKeyIsNotBlank extends Constraint
{
    /** @var string $message */
    public $message = 'bitbag_sylius_mollie_plugin.api_key.not_blank';

    /** @var string $field */
    public $field;

    public function getTargets(): string
    {
        return self::CLASS_CONSTRAINT;
    }

    public function validatedBy(): string
    {
        return parent::validatedBy();
    }
}
