<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Repository;

use Sylius\AdminOrderCreationPlugin\Doctrine\ORM\ProductVariantRepositoryTrait;
use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductVariantRepository as BaseProductVariantRepository;

final class ProductVariantRepository extends BaseProductVariantRepository implements ProductVariantRepositoryInterface
{
    use ProductVariantRepositoryTrait;
}
