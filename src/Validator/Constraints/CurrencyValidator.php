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

use BitBag\SyliusMolliePlugin\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\MollieGatewayFactoryInterface;
use BitBag\SyliusMolliePlugin\MollieSubscriptionGatewayFactory;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Webmozart\Assert\Assert;

final class CurrencyValidator extends ConstraintValidator
{
    /**
     * @param PaymentMethodInterface $paymentMethod
     * @param Constraint|Currency $constraint
     *
     * {@inheritdoc}
     */
    public function validate($paymentMethod, Constraint $constraint): void
    {
        Assert::isInstanceOf($paymentMethod, PaymentMethodInterface::class);

        Assert::isInstanceOf($constraint, Currency::class);

        $gatewayConfig = $paymentMethod->getGatewayConfig();

        if (
            null === $gatewayConfig ||
            (
                $gatewayConfig->getFactoryName() !== MollieGatewayFactory::FACTORY_NAME &&
                $gatewayConfig->getFactoryName() !== MollieSubscriptionGatewayFactory::FACTORY_NAME
            )
        ) {
            return;
        }

        /** @var ChannelInterface $channel */
        foreach ($paymentMethod->getChannels() as $channel) {
            if (
                null === $channel->getBaseCurrency() ||
                false === in_array(strtoupper($channel->getBaseCurrency()->getCode()), MollieGatewayFactoryInterface::CURRENCIES_AVAILABLE)
            ) {
                $message = isset($constraint->message) ? $constraint->message : null;

                $this->context->buildViolation($message, [
                    '{{ currencies }}' => implode(', ', MollieGatewayFactoryInterface::CURRENCIES_AVAILABLE),
                ])->atPath('channels')->addViolation();

                return;
            }
        }
    }
}
