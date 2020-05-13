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

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Range;
use Symfony\Component\Validator\Constraints\Regex;

final class MollieSubscriptionGatewayConfigurationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('times', NumberType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.times',
                'required' => false,
                'constraints' => [
                    new Range([
                        'min' => 1,
                        'minMessage' => 'bitbag_sylius_mollie_plugin.times.min_range',
                        'groups' => ['sylius'],
                    ]),
                ],
            ])
            ->add('interval', TextType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.interval',
                'constraints' => [
                    new NotBlank([
                        'message' => 'bitbag_sylius_mollie_plugin.interval.not_blank',
                        'groups' => ['sylius'],
                    ]),
                    new Regex([
                        'message' => 'bitbag_sylius_mollie_plugin.interval.invalid',
                        'groups' => ['sylius'],
                        'pattern' => '/^\d{1,} (months|weeks|days)$/',
                    ]),
                ],
            ]);
    }

    public function getParent(): string
    {
        return MollieGatewayConfigurationType::class;
    }
}
