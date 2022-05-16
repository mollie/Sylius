<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Type;

use BitBag\SyliusMolliePlugin\Entity\ProductType;
use BitBag\SyliusMolliePlugin\MealVouchers\Options;
use Sylius\Bundle\ResourceBundle\Form\Type\AbstractResourceType;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

final class ProductTypeType extends AbstractResourceType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', ChoiceType::class, [
                'choices' => Options::getAvailableMealVouchersCategory(),
                'empty_data' => null,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ProductType::class,
            'constraints' => [
                new UniqueEntity(['fields' => ['name']]),
            ],
        ]);
    }

    public function getBlockPrefix(): string
    {
        return 'bitbag_mollie_admin_product_type';
    }
}
