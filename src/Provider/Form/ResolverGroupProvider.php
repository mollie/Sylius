<?php

/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Provider\Form;

use BitBag\SyliusMolliePlugin\Entity\ProductVariantInterface;
use Symfony\Component\Form\FormInterface;

final class ResolverGroupProvider implements ResolverGroupProviderInterface
{
    public function provide(FormInterface $form): array
    {
        $groups = ['sylius'];
        $data = $form->getData();

        if (false === $data instanceof ProductVariantInterface) {
            return $groups;
        }

        if (false === $data->isRecurring()) {
            $groups[] = 'non_recurring_product_variant';

            return $groups;
        }

        $groups[] = 'recurring_product_variant';

        return $groups;
    }
}
