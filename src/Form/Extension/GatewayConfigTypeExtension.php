<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Extension;

use BitBag\SyliusMolliePlugin\Form\Type\MollieGatewayConfigType;
use Sylius\Bundle\PayumBundle\Form\Type\GatewayConfigType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Valid;

final class GatewayConfigTypeExtension extends AbstractTypeExtension
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('mollieGatewayConfig', CollectionType::class, [
                'entry_type' => MollieGatewayConfigType::class,
                'validation_groups' => ['sylius'],
                'constraints' => [
                    new Valid(),
                ],
            ]
        );
    }

    public static function getExtendedTypes(): array
    {
        return [GatewayConfigType::class];
    }
}
