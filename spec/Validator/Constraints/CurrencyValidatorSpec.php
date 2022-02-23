<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Validator\Constraints;

use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use BitBag\SyliusMolliePlugin\Validator\Constraints\Currency;
use BitBag\SyliusMolliePlugin\Validator\Constraints\CurrencyValidator;
use Doctrine\Common\Collections\ArrayCollection;
use Payum\Core\Model\GatewayConfigInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Sylius\Component\Currency\Model\CurrencyInterface;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Context\ExecutionContextInterface;
use Symfony\Component\Validator\Violation\ConstraintViolationBuilderInterface;

final class CurrencyValidatorSpec extends ObjectBehavior
{
    function let(ExecutionContextInterface $context): void
    {
        $this->initialize($context);
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(CurrencyValidator::class);
    }

    function it_extends_constraint_validator_class(): void
    {
        $this->shouldHaveType(ConstraintValidator::class);
    }

    function it_validates(
        PaymentMethodInterface $paymentMethod,
        GatewayConfigInterface $gatewayConfig,
        ChannelInterface $channel,
        CurrencyInterface $currency
    ): void {
        $currencyConstraint = new Currency();
        $gatewayConfig->getFactoryName()->willReturn(MollieGatewayFactory::FACTORY_NAME);
        $paymentMethod->getGatewayConfig()->willReturn($gatewayConfig);

        $this->validate($paymentMethod, $currencyConstraint);
    }

    function it_validates_with_null_base_currency(
        PaymentMethodInterface $paymentMethod,
        GatewayConfigInterface $gatewayConfig,
        ChannelInterface $channel,
        ExecutionContextInterface $context,
        ConstraintViolationBuilderInterface $builder
    ): void {
        $constraint = new Currency();
        $gatewayConfig->getFactoryName()->willReturn(MollieSubscriptionGatewayFactory::FACTORY_NAME);
        $paymentMethod->getGatewayConfig()->willReturn($gatewayConfig);
        $paymentMethod->getChannels()->willReturn(new ArrayCollection(
            [$channel->getWrappedObject()]
        ));

        $channel->getBaseCurrency()->willReturn(null);

        $constraint->message = 'test';
        $message = $constraint->message;
        $context->buildViolation($message, [
            '{{ currencies }}' => implode(', ', MollieSubscriptionGatewayFactory::CURRENCIES_AVAILABLE),
        ])->willReturn($builder);
        $builder->atPath('channels')->willReturn($builder);
        $builder->addViolation()->shouldBeCalled();

        $this->validate($paymentMethod, $constraint);
    }

    function it_validates_with_unsupported_currency(
        PaymentMethodInterface $paymentMethod,
        GatewayConfigInterface $gatewayConfig,
        ChannelInterface $channel,
        ExecutionContextInterface $context,
        ConstraintViolationBuilderInterface $builder,
        CurrencyInterface $currency
    ): void {
        $constraint = new Currency();
        $gatewayConfig->getFactoryName()->willReturn(MollieSubscriptionGatewayFactory::FACTORY_NAME);
        $paymentMethod->getGatewayConfig()->willReturn($gatewayConfig);
        $paymentMethod->getChannels()->willReturn(new ArrayCollection(
            [$channel->getWrappedObject()]
        ));

        $channel->getBaseCurrency()->willReturn($currency);
        $currency->getCode()->willReturn('usd');

        $constraint->message = 'test';
        $message = $constraint->message;
        $context->buildViolation($message, [
            '{{ currencies }}' => implode(', ', MollieSubscriptionGatewayFactory::CURRENCIES_AVAILABLE),
        ])->willReturn($builder);
        $builder->atPath('channels')->willReturn($builder);
        $builder->addViolation()->shouldBeCalled();

        $this->validate($paymentMethod, $constraint);
    }

    function it_validates_with_supported_currency(
        PaymentMethodInterface $paymentMethod,
        GatewayConfigInterface $gatewayConfig,
        ChannelInterface $channel,
        ExecutionContextInterface $context,
        ConstraintViolationBuilderInterface $builder,
        CurrencyInterface $currency
    ): void {
        $constraint = new Currency();
        $gatewayConfig->getFactoryName()->willReturn(MollieSubscriptionGatewayFactory::FACTORY_NAME);
        $paymentMethod->getGatewayConfig()->willReturn($gatewayConfig);
        $paymentMethod->getChannels()->willReturn(new ArrayCollection(
            [$channel->getWrappedObject()]
        ));
        $channel->getBaseCurrency()->willReturn($currency);
        $currency->getCode()->willReturn('eur');

        $context->buildViolation('',[])->willReturn($builder);
        $builder->addViolation()->shouldNotBeCalled();

        $this->validate($paymentMethod, $constraint);
    }

    function it_validates_with_null_gateway_config(
        PaymentMethodInterface $paymentMethod,
        GatewayConfigInterface $gatewayConfig,
        ExecutionContextInterface $context,
        ConstraintViolationBuilderInterface $builder
    ): void {
        $currencyConstraint = new Currency();
        $gatewayConfig->getFactoryName()->willReturn(MollieSubscriptionGatewayFactory::FACTORY_NAME);
        $paymentMethod->getGatewayConfig()->willReturn(null);
        $context->buildViolation('',[])->willReturn($builder);
        $builder->addViolation()->shouldNotBeCalled();
        $this->validate($paymentMethod, $currencyConstraint);
    }

    function it_validates_with_gateway_config_factory_name_else_than_mollie_subscription(
        PaymentMethodInterface $paymentMethod,
        GatewayConfigInterface $gatewayConfig,
        ExecutionContextInterface $context,
        ConstraintViolationBuilderInterface $builder
    ): void {
        $currencyConstraint = new Currency();
        $gatewayConfig->getFactoryName()->willReturn(MollieGatewayFactory::FACTORY_NAME);
        $paymentMethod->getGatewayConfig()->willReturn($gatewayConfig);
        $gatewayConfig->getFactoryName()->willReturn('definitely_not_mollie_subscription');
        $context->buildViolation('',[])->willReturn($builder);
        $builder->addViolation()->shouldNotBeCalled();
        $this->validate($paymentMethod, $currencyConstraint);
    }
}
