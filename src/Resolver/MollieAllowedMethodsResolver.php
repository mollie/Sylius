<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use Sylius\Component\Core\Model\OrderInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Form\Type\MollieGatewayConfigurationType;
use Mollie\Api\Exceptions\ApiException;
use Mollie\Api\Resources\Method;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class MollieAllowedMethodsResolver implements MollieAllowedMethodsResolverInterface
{

    /** @var RepositoryInterface */
    private $gatewayConfigRepository;

    /** @var MollieApiClient  */
    private $mollieApiClient;

    public function __construct(RepositoryInterface $gatewayConfigRepository, MollieApiClient $mollieApiClient)
    {
        $this->gatewayConfigRepository = $gatewayConfigRepository;
        $this->mollieApiClient = $mollieApiClient;
    }

    /**
     * @param OrderInterface $order
     * @return string[]
     * @throws ApiException
     */
    public function resolve(OrderInterface $order): array
    {
        $allowedMethods = [];
        $allowedMethodsIds = [];

        $gateways = $this->gatewayConfigRepository->findBy(['factoryName' => MollieGatewayFactory::FACTORY_NAME]);

        if (empty($gateways)) {
            return [];
        }

        /** @var GatewayConfigInterface $gateway */
        foreach ($gateways as $gateway) {
            $config = $gateway->getConfig();
            $environment = true === $config['environment'] ?
                MollieGatewayConfigurationType::API_KEY_LIVE :
                MollieGatewayConfigurationType::API_KEY_TEST;

            $client = $this->mollieApiClient->setApiKey($config[$environment]);

            $allowedMethods = $client->methods->allActive($this->createParametersByOrder($order));
        }

        /** @var Method $method */
        foreach ($allowedMethods as $method) {
            $allowedMethodsIds[] = $method->id;
        }

        return $allowedMethodsIds;
    }

    private function createParametersByOrder($order): array
    {
        return [
            'amount[value]' => $this->parseTotalToString($order->getTotal()),
            'amount[currency]' => $order->getCurrencyCode(),
            'locale' => $order->getLocaleCode(),
            'billingCountry' => null !== $order->getBillingAddress()
                ? $order->getBillingAddress()->getCountryCode()
                : null
        ];
    }

    private function parseTotalToString(int $total): string
    {
        return substr_replace((string) $total, '.', -2, 0);
    }
}
