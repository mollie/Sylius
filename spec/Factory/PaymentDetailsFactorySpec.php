<?php

/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionConfigurationInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Factory\PaymentDetailsFactory;
use BitBag\SyliusMolliePlugin\Factory\PaymentDetailsFactoryInterface;
use PhpSpec\ObjectBehavior;

final class PaymentDetailsFactorySpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(PaymentDetailsFactory::class);
    }

    function it_should_implements_payment_details_factory_interface(): void
    {
        $this->shouldImplement(PaymentDetailsFactoryInterface::class);
    }

    function it_creates_payment_details_for_subscription_and_order(
        MollieSubscriptionConfigurationInterface $subscriptionConfiguration,
        OrderInterface $order
    ): void {
        $details = [
            'gateway' => [
                'metadata' => [
                    'gateway'=>'test_gateway'
                ]
            ],
            'metadata' => [
                'gateway' => 'test_gateway'
            ]
        ];
        $subscriptionConfiguration->getPaymentDetailsConfiguration()
            ->willReturn($details);
        $subscriptionConfiguration->getMandateId()->willReturn(null);

        $this->createForSubscriptionAndOrder(
            $subscriptionConfiguration,
            $order
        )->shouldReturn([
            'recurring' => true,
            'cartToken' => null,
            'mandateId' => null,
            'metadata' => [
                'gateway' => $details['metadata']['gateway']
            ],
        ]);
    }
}
