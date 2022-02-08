<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Form\Extension;

use BitBag\SyliusMolliePlugin\Form\Extension\ProductVariantRecurringExtension;
use PhpSpec\ObjectBehavior;
use Symfony\Component\Form\AbstractTypeExtension;

final class ProductVariantRecurringExtensionSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(ProductVariantRecurringExtension::class);
        $this->shouldHaveType(AbstractTypeExtension::class);
    }
}
