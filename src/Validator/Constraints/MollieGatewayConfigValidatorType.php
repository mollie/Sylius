<?php

namespace SyliusMolliePlugin\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

class MollieGatewayConfigValidatorType extends Constraint
{
    public $minGreaterThanMaxMessage = 'sylius_mollie_plugin.form.error.min_greater_than_max';

    public $minLessThanMollieMinMessage = 'sylius_mollie_plugin.form.error.min_less_than_mollie_min';

    public $maxGreaterThanMollieMaxMessage = 'sylius_mollie_plugin.form.error.max_greater_than_mollie_max';
    
    public function validatedBy(): string
    {
        return MollieGatewayConfigValidator::class;
    }

    /** @return string[] */
    public function getTargets(): array
    {
        return [self::CLASS_CONSTRAINT];
    }
}