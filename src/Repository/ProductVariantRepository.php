<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Repository;

use Sylius\AdminOrderCreationPlugin\Doctrine\ORM\ProductVariantRepositoryTrait;
use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductVariantRepository as BaseProductVariantRepository;

final class ProductVariantRepository extends BaseProductVariantRepository implements ProductVariantRepositoryInterface
{
    use ProductVariantRepositoryTrait;
}
