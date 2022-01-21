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
    private PaymentMethodsResolverInterface $decoratedService;
    private PaymentMethodRepositoryInterface $paymentMethodRepository;

    public function __construct(
        PaymentMethodsResolverInterface $decoratedService,
        PaymentMethodRepositoryInterface $paymentMethodRepository
    )
    {
        $this->decoratedService = $decoratedService;
        $this->paymentMethodRepository = $paymentMethodRepository;
    }

    public function getSupportedMethods(PaymentInterface $subject): array
    {
        /** @var CorePaymentInterface $subject */
        /** @var OrderInterface $order */
        $order = $subject->getOrder();
        $channel = $order->getChannel();
        $factoryName = $order->hasRecurringContents(
        ) ? MollieSubscriptionGatewayFactory::FACTORY_NAME : MollieGatewayFactory::FACTORY_NAME;

        $method = $this->paymentMethodRepository->findOneByChannelAndGatewayFactoryName(
            $channel,
            $factoryName
        );

        if (null !== $method && MollieSubscriptionGatewayFactory::FACTORY_NAME === $factoryName) {
            return [$method];
        }

        $parentMethods = $this->decoratedService->getSupportedMethods($subject);

        if (null !== $method && MollieGatewayFactory::FACTORY_NAME === $factoryName) {
            return array_merge([$method], $parentMethods);
        }

        return $parentMethods;
    }

    public function supports(PaymentInterface $subject): bool
    {
        if (false === $subject instanceof CorePaymentInterface) {
            return false;
        };

        $order = $subject->getOrder();
        if (false === $order instanceof OrderInterface) {
            return false;
        }

        return $order->hasRecurringContents() || $order->hasNonRecurringContents()
            && null !== $subject->getOrder()->getChannel();
    }
}
