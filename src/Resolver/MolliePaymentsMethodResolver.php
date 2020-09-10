<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Order\Context\CartContextInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\HttpFoundation\Session\Session;

final class MolliePaymentsMethodResolver implements MolliePaymentsMethodResolverInterface
{
    /** @var RepositoryInterface */
    private $orderRepository;

    /** @var RepositoryInterface */
    private $gatewayConfigRepository;

    /** @var MolliePaymentMethodImageResolverInterface */
    private $imageResolver;

    /** @var RepositoryInterface */
    private $mollieGatewayRepository;

    /** @var Session */
    private $session;

    /** @var CartContextInterface */
    private $cartContext;

    public function __construct(
        RepositoryInterface $orderRepository,
        RepositoryInterface $gatewayConfigRepository,
        MolliePaymentMethodImageResolverInterface $imageResolver,
        RepositoryInterface $mollieGatewayRepository,
        Session $session,
        CartContextInterface $cartContext
    ) {
        $this->orderRepository = $orderRepository;
        $this->gatewayConfigRepository = $gatewayConfigRepository;
        $this->imageResolver = $imageResolver;
        $this->mollieGatewayRepository = $mollieGatewayRepository;
        $this->session = $session;
        $this->cartContext = $cartContext;
    }

    public function resolve(): array
    {
        $orderId = $this->session->get('sylius_order_id');
        $orderFromSession = null;

        $order = $this->cartContext->getCart();

        if (null !== $orderId) {
            $orderFromSession = $this->orderRepository->findOneBy(['id' => $orderId]);
        }

        if (null !== $orderFromSession) {
            $order = $orderFromSession;
        }

        /** @var OrderInterface $order */
        $address = $order->getBillingAddress();

        if (null === $address) {
            $address = $order->getShippingAddress();
        }

        if (null === $address) {
            return $this->getDefaultOptions();
        }

        return $this->getMolliePaymentOptions($address->getCountryCode());
    }

    private function getMolliePaymentOptions(string $countryCode): array
    {
        $methods = $this->getDefaultOptions();

        /** @var GatewayConfigInterface $gateway */
        $gateway = $this->gatewayConfigRepository->findOneBy([
            'factoryName' => MollieGatewayFactory::FACTORY_NAME,
        ]);

        if (null === $gateway) {
            return $this->getDefaultOptions();
        }

        $paymentConfigs = $this->mollieGatewayRepository->findAllEnabledByGateway($gateway);

        if (empty($paymentConfigs)) {
            return $this->getDefaultOptions();
        }

        /** @var MollieGatewayConfigInterface $paymentMethod */
        foreach ($paymentConfigs as $paymentMethod) {

            if (in_array($countryCode, $paymentMethod->getCountryLevel()) || empty($paymentMethod->getCountryLevel())) {
                $methods['data'][$paymentMethod->getName()] = $paymentMethod->getMethodId();
                $methods['image'][$paymentMethod->getMethodId()] = $this->imageResolver->resolve($paymentMethod);
                $methods['issuers'][$paymentMethod->getMethodId()] = $paymentMethod->getIssuers();
                $methods['paymentFee'][$paymentMethod->getMethodId()] = $paymentMethod->getPaymentSurchargeFee()->getType()
                    ? $paymentMethod->getPaymentSurchargeFee(): [];
            }
        }

        return $methods;
    }

    private function getDefaultOptions(): array
    {
        return [
            'data' => [],
            'image' => [],
            'issuers' => [],
            'paymentFee' => [],
        ];
    }
}
