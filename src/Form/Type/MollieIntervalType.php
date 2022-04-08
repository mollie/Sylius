<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Type;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionConfigurationInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\GreaterThan;
use Symfony\Component\Validator\Constraints\NotBlank;

final class MollieIntervalType extends AbstractType
{
    private DataTransformerInterface $transformer;

    public function __construct(DataTransformerInterface $transformer)
    {
        $this->transformer = $transformer;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('amount', NumberType::class, [
            'error_bubbling' => false,
            'constraints' => [
                new NotBlank([
                    'groups' => ['recurring_product_variant'],
                ]),
                new GreaterThan([
                    'value' => 0,
                    'groups' => ['recurring_product_variant'],
                ]),
            ],
        ]);
        $builder->add('step', ChoiceType::class, [
            'choices' => array_combine(
                MollieSubscriptionConfigurationInterface::SUPPORTED_INTERVAL_STEPS,
                MollieSubscriptionConfigurationInterface::SUPPORTED_INTERVAL_STEPS
            ),
            'label' => false,
            'error_bubbling' => false,
            'choice_label' => function (string $value): string {
                return sprintf(
                    'bitbag_sylius_mollie_plugin.form.product_variant.interval_configuration.steps.%s',
                    $value
                );
            },
        ]);
        $builder->addViewTransformer($this->transformer);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'compound' => true,
            'label_format' => 'bitbag_sylius_mollie_plugin.form.product_variant.interval_configuration.%name%',
            'error_bubbling' => true,
        ]);
    }
}
