<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action\Api;

use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayConfigFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Payments\Methods;
use BitBag\SyliusMolliePlugin\Request\Api\GetMethods;
use Doctrine\ORM\EntityManagerInterface;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class MethodsAction extends BaseApiAwareAction implements ActionInterface, ApiAwareInterface, GatewayAwareInterface
{
    use GatewayAwareTrait;

    /** @var Methods */
    private $methods;

    /** @var MollieGatewayConfigFactoryInterface */
    private $factory;

    /** @var RepositoryInterface */
    private $gatewayConfigRepository;

    /** @var EntityManagerInterface */
    private $entityManager;

    public function __construct(
        Methods $methods,
        MollieGatewayConfigFactoryInterface $factory,
        RepositoryInterface $gatewayConfigRepository,
        EntityManagerInterface $entityManager
    ) {
        $this->methods = $methods;
        $this->factory = $factory;
        $this->gatewayConfigRepository = $gatewayConfigRepository;
        $this->entityManager = $entityManager;
    }

    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $parameters = [
            'include' => 'issuers',
        ];

        $allMollieMethods = $this->mollieApiClient->methods->allActive($parameters);

        /** @var GatewayConfigInterface $gateway */
        $gateway = $this->gatewayConfigRepository->findOneBy(['factoryName' => MollieGatewayFactory::FACTORY_NAME]);

        foreach ($allMollieMethods as $mollieMethod) {
            $this->methods->add($mollieMethod);
        }

        foreach ($this->methods->getAllEnabled() as $method) {
            $gatewayConfig = $this->factory->create($method, $gateway);

            $this->entityManager->persist($gatewayConfig);
            $this->entityManager->flush();
        }
    }

    public function supports($request): bool
    {
        return
            $request instanceof GetMethods &&
            $request->getModel() instanceof \ArrayAccess
            ;
    }
}
