<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Type\PartialShip;

use Sylius\Component\Core\Model\ProductVariantInterface;
use Sylius\Component\Shipping\Model\ShipmentUnitInterface;
use Symfony\Bridge\Doctrine\Form\DataTransformer\CollectionToArrayTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Webmozart\Assert\Assert;

final class ShippingUnitsChoiceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        if ($options['multiple']) {
            $builder->addViewTransformer(new CollectionToArrayTransformer(), true);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefaults([
                'choice_label' => static function (ShipmentUnitInterface $orderItemUnit): string {
                    /** @var ProductVariantInterface $shippable */
                    $shippable = $orderItemUnit->getShippable();

                    $name = $shippable->getName();
                    Assert::notNull($name);
                    $product = $shippable->getProduct();
                    Assert::notNull($product);
                    $productName = $product->getName();
                    Assert::notNull($productName);

                    return $name ? sprintf('%s (%s)', $productName, $name) : $productName;
                },
                'multiple' => false,
                'expanded' => true,
            ])
        ;
    }

    public function getParent(): string
    {
        return ChoiceType::class;
    }

    public function getBlockPrefix(): string
    {
        return 'bitbag_shipping_units_choice';
    }
}
