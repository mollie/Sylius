<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Creator;

use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Entity\TemplateMollieEmailInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Preparer\PaymentLinkEmailPreparerInterface;
use BitBag\SyliusMolliePlugin\Repository\OrderRepositoryInterface;
use BitBag\SyliusMolliePlugin\Resolver\PaymentlinkResolverInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class AbandonedPaymentLinkCreator implements AbandonedPaymentLinkCreatorInterface
{
    /** @var PaymentlinkResolverInterface */
    private $paymentlinkResolver;

    /** @var OrderRepositoryInterface */
    private $orderRepository;

    /** @var PaymentLinkEmailPreparerInterface */
    private $emailPreparer;

    /** @var RepositoryInterface */
    private $gatewayConfigRepository;

    public function __construct(
        PaymentlinkResolverInterface $paymentlinkResolver,
        OrderRepositoryInterface $orderRepository,
        PaymentLinkEmailPreparerInterface $emailPreparer,
        RepositoryInterface $gatewayConfigRepository
    ) {
        $this->paymentlinkResolver = $paymentlinkResolver;
        $this->orderRepository = $orderRepository;
        $this->emailPreparer = $emailPreparer;
        $this->gatewayConfigRepository = $gatewayConfigRepository;
    }

    public function create(): void
    {
        /** @var GatewayConfigInterface $gateway */
        $gateway = $this->gatewayConfigRepository->findOneBy(['factoryName' => MollieGatewayFactory::FACTORY_NAME]);

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

            if ($payment->getMethod()->getGatewayConfig()->getFactoryName() === MollieGatewayFactory::FACTORY_NAME) {
                $this->paymentlinkResolver->resolve($order, [], TemplateMollieEmailInterface::PAYMENT_LINK_ABANDONED);
                $order->setAbandonedEmail(true);
                $this->orderRepository->add($order);
            }
        }
    }
}
