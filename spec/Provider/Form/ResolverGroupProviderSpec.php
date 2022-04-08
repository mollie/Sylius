<?php

/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Provider\Form;

use BitBag\SyliusMolliePlugin\Entity\ProductVariantInterface;
use BitBag\SyliusMolliePlugin\Provider\Form\ResolverGroupProvider;
use BitBag\SyliusMolliePlugin\Provider\Form\ResolverGroupProviderInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Core\Model\CustomerInterface;
use Symfony\Component\Form\FormInterface;

final class ResolverGroupProviderSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(ResolverGroupProvider::class);
        $this->shouldImplement(ResolverGroupProviderInterface::class);
    }

    function it_provides_when_product_variant_is_recurring(
        FormInterface $form,
        ProductVariantInterface $data
    ): void {
        $form->getData()->willReturn($data);
        $data->isRecurring()->willReturn(true);

        $this->provide($form)->shouldReturn([
            'sylius',
            'recurring_product_variant'
        ]);
    }

    function it_provides_when_product_variant_is_not_recurring(
        FormInterface $form,
        ProductVariantInterface $data
    ): void {
        $form->getData()->willReturn($data);
        $data->isRecurring()->willReturn(false);

        $this->provide($form)->shouldReturn([
            'sylius',
            'non_recurring_product_variant'
        ]);
    }

    function it_provides_when_wrong_type_provided(
        FormInterface $form,
        CustomerInterface $data
    ): void {
        $form->getData()->willReturn($data);

        $this->provide($form)->shouldReturn([
            'sylius'
        ]);
    }

    function it_provides_when_null_data_provided(
        FormInterface $form
    ): void {
        $form->getData()->willReturn(null);

        $this->provide($form)->shouldReturn([
            'sylius'
        ]);
    }
}
