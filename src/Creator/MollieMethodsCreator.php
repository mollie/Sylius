<?php

/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Creator;

use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MethodsFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayConfigFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use BitBag\SyliusMolliePlugin\Payments\Methods\MethodInterface;
use BitBag\SyliusMolliePlugin\Resolver\MollieMethodsResolverInterface;
use Doctrine\ORM\EntityManagerInterface;
use Mollie\Api\Resources\MethodCollection;

final class MollieMethodsCreator implements MollieMethodsCreatorInterface
{
    /** @var MethodsFactoryInterface */
    private $methodsFactory;

    /** @var EntityManagerInterface */
    private $entityManager;

    /** @var MollieGatewayConfigFactoryInterface */
    private $factory;

    public function __construct(
        MethodsFactoryInterface $methodsFactory,
        EntityManagerInterface $entityManager,
        MollieGatewayConfigFactoryInterface $factory
    ) {
        $this->methodsFactory = $methodsFactory;
        $this->entityManager = $entityManager;
        $this->factory = $factory;
    }

    public function createMethods(MethodCollection $allMollieMethods, GatewayConfigInterface $gateway): void
    {
        $methods = $this->methodsFactory->createNew();

        foreach ($allMollieMethods as $mollieMethod) {
            if (in_array($mollieMethod->id, MollieMethodsResolverInterface::UNSUPPORTED_METHODS, true)) {
                continue;
            }

            if (
                MollieSubscriptionGatewayFactory::FACTORY_NAME === $gateway->getFactoryName() &&
                (
                    false === in_array($mollieMethod->id, MollieMethodsResolverInterface::RECURRING_PAYMENT_SUPPORTED_METHODS, true) &&
                    false === in_array($mollieMethod->id, MollieMethodsResolverInterface::RECURRING_PAYMENT_INITIAL_METHODS, true)
                )
            ) {
                continue;
            }

            $methods->add($mollieMethod);
        }

        /** @var MethodInterface $method */
        foreach ($methods->getAllEnabled() as $key => $method) {
            $gatewayConfig = $this->factory->create($method, $gateway, $key);

            $this->entityManager->persist($gatewayConfig);
            $this->entityManager->flush();
        }
    }
}
