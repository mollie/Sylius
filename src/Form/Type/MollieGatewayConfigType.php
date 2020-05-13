<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Type;

use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use BitBag\SyliusMolliePlugin\Validator\Constraints\PaymentSurchargeType;
use Sylius\Bundle\ResourceBundle\Form\Type\AbstractResourceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;

final class MollieGatewayConfigType extends AbstractResourceType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('enabled', CheckboxType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.enable',
            ])
            ->add('name', TextType::class, [
                'required' => true,
                'label' => 'bitbag_sylius_mollie_plugin.ui.payment_name',
                'constraints' => [
                    new NotBlank([
                        'message' => 'bitbag_sylius_mollie_plugin.payment_method.not_blank',
                        'groups' => ['sylius'],
                    ]),
                ],
            ])
            ->add('paymentType', ChoiceType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.payment_type',
                'choices' => Options::getAvailablePaymentType(),
            ])
            ->add('paymentSurchargeFee', PaymentSurchargeFeeType::class, [
                'label' => false,
                'constraints' => [new PaymentSurchargeType(['groups' => 'sylius'])],
            ])
            ->add('customizeMethodImage', CustomizeMethodImageType::class, [
                'label' => false,
            ])
            ->add('countryLevel', CountryType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.country_level_restriction',
                'required' => false,
                'multiple' => true,
            ])
            ->add('orderExpiration', ChoiceType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.order_expiration_days',
                'required' => false,
                'choices' => array_combine(
                    range(1, 100, 1),
                    range(1, 100, 1)
                ),
            ]);
    }

    public function getBlockPrefix(): string
    {
        return 'bitbag_mollie_payment_method';
    }
}
