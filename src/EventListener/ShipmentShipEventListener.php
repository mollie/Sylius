<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\EventListener;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use Mollie\Api\Exceptions\ApiException;
use Mollie\Api\Resources\Order;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Sylius\Component\Core\Model\ShipmentInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Symfony\Component\HttpFoundation\Session\Session;
use Webmozart\Assert\Assert;

final class ShipmentShipEventListener
{
    /** @var Session */
    private $session;

    /** @var MollieApiClient */
    private $apiClient;

    public function __construct(MollieApiClient $apiClient)
    {
        $this->apiClient = $apiClient;
    }

    public function shipAll(GenericEvent $event): void
    {
        /** @var ShipmentInterface $shipment */
        $shipment = $event->getSubject();
        Assert::isInstanceOf($shipment, ShipmentInterface::class);

        /** @var OrderInterface $order */
        $order = $shipment->getOrder();
        $payment = $order->getLastPayment();

        /** @var PaymentMethodInterface $paymentMethod */
        $paymentMethod = $payment->getMethod();

        $factoryName = $paymentMethod->getGatewayConfig()->getFactoryName() ?? null;

        if (!isset($payment->getDetails()['order_mollie_id']) || MollieGatewayFactory::FACTORY_NAME !== $factoryName) {
            return;
        }

        $modusKey = $this->getModus($paymentMethod->getGatewayConfig()->getConfig());

        try {
            /** @var Order $order */
            $this->apiClient->setApiKey($modusKey);
            $order = $this->apiClient->orders->get($payment->getDetails()['order_mollie_id']);
            $order->shipAll();
        } catch (ApiException $e) {
            $this->session->getFlashBag()->add('error', $e->getMessage());
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
