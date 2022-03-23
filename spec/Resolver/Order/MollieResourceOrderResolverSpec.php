<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Resolver\Order;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Repository\OrderRepositoryInterface;
use BitBag\SyliusMolliePlugin\Resolver\Order\MollieResourceOrderResolver;
use BitBag\SyliusMolliePlugin\Resolver\Order\MollieResourceOrderResolverInterface;
use Mollie\Api\Endpoints\OrderEndpoint;
use Mollie\Api\Endpoints\PaymentEndpoint;
use Mollie\Api\Resources\Order;
use Mollie\Api\Resources\Payment;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Order\Model\OrderInterface;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;

final class MollieResourceOrderResolverSpec extends ObjectBehavior
{
    public function let(
        MollieApiClient $mollieApiClient,
        MollieLoggerActionInterface $loggerAction,
        OrderRepositoryInterface $orderRepository
    ): void {
        $this->beConstructedWith(
            $mollieApiClient,
            $loggerAction,
            $orderRepository
        );
    }

    public function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieResourceOrderResolver::class);
        $this->shouldImplement(MollieResourceOrderResolverInterface::class);
    }

    public function it_resolves_sylius_order_from_given_mollie_resource_as_order(
        MollieApiClient $mollieApiClient,
        OrderRepositoryInterface $orderRepository,
        Order $mollieOrderResource,
        OrderEndpoint $orderEndpoint,
        OrderInterface $syliusOrder
    ): void {
        $mollieResourceId = 'ord_12345';
        $mollieApiClient->orders = $orderEndpoint;

        $orderEndpoint->get($mollieResourceId)
            ->willReturn($mollieOrderResource);

        $metadata = (object) [
            'order_id' => 25,
        ];

        $mollieOrderResource->metadata = $metadata;

        $orderRepository->find($metadata->order_id)
            ->willReturn($syliusOrder);

        $this->resolve($mollieResourceId)
            ->shouldReturn($syliusOrder);
    }

    public function it_resolves_sylius_order_from_given_mollie_resource_as_payment(
        MollieApiClient $mollieApiClient,
        OrderRepositoryInterface $orderRepository,
        Payment $molliePaymentResource,
        PaymentEndpoint $paymentEndpoint,
        OrderInterface $syliusOrder
    ): void {
        $mollieResourceId = 'tr_12345';
        $mollieApiClient->payments = $paymentEndpoint;

        $paymentEndpoint->get($mollieResourceId)
            ->willReturn($molliePaymentResource);

        $metadata = (object) [
            'order_id' => 25,
        ];

        $molliePaymentResource->metadata = $metadata;

        $orderRepository->find($metadata->order_id)
            ->willReturn($syliusOrder);

        $this->resolve($mollieResourceId)
            ->shouldReturn($syliusOrder);
    }

    public function it_throws_exception_if_mollie_resource_is_not_supported(
        MollieLoggerActionInterface $loggerAction
    ): void {
        $mollieResourceId = 'abc_12345';

        $loggerAction
            ->addNegativeLog(
                sprintf(
                    'Mollie Resource Order Resolver received wrong resource: %s',
                    $mollieResourceId
                )
            )
            ->shouldBeCalled();

        $this->shouldThrow(new ResourceNotFoundException())
            ->during('resolve', [$mollieResourceId]);
    }
}
