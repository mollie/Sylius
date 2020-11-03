<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Controller\Action\Admin;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayConfigFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Payments\Methods;
use Doctrine\ORM\EntityManagerInterface;
use Mollie\Api\Exceptions\ApiException;
use Sylius\Component\Resource\Exception\UpdateHandlingException;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;

final class MethodsAction
{
    /** @var MollieApiClient */
    private $mollieApiClient;

    /** @var RepositoryInterface */
    private $gatewayConfigRepository;

    /** @var Methods */
    private $methods;

    /** @var EntityManagerInterface */
    private $entityManager;

    /** @var MollieGatewayConfigFactoryInterface */
    private $factory;

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    /** @var Session */
    private $session;

    public function __construct(
        MollieApiClient $mollieApiClient,
        RepositoryInterface $gatewayConfigRepository,
        Methods $methods,
        EntityManagerInterface $entityManager,
        MollieGatewayConfigFactoryInterface $factory,
        MollieLoggerActionInterface $loggerAction,
        Session $session
    ) {
        $this->gatewayConfigRepository = $gatewayConfigRepository;
        $this->mollieApiClient = $mollieApiClient;
        $this->methods = $methods;
        $this->entityManager = $entityManager;
        $this->factory = $factory;
        $this->loggerAction = $loggerAction;
        $this->session = $session;
    }

    public function __invoke(Request $request): Response
    {
        $parameters = [
            'include' => 'issuers',
            'includeWallets' => 'applepay',
            'resource' => 'orders',
        ];

        /** @var GatewayConfigInterface $gateway */
        $gateway = $this->gatewayConfigRepository->findOneBy(['factoryName' => MollieGatewayFactory::FACTORY_NAME]);

        $config = $gateway->getConfig();
        $environment = true === $config['environment'] ? 'api_key_live' : 'api_key_test';

        try {
            $client = $this->mollieApiClient->setApiKey($config[$environment]);
            $allMollieMethods = $client->methods->allActive($parameters);
        } catch (ApiException $e) {
            $this->loggerAction->addNegativeLog(sprintf('API call failed: %s', $e->getMessage()));

            $this->session->getFlashBag()->add('error', $e->getMessage());

            throw new UpdateHandlingException(sprintf('API call failed: %s', htmlspecialchars($e->getMessage())));
        }

        foreach ($allMollieMethods as $mollieMethod) {
            $this->methods->add($mollieMethod);
        }

        foreach ($this->methods->getAllEnabled() as $method) {
            $gatewayConfig = $this->factory->create($method, $gateway);
            $this->entityManager->persist($gatewayConfig);
            $this->entityManager->flush();
        }

        $this->loggerAction->addLog(sprintf('Downloaded all methods from mollie API'));

        $this->session->getFlashBag()->add('success', 'bitbag_sylius_mollie_plugin.admin.success_got_methods');

        return new Response('OK', Response::HTTP_OK);
    }
}
