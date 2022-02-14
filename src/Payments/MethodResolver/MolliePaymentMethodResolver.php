<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Payments\MethodResolver;

use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use BitBag\SyliusMolliePlugin\Resolver\MollieFactoryNameResolverInterface;
use Sylius\Component\Core\Model\PaymentInterface as CorePaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Sylius\Component\Payment\Model\PaymentInterface;
use BitBag\SyliusMolliePlugin\Repository\PaymentMethodRepositoryInterface;
use Sylius\Component\Payment\Resolver\PaymentMethodsResolverInterface;

final class MolliePaymentMethodResolver implements PaymentMethodsResolverInterface
{
    private PaymentMethodsResolverInterface $decoratedService;
    private PaymentMethodRepositoryInterface $paymentMethodRepository;
    private MollieFactoryNameResolverInterface $factoryNameResolver;
    private MollieMethodFilterInterface $mollieMethodFilter;

    public function __construct(
        PaymentMethodsResolverInterface $decoratedService,
        PaymentMethodRepositoryInterface $paymentMethodRepository,
        MollieFactoryNameResolverInterface $factoryNameResolver,
        MollieMethodFilterInterface $mollieMethodFilter
    )
    {
        $this->decoratedService = $decoratedService;
        $this->paymentMethodRepository = $paymentMethodRepository;
        $this->factoryNameResolver = $factoryNameResolver;
        $this->mollieMethodFilter = $mollieMethodFilter;
    }

    public function getSupportedMethods(PaymentInterface $subject): array
    {
        /** @var CorePaymentInterface $subject */
        /** @var OrderInterface $order */
        $order = $subject->getOrder();
        $channel = $order->getChannel();
        $factoryName = $this->factoryNameResolver->resolve($order);

        $method = $this->paymentMethodRepository->findOneByChannelAndGatewayFactoryName(
            $channel,
            $factoryName
        );

        if (null !== $method && MollieSubscriptionGatewayFactory::FACTORY_NAME === $factoryName) {
            return [$method];
        }
        $parentMethods = $this->decoratedService->getSupportedMethods($subject);

        if (true === $order instanceof OrderInterface && false === $order->hasRecurringContents()) {
            $parentMethods = $this->mollieMethodFilter->nonRecurringFilter($parentMethods);
        }

        if (true === $order instanceof OrderInterface && true === $order->hasRecurringContents()) {
            $parentMethods = $this->mollieMethodFilter->recurringFilter($parentMethods);
        }

        return $parentMethods;
    }

    public function supports(PaymentInterface $subject): bool
    {
        if (false === $subject instanceof CorePaymentInterface) {
            return false;
        }
        $order = $subject->getOrder();
        if (false === $order instanceof OrderInterface) {
            return false;
        }

        return $order->hasRecurringContents() || $order->hasNonRecurringContents()
            && null !== $subject->getOrder()->getChannel();
    }
}
