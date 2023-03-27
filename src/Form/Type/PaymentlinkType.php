<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Form\Type;

use SyliusMolliePlugin\Entity\MollieGatewayConfig;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

final class PaymentlinkType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('methods', EntityType::class, [
                'class' => MollieGatewayConfig::class,
                'multiple' => true,
                'label' => 'sylius_mollie_plugin.form.methods',
                'required' => false,
            ])
        ;
    }
}
