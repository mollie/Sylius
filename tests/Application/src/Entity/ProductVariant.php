<?php

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Entity;

use BitBag\SyliusMolliePlugin\Entity\ProductVariantInterface;
use Sylius\Component\Core\Model\ProductVariant as BaseProductVariant;
use Tests\BitBag\SyliusMolliePlugin\Application\src\Entity\RecurringProductVariantTrait;

class ProductVariant extends BaseProductVariant implements ProductVariantInterface
{
    use RecurringProductVariantTrait;
}
