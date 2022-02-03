<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionConfigurationInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;

final class PaymentDetailsFactory implements PaymentDetailsFactoryInterface
{
    public function createForSubscriptionAndOrder(
        MollieSubscriptionConfigurationInterface $subscriptionConfiguration,
        OrderInterface $order
    ): array
    {
        $originalDetails = $subscriptionConfiguration->getPaymentDetailsConfiguration();

        return [
            'molliePaymentMethods' => $originalDetails['method'],
            'recurring' => true,
            'cartToken' => null,
            'metadata' => [
                'gateway' => $originalDetails['metadata']['gateway']
            ],
        ];
    }
}
