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
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfig;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use BitBag\SyliusMolliePlugin\Form\Type\MollieGatewayConfigurationType;
use BitBag\SyliusMolliePlugin\Helper\IntToStringConverter;
use BitBag\SyliusMolliePlugin\Preparer\PaymentLinkEmailPreparerInterface;
use Liip\ImagineBundle\Exception\Config\Filter\NotFoundException;
use Sylius\AdminOrderCreationPlugin\Provider\PaymentTokenProviderInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class PaymentlinkResolver implements PaymentlinkResolverInterface
{
    /** @var MollieApiClient */
    private $mollieApiClient;

    /** @var IntToStringConverter */
    private $intToStringConverter;

    /** @var RepositoryInterface */
    private $orderRepository;

    /** @var PaymentLinkEmailPreparerInterface */
    private $emailPreparer;

    /** @var PaymentTokenProviderInterface */
    private $paymentTokenProvider;

    public function __construct(
        MollieApiClient $mollieApiClient,
        IntToStringConverter $intToStringConverter,
        RepositoryInterface $orderRepository,
        PaymentLinkEmailPreparerInterface $emailPreparer,
        PaymentTokenProviderInterface $paymentTokenProvider
    ) {
        $this->mollieApiClient = $mollieApiClient;
        $this->intToStringConverter = $intToStringConverter;
        $this->orderRepository = $orderRepository;
        $this->emailPreparer = $emailPreparer;
        $this->paymentTokenProvider = $paymentTokenProvider;
    }

    public function resolve(OrderInterface $order, array $data, string $templateName): string
    {
        $methodsArray = [];
        $methods = $data['methods'] ?? $data['methods'] = [];

        /** @var PaymentInterface $syliusPayment */
        $syliusPayment = $order->getPayments()->last();

        /** @var PaymentMethodInterface $paymentMethod */
        $paymentMethod = $syliusPayment->getMethod();

        if (false === in_array($paymentMethod->getGatewayConfig()->getFactoryName(), [MollieGatewayFactory::FACTORY_NAME, MollieSubscriptionGatewayFactory::FACTORY_NAME])) {
            throw new NotFoundException('No method mollie found in order');
        }

        $modusKey = $this->getModus($paymentMethod->getGatewayConfig()->getConfig());

        /** @var MollieGatewayConfig $method */
        foreach ($methods as $method) {
            if (in_array($method->getMethodId(), self::NO_AVAILABLE_METHODS)) {
                continue;
            }

            $methodsArray[] = $method->getMethodId();
        }

        $this->mollieApiClient->setApiKey($modusKey);
        $details = $syliusPayment->getDetails();

        if (empty($details) || !isset($details['webhookUrl'])) {
            return '';
        }

        try {
            $token = $this->paymentTokenProvider->getPaymentToken($syliusPayment);
            $redirectURL = $token->getTargetUrl();
        } catch (\Exception $e) {
            $redirectURL = $details['backurl'];
        }

        $data = [
            'method' => $methodsArray,
            'amount' => [
                'currency' => (string) $syliusPayment->getCurrencyCode(),
                'value' => $this->intToStringConverter->convertIntToString($syliusPayment->getAmount(), 100),
            ],
            'description' => $order->getNumber(),
            'redirectUrl' => $redirectURL,
            'webhookUrl' => $details['webhookUrl'],
            'metadata' => [
                'order_id' => $order->getId(),
                'refund_token' => $details['refund_token'] ?? null,
                'customer_id' => $order->getCustomer()->getId(),
            ],
        ];

        $payment = $this->mollieApiClient->payments->create($data);
        $details['payment_mollie_id'] = $payment->id;
        $details['order_mollie_id'] = null;
        $details['metadata']['refund_token'] = $details['refund_token'] ?? null;
        $details['payment_mollie_link'] = $payment->_links->checkout->href;
        $details['backurl'] = $redirectURL;

        $syliusPayment->setDetails($details);

        $this->orderRepository->add($order);

        $this->emailPreparer->prepare($order, $templateName);

        return $payment->_links->checkout->href;
    }

    private function getModus(array $config): string
    {
        if ($config['environment']) {
            return $config[MollieGatewayConfigurationType::API_KEY_LIVE];
        }

        return $config[MollieGatewayConfigurationType::API_KEY_TEST];
    }
}
