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
use Sylius\Component\Core\Model\ChannelPricingInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class ProductContext extends RawMinkContext implements Context
{
    /** @var SharedStorageInterface */
    private $sharedStorage;

    /** @var ProductRepository */
    private $productRepository;

    /** @var ProductVariantRepository */
    private $productVariantRepository;

    private RepositoryInterface $channelPricingRepository;

    public function __construct(
        SharedStorageInterface $sharedStorage,
        ProductRepository $productRepository,
        ProductVariantRepository $productVariantRepository,
        RepositoryInterface $channelPricingRepository
    ) {
        $this->sharedStorage = $sharedStorage;
        $this->productRepository = $productRepository;
        $this->productVariantRepository = $productVariantRepository;
        $this->channelPricingRepository = $channelPricingRepository;
    }

    /**
     * @Given the :productName variant has recurring payment enabled
     */
    public function theVariantHasRecurringPaymentEnabled($productName)
    {
        /** @var \Sylius\Component\Core\Model\Product $product */
        $product = $this->productRepository->findByName($productName, 'en_US');
        $productVariants = $product[0]->getVariants();

        /** @var ProductVariantInterface $productVariant */
        $productVariant = $productVariants->first();
        $productVariant->setRecurring(true);
        $productVariant->setTimes(2);
        $productVariant->setInterval('10 days');

        $this->saveProductVariant($productVariant);
    }

    /**
     * @Then I change :productVariantCode product variant price to :price
     */
    public function iChangeProductVariantPriceTo(string $productVariantCode, string $price): void
    {
        /** @var ProductVariantInterface $productVariant */
        $productVariant = $this->productVariantRepository->findOneBy([
            'code' => $productVariantCode,
        ]);

        /** @var ChannelPricingInterface $channelPricing */
        $channelPricing = $this->channelPricingRepository->findOneBy([
            'productVariant' => $productVariant->getId(),
        ]);

        $channelPricing->setPrice((int) $price * 100);

        $this->channelPricingRepository->add($channelPricing);
    }

    private function saveProductVariant(ProductVariantInterface $product)
    {
        $this->productVariantRepository->add($product);
        $this->sharedStorage->set('product_variant', $product);
    }
}
