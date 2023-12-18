<?php

declare(strict_types=1);

namespace SyliusMolliePlugin\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

final class MollieMinMaxValidatorType extends Constraint
{
    public string $minGreaterThanMaxMessage = 'sylius_mollie_plugin.form.error.min_greater_than_max';
    
    public string $minLessThanMollieMinMessage = 'sylius_mollie_plugin.form.error.min_less_than_mollie_min';
    
    public string $maxGreaterThanMollieMaxMessage = 'sylius_mollie_plugin.form.error.max_greater_than_mollie_max';

    public function validatedBy(): string
    {
        return MollieMinMaxValidator::class;
    }

    /** @return string[] */
    public function getTargets(): array
    {
        return [self::CLASS_CONSTRAINT];
    }
}
