<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Payments\Methods\MethodInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class MollieGatewayConfigFactory implements MollieGatewayConfigFactoryInterface
{
    /** @var FactoryInterface */
    private $mollieGatewayConfigFactory;

    /** @var RepositoryInterface */
    private $repository;

    public function __construct(FactoryInterface $mollieGatewayConfigFactory, RepositoryInterface $repository)
    {
        $this->mollieGatewayConfigFactory = $mollieGatewayConfigFactory;
        $this->repository = $repository;
    }

    private function createNewOrUpdate(MethodInterface $method, GatewayConfigInterface $gateway): MollieGatewayConfigInterface
    {
        /** @var ?MollieGatewayConfigInterface $methodExist */
        $methodExist = $this->repository->findOneBy([
            /** @phpstan-ignore-next-line Not every class which implements MethodInterface returns the same type */
            'methodId' => $method->getMethodId(),
            'gateway' => $gateway,
        ]);

        /** @var MollieGatewayConfigInterface $gatewayConfig */
        $gatewayConfig = $this->mollieGatewayConfigFactory->createNew();

        return null !== $methodExist ? $methodExist : $gatewayConfig;
    }

    public function create(
        MethodInterface $method,
        GatewayConfigInterface $gateway,
        int $key
    ): MollieGatewayConfigInterface {
        $mollieGatewayConfig = $this->createNewOrUpdate($method, $gateway);

        /** @phpstan-ignore-next-line Not every class which implements MethodInterface returns the same type */
        $mollieGatewayConfig->setMethodId($method->getMethodId());
        $mollieGatewayConfig->setName($method->getName());
        $mollieGatewayConfig->setMinimumAmount($method->getMinimumAmount());
        $mollieGatewayConfig->setMaximumAmount($method->getMinimumAmount());
        $mollieGatewayConfig->setImage($method->getImage());
        $mollieGatewayConfig->setGateway($gateway);
        $mollieGatewayConfig->setIssuers($method->getIssuers());
        $mollieGatewayConfig->setPaymentType($method->getPaymentType());
        $mollieGatewayConfig->setApplePayDirectButton(false);
        $mollieGatewayConfig->setPosition($key);

        return $mollieGatewayConfig;
    }
}
