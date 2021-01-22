<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Type;

use BitBag\SyliusMolliePlugin\Resolver\MolliePaymentsMethodResolverInterface;
use BitBag\SyliusMolliePlugin\Validator\Constraints\PaymentMethodCheckout;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

final class PaymentMollieType extends AbstractType
{
    /** @var SessionInterface */
    private $session;

    /** @var MolliePaymentsMethodResolverInterface */
    private $methodResolver;

    public function __construct(
        SessionInterface $session,
        MolliePaymentsMethodResolverInterface $methodResolver
    ) {
        $this->methodResolver = $methodResolver;
        $this->session = $session;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $methods = $this->methodResolver->resolve();

        $data = $methods['data'];
        $images = $methods['image'];
        $issuers = $methods['issuers'];
        $paymentFee = $methods['paymentFee'];

        $builder
            ->add('molliePaymentMethods', ChoiceType::class, [
                'constraints' => [
                    new PaymentMethodCheckout([
                        'groups' => ['sylius'],
                    ]),
                ],
                'label' => false,
                'choices' => $data,
                'choice_attr' => function ($value) use ($images, $paymentFee) {
                    return [
                        'image' => $images[$value],
                        'paymentFee' => $paymentFee[$value],
                    ];
                },
            ])
            ->add('issuers', ChoiceType::class, [
                'label' => false,
                'choices' => $issuers['ideal'] ?? null,
                'choice_label' => 'name',
                'choice_attr' => function ($value) {
                    return ['image' => $value->image->svg];
                },
            ])
            ->add('cartToken', HiddenType::class);
    }
}
