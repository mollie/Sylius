<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Payments\MethodResolver;

use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use Sylius\Component\Core\Model\PaymentInterface as CorePaymentInterface;
use Sylius\Component\Payment\Model\PaymentInterface;
use Sylius\Component\Payment\Repository\PaymentMethodRepositoryInterface;
use Sylius\Component\Payment\Resolver\PaymentMethodsResolverInterface;

final class MolliePaymentMethodResolver implements PaymentMethodsResolverInterface
{
    private PaymentMethodRepositoryInterface $paymentMethodRepository;

    public function __construct(PaymentMethodRepositoryInterface $paymentMethodRepository)
    {
        $this->paymentMethodRepository = $paymentMethodRepository;
    }

    public function getSupportedMethods(PaymentInterface $subject): array
    {
        /** @var CorePaymentInterface $subject */
        /** @var OrderInterface $order */
        $order = $subject->getOrder();
        $channel = $order->getChannel();

        $method = $this->paymentMethodRepository->findOneByChannelAndGatewayFactoryName(
            $channel,
            $order->hasRecurringContents() ? MollieSubscriptionGatewayFactory::FACTORY_NAME : MollieGatewayFactory::FACTORY_NAME
        );

        if (null !== $method) {
            return [$method];
        }

        return [];
    }

    public function supports(PaymentInterface $subject): bool
    {
        return $subject instanceof CorePaymentInterface
            && $subject->getOrder() instanceof OrderInterface
            && null !== $subject->getOrder()->getChannel();
    }
}
