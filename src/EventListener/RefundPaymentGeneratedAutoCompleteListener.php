<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\EventListener;

use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Repository\PaymentMethodRepositoryInterface;
use Sylius\Bundle\ResourceBundle\Doctrine\ORM\EntityRepository;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Sylius\RefundPlugin\Entity\RefundPaymentInterface;
use Sylius\RefundPlugin\Event\RefundPaymentGenerated;
use Sylius\RefundPlugin\StateResolver\RefundPaymentCompletedStateApplierInterface;

final class RefundPaymentGeneratedAutoCompleteListener
{
    /** @var EntityRepository */
    private $refundPaymentRepository;

    /** @var RefundPaymentCompletedStateApplierInterface */
    private $refundPaymentCompletedStateApplier;

    /** @var PaymentMethodRepositoryInterface */
    private $paymentMethodRepository;

    public function __construct(
        EntityRepository $refundPaymentInterface,
        RefundPaymentCompletedStateApplierInterface $refundPaymentCompletedStateApplier,
        PaymentMethodRepositoryInterface $paymentMethodRepository
    ) {
        $this->refundPaymentRepository = $refundPaymentInterface;
        $this->refundPaymentCompletedStateApplier = $refundPaymentCompletedStateApplier;
        $this->paymentMethodRepository = $paymentMethodRepository;
    }

    public function __invoke(RefundPaymentGenerated $refundPaymentGenerated): void
    {
        /** @var PaymentMethodInterface $paymentMethod */
        $paymentMethod = $this->paymentMethodRepository->find($refundPaymentGenerated->paymentMethodId());

        if (MollieGatewayFactory::FACTORY_NAME !== $paymentMethod->getGatewayConfig()->getFactoryName()) {
            return;
        }

        /** @var RefundPaymentInterface $refundPayment */
        $refundPayment = $this->refundPaymentRepository->find($refundPaymentGenerated->id());

        $this->refundPaymentCompletedStateApplier->apply($refundPayment);
    }
}
