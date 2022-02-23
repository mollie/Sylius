<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Order;

use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Order\OrderPaymentRefund;
use BitBag\SyliusMolliePlugin\Order\OrderPaymentRefundInterface;
use BitBag\SyliusMolliePlugin\Request\Api\RefundOrder;
use Doctrine\Common\Collections\ArrayCollection;
use Payum\Core\GatewayInterface;
use Payum\Core\Model\GatewayConfigInterface;
use Payum\Core\Payum;
use Payum\Core\Security\TokenInterface;
use Payum\Core\Storage\StorageInterface;
use Payum\Core\Request\Refund as RefundAction;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Sylius\RefundPlugin\Event\UnitsRefunded;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

final class OrderPaymentRefundSpec extends ObjectBehavior
{
    function let(
        RepositoryInterface $orderRepository,
        MollieLoggerActionInterface $loggerAction,
        Payum $payum,
        UnitsRefunded $units,
        OrderInterface $order,
        PaymentInterface $payment,
        PaymentMethodInterface $paymentMethod,
        GatewayConfigInterface $config
    ): void {
        $this->beConstructedWith(
            $orderRepository,
            $loggerAction,
            $payum
        );
        $units->orderNumber()->willReturn('#0000001');
        $units->units()->willReturn([
            'order_item_1',
            'order_item_2',
        ]);
        $units->shipments()->willReturn([
            'dhl',
            'fedex',
        ]);
        $orderRepository->findOneBy(['number' => '#0000001'])->willReturn($order);

        $order->getPayments()->willReturn(new ArrayCollection([
            $payment->getWrappedObject()
        ]));
        $payment->getMethod()->willReturn($paymentMethod);

        $paymentMethod->getGatewayConfig()->willReturn($config);
        $config->getFactoryName()->willReturn('mollie_subscription_test');
    }
    function it_is_initializable(): void
    {
        $this->shouldHaveType(OrderPaymentRefund::class);
    }

    function it_should_implement_order_payment_refund_interface(): void
    {
        $this->shouldImplement(OrderPaymentRefundInterface::class);
    }

    function it_refunds_when_token_not_null_and_order_mollie_id_was_found(
        UnitsRefunded $units,
        PaymentInterface $payment,
        Payum $payum,
        StorageInterface $storage,
        TokenInterface $token,
        GatewayInterface $gateway
    ): void {
        $details = [
            'metadata' => [
                'refund' => [
                    'items' => [
                        'order_item_1',
                        'order_item_2',
                    ],
                    'shipments' => [
                        'dhl',
                        'fedex',
                    ]
                ],
                'refund_token' => 'test_token'
            ],
            'order_mollie_id' => 1
        ];
        $payment->getDetails()->willReturn($details);
        $hash = $details['metadata']['refund_token'];
        $payment->setDetails($details);
        $payum->getTokenStorage()->willReturn($storage);

        $storage->find($hash)->willReturn($token);

        $token->getGatewayName()->willReturn('test_gateway');
        $payum->getGateway('test_gateway')->willReturn($gateway);

        $this->refund($units);
        $gateway->execute(new RefundOrder($token->getWrappedObject()))->shouldBeCalledOnce();

    }

    function it_refunds_when_token_not_null_and_order_mollie_id_was_not_found(
        UnitsRefunded $units,
        PaymentInterface $payment,
        Payum $payum,
        StorageInterface $storage,
        TokenInterface $token,
        GatewayInterface $gateway
    ): void {
        $details = [
            'metadata' => [
                'refund' => [
                    'items' => [
                        'order_item_1',
                        'order_item_2',
                    ],
                    'shipments' => [
                        'dhl',
                        'fedex',
                    ]
                ],
                'refund_token' => 'test_token'
            ]
        ];
        $payment->getDetails()->willReturn($details);
        $hash = $details['metadata']['refund_token'];
        $payment->setDetails($details);
        $payum->getTokenStorage()->willReturn($storage);

        $storage->find($hash)->willReturn($token);

        $token->getGatewayName()->willReturn('test_gateway');
        $payum->getGateway('test_gateway')->willReturn($gateway);

        $this->refund($units);
        $gateway->execute(new RefundAction($token->getWrappedObject()))->shouldBeCalledOnce();
    }

    function it_not_refunds_when_token_null(
        UnitsRefunded $units,
        PaymentInterface $payment,
        Payum $payum,
        StorageInterface $storage,
        TokenInterface $token,
        GatewayInterface $gateway,
        MollieLoggerActionInterface $loggerAction
    ): void {
        $details = [
            'metadata' => [
                'refund' => [
                    'items' => [
                        'order_item_1',
                        'order_item_2',
                    ],
                    'shipments' => [
                        'dhl',
                        'fedex',
                    ]
                ],
                'refund_token' => 'test_token'
            ]
        ];
        $payment->getDetails()->willReturn($details);
        $hash = $details['metadata']['refund_token'];
        $payment->setDetails($details);
        $payum->getTokenStorage()->willReturn($storage);

        $storage->find($hash)->willReturn(null);

        $token->getGatewayName()->willReturn('test_gateway');
        $payum->getGateway('test_gateway')->willReturn($gateway);

        $this->shouldThrow(BadRequestHttpException::class)->during('refund',[$units]);
        $loggerAction->addNegativeLog(sprintf('A token with hash `%s` could not be found.', $hash))->shouldBeCalledOnce();
    }

    function it_refunds_when_payment_null(
        RepositoryInterface $orderRepository,
        OrderInterface $order,
        MollieLoggerActionInterface $loggerAction,
        UnitsRefunded $units,
        PaymentInterface $payment
    ): void {
        $orderRepository->findOneBy(['number' => '#0000001'])->willReturn($order);

        $order->getPayments()->willReturn(new ArrayCollection([
            null
        ]));

        $loggerAction->addNegativeLog(sprintf('Not fount payment in refund'))->shouldBeCalled();

        $this->shouldThrow(NotFoundHttpException::class)->during('refund',[$units]);
    }

    function it_refunds_when_factory_name_not_in_array(
        GatewayConfigInterface $config,
        PaymentInterface $payment
    ): void {
        $config->getFactoryName()->willReturn('definitely_not_mollie_subscription_test');
        $payment->getDetails()->shouldNotBeCalled();
    }
}
