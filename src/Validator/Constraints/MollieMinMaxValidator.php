<?php

declare(strict_types=1);

namespace SyliusMolliePlugin\Validator\Constraints;

use SyliusMolliePlugin\Entity\MollieMinMaxInterface;
use SyliusMolliePlugin\Repository\MollieGatewayConfigRepositoryInterface;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Webmozart\Assert\Assert;

final class MollieMinMaxValidator extends ConstraintValidator
{
    private const MINIMUM_FIELD = 'minimumAmount';
    private const MAXIMUM_FIELD = 'maximumAmount';
    private const FIELD_VALUE = 'value';

    /** @var MollieGatewayConfigRepositoryInterface */
    private MollieGatewayConfigRepositoryInterface $configRepository;

    public function __construct(
        MollieGatewayConfigRepositoryInterface $configRepository
    )
    {
        $this->configRepository = $configRepository;
    }

    public function validate($value, Constraint $constraint): void
    {
        if ($value instanceof MollieMinMaxInterface) {
            $this->validateAmountLimits($value, $constraint);
        }

        Assert::isInstanceOf($constraint, MollieMinMaxValidatorType::class);
    }

    private function validateAmountLimits(MollieMinMaxInterface $mollieMinMax, Constraint $constraint): void
    {
        $minAmount = $mollieMinMax->getMinimumAmount();
        $maxAmount = $mollieMinMax->getMaximumAmount();

        if ($minAmount !== null && $maxAmount !== null && $minAmount > $maxAmount) {
            $this->context->buildViolation($constraint->minGreaterThanMaxMessage)->atPath(self::MAXIMUM_FIELD)->addViolation();
        }

        $res = $this->configRepository->getExistingAmountLimitsById($mollieMinMax->getId());
        if (empty($res)) {
            return;
        }

        if ($minAmount !== null && !empty($res[0][self::MINIMUM_FIELD])) {
            $mollieMinAmount = $res[0][self::MINIMUM_FIELD][self::FIELD_VALUE];
            if ($mollieMinAmount !== null && $mollieMinAmount > $minAmount) {
                $this->context->buildViolation($constraint->minLessThanMollieMinMessage)
                    ->setParameter('%amount%', $mollieMinAmount)
                    ->atPath(self::MINIMUM_FIELD)
                    ->addViolation();
            }
        }

        if ($maxAmount !== null && !empty($res[0][self::MAXIMUM_FIELD])) {
            $mollieMaxAmount = $res[0][self::MAXIMUM_FIELD][self::FIELD_VALUE];
            if ($mollieMaxAmount !== null && $mollieMaxAmount < $maxAmount) {
                $this->context->buildViolation($constraint->maxGreaterThanMollieMaxMessage)
                    ->setParameter('%amount%', $mollieMaxAmount)
                    ->atPath(self::MAXIMUM_FIELD)
                    ->addViolation();
            }
        }
    }
}
