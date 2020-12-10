<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Type;

use BitBag\SyliusMolliePlugin\Entity\PaymentSurchargeFee;
use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\GreaterThan;

final class PaymentSurchargeFeeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('type', ChoiceType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.payment_fee_type',
                'choices' => ['bitbag_sylius_mollie_plugin.ui.no_fee' => 'no_fee'] + Options::getAvailablePaymentSurchargeFeeType(),
            ])
            ->add('fixedAmount', NumberType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.fix_amount_surcharge',
                'attr' => ['class' => 'bitbag-mollie-payment_fee-fixedAmount'],
                'constraints' => [
                    new GreaterThan([
                        'value' => 0,
                        'message' => 'bitbag_sylius_mollie_plugin.form.error.greater_than',
                        'groups' => ['sylius'],
                    ]),
                ],
            ])
            ->add('percentage', NumberType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.percentage_surcharge',
                'constraints' => [
                    new GreaterThan([
                        'value' => 0,
                        'message' => 'bitbag_sylius_mollie_plugin.form.error.greater_than',
                        'groups' => ['sylius'],
                    ]),
                ],
            ])
            ->add('surchargeLimit', NumberType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.surcharge_limit',
                'constraints' => [
                    new GreaterThan([
                        'value' => 0,
                        'message' => 'bitbag_sylius_mollie_plugin.form.error.greater_than',
                        'groups' => ['sylius'],
                    ]),
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefaults([
                'data_class' => PaymentSurchargeFee::class,
            ]);
    }
}
