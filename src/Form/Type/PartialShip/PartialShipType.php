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

use Sylius\Bundle\ResourceBundle\Form\Type\AbstractResourceType;
use Sylius\Component\Core\Model\ShipmentInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Count;

final class PartialShipType extends AbstractResourceType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('tracking', TextType::class, [
                'required' => false,
                'label' => 'bitbag_sylius_mollie_plugin.form.shipment.tracking_code',
                'attr' => ['placeholder' => 'bitbag_sylius_mollie_plugin.form.shipment.tracking_code'],
            ])
            ->add('units', ShippingUnitsChoiceType::class, [
                'choices' => $options['shipment']->getUnits(),
                'label' => 'bitbag_sylius_mollie_plugin.form.shipment.units',
                'multiple' => true,
                'constraints' => [
                    new Count(['min' => 1, 'groups' => ['sylius']])
                ]
            ])
        ;

        $builder->addEventListener(FormEvents::POST_SUBMIT, static function (FormEvent $formEvent): void {
            /** @var ShipmentInterface $shipment */
            $shipment = $formEvent->getData();

            foreach ($shipment->getUnits() as $unit) {
                /** @var ShipmentInterface $oldShipment */
                $oldShipment = $unit->getShipment();

                $oldShipment->removeUnit($unit);
            }
        });
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setRequired('shipment')
            ->setDefaults(['validation_groups' => ['sylius']])
            ->setAllowedTypes('shipment', [ShipmentInterface::class])
        ;
    }

    public function getBlockPrefix(): string
    {
        return 'bitbag_partial_shipment_ship';
    }
}
