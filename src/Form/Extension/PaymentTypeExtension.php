<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Extension;

use BitBag\SyliusMolliePlugin\Form\Type\PaymentMollieType;
use Sylius\Bundle\CoreBundle\Form\Type\Checkout\PaymentType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Valid;

final class PaymentTypeExtension extends AbstractTypeExtension
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('mollie_payment_options', PaymentMollieType::class, [
                'mapped' => false,
                'validation_groups' => ['sylius'],
                'constraints' => [
                    new Valid(),
                ],
            ]);
    }

    public function getExtendedTypes()
    {
        return [PaymentType::class];
    }
}
