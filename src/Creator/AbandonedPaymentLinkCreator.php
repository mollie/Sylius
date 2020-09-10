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

use BitBag\SyliusMolliePlugin\Entity\TemplateMollieEmailInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Preparer\PaymentLinkEmailPreparerInterface;
use BitBag\SyliusMolliePlugin\Repository\OrderRepositoryInterface;
use BitBag\SyliusMolliePlugin\Resolver\PaymentlinkResolverInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;

final class AbandonedPaymentLinkCreator implements AbandonedPaymentLinkCreatorInterface
{
    /** @var PaymentlinkResolverInterface */
    private $paymentlinkResolver;

    /** @var OrderRepositoryInterface */
    private $orderRepository;

    /** @var PaymentLinkEmailPreparerInterface */
    private $emailPreparer;

    public function __construct
    (
        PaymentlinkResolverInterface $paymentlinkResolver,
        OrderRepositoryInterface $orderRepository,
        PaymentLinkEmailPreparerInterface $emailPreparer
    ) {
        $this->paymentlinkResolver = $paymentlinkResolver;
        $this->orderRepository = $orderRepository;
        $this->emailPreparer = $emailPreparer;
    }

    public function create(): void
    {
        $dateTime = new \DateTime('06-07-2020 16:00:00');

        $orders = $this->orderRepository->findAbandonedByDateTime($dateTime);
        /** @var OrderInterface $order */

        foreach ($orders as $order) {
            /** @var PaymentInterface $payment */
            $payment = $order->getPayments()->first();
            if ($payment->getMethod()->getGatewayConfig()->getFactoryName() === MollieGatewayFactory::FACTORY_NAME) {
                $this->paymentlinkResolver->resolve($order, [], TemplateMollieEmailInterface::PAYMENT_LINK_ABANDONED);
            }
        }
    }
}
