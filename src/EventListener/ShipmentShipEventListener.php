<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\EventListener;

use SyliusMolliePlugin\Client\MollieApiClient;
use SyliusMolliePlugin\Factory\MollieGatewayFactory;
use SyliusMolliePlugin\Form\Type\MollieGatewayConfigurationType;
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
        /** @var ?ShipmentInterface $shipment */
        $shipment = $event->getSubject();
        Assert::isInstanceOf($shipment, ShipmentInterface::class);

        /** @var OrderInterface $order */
        $order = $shipment->getOrder();
        $payment = $order->getLastPayment();

        if (null === $payment) {
            return;
        }

        /** @var PaymentMethodInterface $paymentMethod */
        $paymentMethod = $payment->getMethod();

        Assert::notNull($paymentMethod->getGatewayConfig());
        $factoryName = $paymentMethod->getGatewayConfig()->getFactoryName() ?? null;

        if (!isset($payment->getDetails()['order_mollie_id']) || MollieGatewayFactory::FACTORY_NAME !== $factoryName) {
            return;
        }

        $modusKey = $this->getModus($paymentMethod->getGatewayConfig()->getConfig());

        try {
            $this->apiClient->setApiKey($modusKey);
            /** @var Order $order */
            $order = $this->apiClient->orders->get($payment->getDetails()['order_mollie_id']);
            $order->shipAll();
        } catch (ApiException $e) {
            $this->session->getFlashBag()->add('error', $e->getMessage());
        }
    }

    private function getModus(array $config): string
    {
        if ($config['environment']) {
            return $config[MollieGatewayConfigurationType::API_KEY_LIVE];
        }

        return $config[MollieGatewayConfigurationType::API_KEY_TEST];
    }
}
