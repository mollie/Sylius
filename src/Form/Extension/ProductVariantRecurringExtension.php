<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Extension;

use BitBag\SyliusMolliePlugin\Entity\ProductVariantInterface;
use BitBag\SyliusMolliePlugin\Form\Type\MollieIntervalType;
use Sylius\Bundle\ProductBundle\Form\Type\ProductVariantType as ProductVariantFormType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsNull;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\NotNull;
use Symfony\Component\Validator\Constraints\Range;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\Valid;

final class ProductVariantRecurringExtension extends AbstractTypeExtension
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('recurring', CheckboxType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.form.product_variant.recurring',
                'help' => 'bitbag_sylius_mollie_plugin.form.product_variant.recurring_help',
                'required' => false,
                'constraints' => [
                    new NotNull()
                ]
            ])
            ->add('times', NumberType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.form.product_variant.times',
                'help' => 'bitbag_sylius_mollie_plugin.form.product_variant.times_help',
                'required' => false,
                'constraints' => [
                    new Range([
                        'min' => 2,
                        'minMessage' => 'bitbag_sylius_mollie_plugin.times.min_range',
                        'groups' => ['recurring_product_variant']
                    ]),
                    new IsNull([
                        'groups' => 'non_recurring_product_variant'
                    ])
                ]
            ])
            ->add('interval', MollieIntervalType::class, [
                'label' => false,
                'required' => false,
                'attr' => [
                    'class' => 'inline fields'
                ],
                'constraints' => [
                    new Valid([
                        'groups' => ['recurring_product_variant'],
                    ]),
                    new NotBlank([
                        'message' => 'bitbag_sylius_mollie_plugin.interval.not_blank',
                        'groups' => ['recurring_product_variant'],
                    ]),
                ],
            ])
        ;
    }

    public static function getExtendedTypes(): array
    {
        return [ProductVariantFormType::class];
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefault('validation_groups', function (FormInterface $form) {
            $groups = ['sylius'];
            $data = $form->getData();

            if (false === $data instanceof ProductVariantInterface) {
                return $groups;
            }

            if (false === $data->isRecurring()) {
                $groups[] = 'non_recurring_product_variant';

                return $groups;
            }

            $groups[] = 'recurring_product_variant';

            return $groups;
        });
    }

}
