<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Validator\Constraints;

use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Repository\PaymentMethodRepositoryInterface;
use Doctrine\Common\Collections\Collection;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator as ConstraintValidatorAlias;

final class PaymentMethodMollieChannelUniqueValidator extends ConstraintValidatorAlias
{
    /** @var PaymentMethodRepositoryInterface */
    private $paymentMethodRepository;

    public function __construct(PaymentMethodRepositoryInterface $paymentMethodRepository)
    {
        $this->paymentMethodRepository = $paymentMethodRepository;
    }

    public function validate($value, Constraint $constraint): void
    {
        if ($value instanceof PaymentMethodInterface && null !== $value->getCode()) {
            false === $this->isMolliePaymentMethod($value) ?: $this->validateMolliePaymentMethod($value, $constraint);
        }
    }

    private function validateMolliePaymentMethod(PaymentMethodInterface $paymentMethod, Constraint $constraint): void
    {
        $molliePaymentMethods = $this->paymentMethodRepository->findAllByFactoryNameAndCode($paymentMethod->getCode());

        if (0 === count($molliePaymentMethods)) {
            return;
        }

        /** @var PaymentMethodInterface $molliePaymentMethod */
        foreach ($molliePaymentMethods as $molliePaymentMethod) {
            if (true === $this->isTheSameChannel($paymentMethod->getChannels(), $molliePaymentMethod->getChannels())) {
                $this->context->buildViolation($constraint->message)->atPath('channels')->addViolation();
            }
        }
    }

    private function isTheSameChannel(Collection $newChannels, Collection $existingChannels): bool
    {
        foreach ($existingChannels as $existingChannel) {
            if ($newChannels->contains($existingChannel)) {
                return true;
            }
        }

        return false;
    }

    private function isMolliePaymentMethod(PaymentMethodInterface $paymentMethod): bool
    {
        /** @var GatewayConfigInterface $gateway */
        $gateway = $paymentMethod->getGatewayConfig();

        return $gateway->getFactoryName() === MollieGatewayFactory::FACTORY_NAME;
    }
}
