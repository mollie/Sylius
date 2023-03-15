<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Form\Type;

use SyliusMolliePlugin\Resolver\MolliePaymentsMethodResolverInterface;
use SyliusMolliePlugin\Validator\Constraints\PaymentMethodCheckout;
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
                'choice_attr' => function ($value) use ($images, $paymentFee): array {
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
                'choice_attr' => function ($value): array {
                    return ['image' => $value->image->svg];
                },
            ])
            ->add('cartToken', HiddenType::class);
    }
}
