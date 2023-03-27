<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Payments\MethodResolver;

use SyliusMolliePlugin\Entity\OrderInterface;
use SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use SyliusMolliePlugin\Repository\PaymentMethodRepositoryInterface;
use SyliusMolliePlugin\Resolver\MollieFactoryNameResolverInterface;
use Sylius\Component\Core\Model\PaymentInterface as CorePaymentInterface;
use Sylius\Component\Payment\Model\PaymentInterface;
use Sylius\Component\Payment\Resolver\PaymentMethodsResolverInterface;
use Webmozart\Assert\Assert;

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
    ) {
        $this->decoratedService = $decoratedService;
        $this->paymentMethodRepository = $paymentMethodRepository;
        $this->factoryNameResolver = $factoryNameResolver;
        $this->mollieMethodFilter = $mollieMethodFilter;
    }

    public function getSupportedMethods(PaymentInterface $subject): array
    {
        /** @var ?OrderInterface $order
         * @phpstan-ignore-next-line Ecs yield about missing variable after doc, when subject is set to core
         */
        $order = $subject->getOrder();

        Assert::notNull($order);
        $channel = $order->getChannel();
        $factoryName = $this->factoryNameResolver->resolve($order);

        Assert::notNull($channel);
        $method = $this->paymentMethodRepository->findOneByChannelAndGatewayFactoryName(
            $channel,
            $factoryName
        );

        if (null !== $method && MollieSubscriptionGatewayFactory::FACTORY_NAME === $factoryName) {
            return [$method];
        }
        $parentMethods = $this->decoratedService->getSupportedMethods($subject);

        if (false === $order->hasRecurringContents()) {
            $parentMethods = $this->mollieMethodFilter->nonRecurringFilter($parentMethods);
        }

        if (true === $order->hasRecurringContents()) {
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

        Assert::notNull($subject->getOrder());

        return $order->hasRecurringContents() || $order->hasNonRecurringContents()
            && null !== $subject->getOrder()->getChannel();
    }
}
