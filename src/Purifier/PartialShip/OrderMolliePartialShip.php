<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Purifier\PartialShip;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Resolver\PartialShip\FromSyliusToMollieLinesResolverInterface;
use Mollie\Api\Exceptions\ApiException;
use Mollie\Api\Resources\Order;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;

final class OrderMolliePartialShip implements OrderMolliePartialShipInterface
{
    /** @var MollieApiClient */
    private $apiClient;

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    /** @var FromSyliusToMollieLinesResolverInterface */
    private $mollieUnitsResolver;

    public function __construct
    (
        MollieApiClient $apiClient,
        MollieLoggerActionInterface $loggerAction,
        FromSyliusToMollieLinesResolverInterface $mollieUnitsResolver
    ) {
        $this->apiClient = $apiClient;
        $this->loggerAction = $loggerAction;
        $this->mollieUnitsResolver = $mollieUnitsResolver;
    }

    public function partialShip(OrderInterface $order): void
    {
        $units = $order->getShipments()->last()->getUnits();

        if ($units->isEmpty()) {
            return;
        }

        $payment = $order->getLastPayment();

        /** @var PaymentMethodInterface $paymentMethod */
        $paymentMethod = $payment->getMethod();

        $factoryName = $paymentMethod->getGatewayConfig()->getFactoryName() ?? null;

        if (!isset($payment->getDetails()['order_mollie_id']) || MollieGatewayFactory::FACTORY_NAME !== $factoryName) {
            return;
        }

        $modusKey = $this->getModus($paymentMethod->getGatewayConfig()->getConfig());

        try {
            /** @var Order $mollieOrder */
            $this->apiClient->setApiKey($modusKey);
            $mollieOrder = $this->apiClient->orders->get($payment->getDetails()['order_mollie_id']);

            $lines = $this->mollieUnitsResolver->resolve($units, $mollieOrder);

            $mollieOrder->createShipment(['lines' => $lines->getArrayFromObject()]);

            $this->loggerAction->addLog(sprintf('Partial ship with order id %s: ', $mollieOrder->id));
        } catch (ApiException $e) {
            $this->loggerAction->addNegativeLog(sprintf('Error partial ship with message %s: ', $e->getMessage()));
        }
    }

    private function getModus(array $config): string
    {
        if ($config['environment']) {
            return $config['api_key_live'];
        }

        return $config['api_key_test'];
    }
}
