<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Entity;

trait ProductTrait
{
    /** @var ProductTypeInterface */
    protected $productType;

    public function getProductType(): ?ProductTypeInterface
    {
        return $this->productType;
    }

    public function setProductType(?ProductTypeInterface $productType): void
    {
        $this->productType = $productType;
    }
}
