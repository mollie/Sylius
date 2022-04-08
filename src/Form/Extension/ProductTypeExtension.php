<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Extension;

use BitBag\SyliusMolliePlugin\Entity\ProductType;
use Sylius\Bundle\ProductBundle\Form\Type\ProductType as ProductFormType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\FormBuilderInterface;

final class ProductTypeExtension extends AbstractTypeExtension
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('productType', EntityType::class, [
                'class' => ProductType::class,
                'label' => 'bitbag_sylius_mollie_plugin.form.product_type',
                'placeholder' => 'bitbag_sylius_mollie_plugin.form.product_type_none',
                'empty_data' => null,
            ]);
    }

    public static function getExtendedTypes(): array
    {
        return [ProductFormType::class];
    }
}
