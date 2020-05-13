<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Payments\Methods\MethodInterface;
use Sylius\Bundle\PayumBundle\Model\GatewayConfigInterface;
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

    private function createNewOrUpdate(MethodInterface $method): MollieGatewayConfigInterface
    {
        if ($methodExist = $this->repository->findOneBy(['methodId' => $method->getMethodId()])) {
            return $methodExist;
        }

        return $this->mollieGatewayConfigFactory->createNew();
    }

    public function create(MethodInterface $method, GatewayConfigInterface $gateway): MollieGatewayConfigInterface
    {
        $mollieGatewayConfig = $this->createNewOrUpdate($method);

        $mollieGatewayConfig->setMethodId($method->getMethodId());
        $mollieGatewayConfig->setName($method->getName());
        $mollieGatewayConfig->setMinimumAmount($method->getMinimumAmount());
        $mollieGatewayConfig->setMaximumAmount($method->getMinimumAmount());
        $mollieGatewayConfig->setImage($method->getImage());
        $mollieGatewayConfig->setGateway($gateway);
        $mollieGatewayConfig->setIssuers($method->getIssuers());

        return $mollieGatewayConfig;
    }
}
