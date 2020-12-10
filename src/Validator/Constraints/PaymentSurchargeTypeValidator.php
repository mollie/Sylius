<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Validator\Constraints;

use BitBag\SyliusMolliePlugin\Entity\PaymentSurchargeFeeInterface;
use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Webmozart\Assert\Assert;

final class PaymentSurchargeTypeValidator extends ConstraintValidator
{
    public const PERCENTAGE_FIELD = 'percentage';
    public const FIXED_AMOUNT_FIELD = 'fixedAmount';

    public function validate($value, Constraint $constraint): void
    {
        if ($value instanceof PaymentSurchargeFeeInterface) {
            $this->validatePaymentSurcharge($value, $constraint);
        }

        Assert::isInstanceOf($constraint, PaymentSurchargeType::class);
    }

    private function validatePaymentSurcharge(PaymentSurchargeFeeInterface $paymentSurchargeFee, Constraint $constraint): void
    {
        if ($paymentSurchargeFee->getType() === Options::PERCENTAGE && null === $paymentSurchargeFee->getPercentage()) {
            $this->createNegativeResponse($constraint, self::PERCENTAGE_FIELD);
        }
        if ($paymentSurchargeFee->getType() === Options::FIXED_FEE && null === $paymentSurchargeFee->getFixedAmount()) {
            $this->createNegativeResponse($constraint, self::FIXED_AMOUNT_FIELD);
        }
        if ($paymentSurchargeFee->getType() === Options::FIXED_FEE_AND_PERCENTAGE && null === $paymentSurchargeFee->getPercentage()) {
            $this->createNegativeResponse($constraint, self::PERCENTAGE_FIELD);
        }
        if ($paymentSurchargeFee->getType() === Options::FIXED_FEE_AND_PERCENTAGE && null === $paymentSurchargeFee->getFixedAmount()) {
            $this->createNegativeResponse($constraint, self::FIXED_AMOUNT_FIELD);
        }
    }

    private function createNegativeResponse(Constraint $constraint, string $filedName): void
    {
        $this->context->buildViolation($constraint->message)->atPath($filedName)->addViolation();
    }
}
