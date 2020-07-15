<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Type;

use BitBag\SyliusMolliePlugin\Resolver\MolliePaymentsMethodResolverInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
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
                'choice_value' => 'id',
                'choice_label' => 'name',
                'choice_attr' => function ($value) {
                    return ['image' => $value->image->svg];
                },
            ])
            ->add('cartToken', HiddenType::class)
            ->addEventListener(FormEvents::POST_SUBMIT, function (FormEvent $event) {
                $data = $event->getData();

                $data['selected_issuer'] = isset($data['issuers']) ? $data['issuers']->id : null;
                unset($data['issuers']);

                $this->session->set('mollie_payment_options', $data);
            });
    }
}
