<?php


declare(strict_types=1);

namespace Tests\SyliusMolliePlugin\Entity;

use SyliusMolliePlugin\Entity\ProductInterface;
use SyliusMolliePlugin\Entity\ProductTrait;
use Sylius\Component\Core\Model\Product as BaseProduct;

class Product extends BaseProduct implements ProductInterface
{
    use ProductTrait;
}
