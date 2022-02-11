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
use BitBag\SyliusMolliePlugin\Entity\ProductVariantInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use Doctrine\ORM\EntityManager;
use Sylius\Behat\Service\SharedStorageInterface;
use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductRepository;
use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductVariantRepository;
use Sylius\Bundle\CoreBundle\Fixture\Factory\ExampleFactoryInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Sylius\Component\Core\Model\ProductInterface;
use Sylius\Component\Core\Repository\PaymentMethodRepositoryInterface;
use Tests\BitBag\SyliusMolliePlugin\Entity\Product;

final class MollieContext implements Context
{
    /**
     * @var SharedStorageInterface
     */
    private $sharedStorage;

    /**
     * @var PaymentMethodRepositoryInterface
     */
    private $paymentMethodRepository;

    /**
     * @var ExampleFactoryInterface
     */
    private $paymentMethodExampleFactory;

    /**
     * @var EntityManager
     */
    private $paymentMethodManager;

    /**
     * @param SharedStorageInterface $sharedStorage
     * @param PaymentMethodRepositoryInterface $paymentMethodRepository
     * @param ExampleFactoryInterface $paymentMethodExampleFactory
     * @param EntityManager $paymentMethodManager
     */
    public function __construct(
        SharedStorageInterface $sharedStorage,
        PaymentMethodRepositoryInterface $paymentMethodRepository,
        ExampleFactoryInterface $paymentMethodExampleFactory,
        EntityManager $paymentMethodManager
    ) {
        $this->sharedStorage = $sharedStorage;
        $this->paymentMethodRepository = $paymentMethodRepository;
        $this->paymentMethodExampleFactory = $paymentMethodExampleFactory;
        $this->paymentMethodManager = $paymentMethodManager;
    }

    /**
     * @Given the store has a payment method :paymentMethodName with a code :paymentMethodCode and Mollie payment gateway
     */
    public function theStoreHasAPaymentMethodWithACodeAndMolliePaymentGateway(string $paymentMethodName, string $paymentMethodCode): void
    {
        $paymentMethod = $this->createPaymentMethodMollie(
            $paymentMethodName,
            $paymentMethodCode,
            MollieGatewayFactory::FACTORY_NAME,
            'Mollie'
        );

        $paymentMethod->getGatewayConfig()->setConfig([
            'api_key' => 'test',
            'payum.http_client' => '@bitbag_sylius_mollie_plugin.mollie_api_client',
        ]);

        $this->paymentMethodManager->flush();
    }

    /**
     * @Given the store has a payment method :paymentMethodName with a code :paymentMethodCode and Mollie Subscription payment gateway
     */
    public function theStoreHasAPaymentMethodWithACodeAndMollieSubscriptionPaymentGateway(string $paymentMethodName, string $paymentMethodCode): void
    {
        $paymentMethod = $this->createPaymentMethodMollie(
            $paymentMethodName,
            $paymentMethodCode,
            MollieSubscriptionGatewayFactory::FACTORY_NAME,
            'Mollie Subscription'
        );

        $paymentMethod->getGatewayConfig()->setConfig([
            'api_key' => 'test',
            'payum.http_client' => '@bitbag_sylius_mollie_plugin.mollie_api_client',
            'times' => 1,
            'interval' => '1 months',
        ]);

        $this->paymentMethodManager->flush();
    }

    /**
     * @param string $name
     * @param string $code
     * @param string $factoryName
     * @param string $description
     * @param bool $addForCurrentChannel
     * @param int|null $position
     *
     * @return PaymentMethodInterface
     */
    private function createPaymentMethodMollie(
        string $name,
        string $code,
        string $factoryName,
        string $description = '',
        bool $addForCurrentChannel = true,
        int $position = null
    ): PaymentMethodInterface {
        /** @var PaymentMethodInterface $paymentMethod */
        $paymentMethod = $this->paymentMethodExampleFactory->create([
            'name' => ucfirst($name),
            'code' => $code,
            'description' => $description,
            'gatewayName' => $factoryName,
            'gatewayFactory' => $factoryName,
            'enabled' => true,
            'channels' => ($addForCurrentChannel && $this->sharedStorage->has('channel')) ? [$this->sharedStorage->get('channel')] : [],
        ]);

        if (null !== $position) {
            $paymentMethod->setPosition($position);
        }

        $this->sharedStorage->set('payment_method', $paymentMethod);
        $this->paymentMethodRepository->add($paymentMethod);

        return $paymentMethod;
    }
}
