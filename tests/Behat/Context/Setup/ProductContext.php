<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Behat\Context\Setup;

use Behat\Behat\Context\Context;
use Behat\MinkExtension\Context\RawMinkContext;
use BitBag\SyliusMolliePlugin\Entity\ProductVariantInterface;
use Sylius\Behat\Service\SharedStorageInterface;
use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductRepository;
use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductVariantRepository;

final class ProductContext extends RawMinkContext implements Context
{
    /** @var SharedStorageInterface */
    private $sharedStorage;

    /** @var ProductRepository */
    private $productRepository;

    /** @var ProductVariantRepository */
    private $productVariantRepository;

    public function __construct(
        SharedStorageInterface $sharedStorage,
        ProductRepository $productRepository,
        ProductVariantRepository $productVariantRepository
    ) {
        $this->sharedStorage = $sharedStorage;
        $this->productRepository = $productRepository;
        $this->productVariantRepository = $productVariantRepository;
    }

    /**
     * @Given the :productName variant has recurring payment enabled
     */
    public function theVariantHasRecurringPaymentEnabled($productName)
    {
        /** @var \Sylius\Component\Core\Model\Product $product */
        $product = $this->productRepository->findByName($productName, 'en_US');
        $productVariants = $product[0]->getVariants();
        $productVariant = $productVariants->first();
        $productVariant->setRecurring(true);

        $this->saveProductVariant($productVariant);
    }

    private function saveProductVariant(ProductVariantInterface $product)
    {
        $this->productVariantRepository->add($product);
        $this->sharedStorage->set('product_variant', $product);
    }
}
