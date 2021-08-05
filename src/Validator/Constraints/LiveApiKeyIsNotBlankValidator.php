<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Validator\Constraints;

use BitBag\SyliusMolliePlugin\Exceptions\MissingFieldException;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;

final class LiveApiKeyIsNotBlankValidator extends ConstraintValidator
{
    public function validate($value, Constraint $constraint)
    {
        if (!$constraint instanceof LiveApiKeyIsNotBlank) {
            throw new UnexpectedTypeException($constraint, LiveApiKeyIsNotBlank::class);
        }

        if (!array_key_exists('environment', $value)) {
            throw new MissingFieldException('environment');
        }

        if (!array_key_exists('api_key_live', $value)) {
            throw new MissingFieldException('api_key_live');
        }

        if (true === $value['environment'] && empty($value['api_key_live'])) {
            $this->context->buildViolation($constraint->message)
                ->atPath(sprintf('[%s]', $constraint->field))
                ->addViolation();
        }
    }
}
