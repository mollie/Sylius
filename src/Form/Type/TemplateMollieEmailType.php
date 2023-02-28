<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Type;

use BitBag\SyliusMolliePlugin\Entity\TemplateMollieEmail;
use BitBag\SyliusMolliePlugin\Form\Type\Translation\TemplateMollieEmailTranslationType;
use BitBag\SyliusMolliePlugin\TemplateEmailTerms\Options;
use Sylius\Bundle\ResourceBundle\Form\Type\ResourceTranslationsType;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

final class TemplateMollieEmailType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('type', ChoiceType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.template_type',
                'choices' => Options::getAvailableEmailTemplate(),
            ])
            ->add('styleCss', TextareaType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.style_css',
            ])
            ->add('translations', ResourceTranslationsType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.template_contents',
                'entry_type' => TemplateMollieEmailTranslationType::class,
            ])
        ;
    }

    public function getBlockPrefix(): string
    {
        return 'bitbag_sylius_mollie_plugin_template_mollie_email';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TemplateMollieEmail::class,
            'constraints' => [
                new UniqueEntity(['fields' => ['type']]),
            ],
        ]);
    }
}
