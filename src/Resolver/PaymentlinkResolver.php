<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfig;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use Liip\ImagineBundle\Exception\Config\Filter\NotFoundException;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;

final class PaymentlinkResolver implements PaymentlinkResolverInterface
{
    /** @var MollieApiClient */
    private $mollieApiClient;

    public function __construct(MollieApiClient $mollieApiClient)
    {
        $this->mollieApiClient = $mollieApiClient;
    }

    public function resolve(OrderInterface $order, array $data): string
    {
        $methodsArray = [];
        $methods = $data['methods'];

        /** @var PaymentInterface $syliusPayment */
        $syliusPayment = $order->getPayments()->first();

        /** @var PaymentMethodInterface $paymentMethod */
        $paymentMethod = $syliusPayment->getMethod();

        if (MollieGatewayFactory::FACTORY_NAME !== $paymentMethod->getGatewayConfig()->getFactoryName()) {
            throw new NotFoundException('No method mollie fount in order');
        }

        $modusKey = $this->getModus($paymentMethod->getGatewayConfig()->getConfig());

        /** @var MollieGatewayConfig $method */
        foreach ($methods as $method) {
            $methodsArray[] = $method->getMethodId();
        }

        $this->mollieApiClient->setApiKey($modusKey);
        $details = $syliusPayment->getDetails();

        $payment = $this->mollieApiClient->payments->create([
                'method' => $methodsArray,
                'amount' => [
                    'currency' => (string) $syliusPayment->getCurrencyCode(),
                    'value' => (string) ($syliusPayment->getAmount() / 100),
                ],
                'description' => $order->getNumber(),
                'redirectUrl' => $details['backurl'],
                'webhookUrl' => $details['webhookUrl'],
                'metadata' => [
                    'order_id' => $order->getId(),
                ],
            ]
        );

        return $payment->_links->checkout->href;
    }

    private function getModus(array $config): string
    {
        if ($config['environment']) {
            return $config['api_key_live'];
        }

        return $config['api_key_test'];
    }
}
