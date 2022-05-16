<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Extension;

use BitBag\SyliusMolliePlugin\Form\Type\PaymentMollieType;
use Sylius\Bundle\CoreBundle\Form\Type\Checkout\PaymentType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Valid;

final class PaymentTypeExtension extends AbstractTypeExtension
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('details', PaymentMollieType::class, [
                'validation_groups' => ['sylius'],
                'constraints' => [
                    new Valid(),
                ],
            ]);
    }

    public static function getExtendedTypes(): array
    {
        return [PaymentType::class];
    }
}
