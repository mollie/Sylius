<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Form\Extension;

use BitBag\SyliusMolliePlugin\Form\Extension\CompleteTypeExtension;
use BitBag\SyliusMolliePlugin\Form\Type\DirectDebitType;
use Payum\Core\Model\GatewayConfigInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Valid;

final class CompleteTypeExtensionSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(CompleteTypeExtension::class);
        $this->shouldHaveType(AbstractTypeExtension::class);
    }

    function it_builds_form(
        FormBuilderInterface $builder,
        OrderInterface $order,
        PaymentInterface $payment,
        PaymentMethodInterface $method,
        GatewayConfigInterface $config
    ): void {
        $builder->getData()->willReturn($order);

        $order->getLastPayment()->willReturn($payment);

        $payment->getMethod()->willReturn($method);
        $payment->getDetails()->willReturn([
            'molliePaymentMethods' => 'directdebit'
        ]);

        $method->getGatewayConfig()->willReturn($config);
        $config->getFactoryName()->willReturn('mollie_subscription');

        $this->buildForm($builder, []);

        $builder
            ->add('directDebit', DirectDebitType::class, [
                'mapped' => false,
                'validation_groups' => ['sylius'],
                'constraints' => [
                    new Valid(),
                ],
            ])->shouldBeCalledOnce();



    }

}
