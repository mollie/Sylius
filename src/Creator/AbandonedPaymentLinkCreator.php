<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Creator;

use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Entity\TemplateMollieEmailInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Preparer\PaymentLinkEmailPreparerInterface;
use BitBag\SyliusMolliePlugin\Repository\OrderRepositoryInterface;
use BitBag\SyliusMolliePlugin\Repository\PaymentMethodRepositoryInterface;
use BitBag\SyliusMolliePlugin\Resolver\PaymentlinkResolverInterface;
use Sylius\Component\Channel\Context\ChannelContextInterface;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;

final class AbandonedPaymentLinkCreator implements AbandonedPaymentLinkCreatorInterface
{
    /** @var PaymentlinkResolverInterface */
    private $paymentLinkResolver;

    /** @var OrderRepositoryInterface */
    private $orderRepository;

    /** @var PaymentLinkEmailPreparerInterface */
    private $emailPreparer;

    /** @var PaymentMethodRepositoryInterface */
    private $paymentMethodRepository;

    /** @var ChannelContextInterface */
    private $channelContext;

    public function __construct(
        PaymentlinkResolverInterface $paymentLinkResolver,
        OrderRepositoryInterface $orderRepository,
        PaymentLinkEmailPreparerInterface $emailPreparer,
        PaymentMethodRepositoryInterface $paymentMethodRepository,
        ChannelContextInterface $channelContext
    ) {
        $this->paymentLinkResolver = $paymentLinkResolver;
        $this->orderRepository = $orderRepository;
        $this->emailPreparer = $emailPreparer;
        $this->paymentMethodRepository = $paymentMethodRepository;
        $this->channelContext = $channelContext;
    }

    public function create(): void
    {
        /** @var ChannelInterface $channel */
        $channel = $this->channelContext->getChannel();
        $paymentMethod = $this->paymentMethodRepository->findOneByChannelAndGatewayFactoryName(
            $channel,
            MollieGatewayFactory::FACTORY_NAME
        );

        if (null === $paymentMethod) {
            return;
        }

        /** @var ?GatewayConfigInterface $gateway */
        $gateway = $paymentMethod->getGatewayConfig();

        if (null === $gateway) {
            return;
        }

        $abandonedEnabled = $gateway->getConfig()['abandoned_email_enabled'] ?? false;

        if (false === $abandonedEnabled) {
            return;
        }

        $abandonedDuration = $gateway->getConfig()['abandoned_hours'] ?? 4;

        $dateTime = new \DateTime('now');
        $duration = new \DateInterval(\sprintf('PT%sH', $abandonedDuration));
        $dateTime->sub($duration);

        $orders = $this->orderRepository->findAbandonedByDateTime($dateTime);

        /** @var OrderInterface $order */
        foreach ($orders as $order) {
            /** @var PaymentInterface $payment */
            $payment = $order->getPayments()->first();

            /** @var PaymentMethodInterface $paymentMethod */
            $paymentMethod = $payment->getMethod();

            /** @var \Payum\Core\Model\GatewayConfigInterface $gatewayConfig */
            $gatewayConfig = $paymentMethod->getGatewayConfig();

            if (MollieGatewayFactory::FACTORY_NAME === $gatewayConfig->getFactoryName()) {
                $this->paymentLinkResolver->resolve($order, [], TemplateMollieEmailInterface::PAYMENT_LINK_ABANDONED);
                $order->setAbandonedEmail(true);
                $this->orderRepository->add($order);
            }
        }
    }
}
