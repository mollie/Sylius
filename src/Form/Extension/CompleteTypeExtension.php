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

use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use BitBag\SyliusMolliePlugin\Form\Type\DirectDebitType;
use Sylius\Bundle\CoreBundle\Form\Type\Checkout\CompleteType;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Valid;

final class CompleteTypeExtension extends AbstractTypeExtension
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        /** @var OrderInterface $order */
        $order = $builder->getData();

        /** @var PaymentMethodInterface|null $method */
        $method = null !== $order->getLastPayment() ? $order->getLastPayment()->getMethod() : null;

        if (
            null !== $method &&
            null !== $method->getGatewayConfig() &&
            MollieSubscriptionGatewayFactory::FACTORY_NAME === $method->getGatewayConfig()->getFactoryName()
        ) {
            $builder
                ->add('directDebit', DirectDebitType::class, [
                    'mapped' => false,
                    'validation_groups' => ['sylius'],
                    'constraints' => [
                        new Valid(),
                    ],
                ])
            ;
        }
    }

    public static function getExtendedTypes(): array
    {
        return [CompleteType::class];
    }
}
