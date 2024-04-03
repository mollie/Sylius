<?php

namespace SyliusMolliePlugin\Controller\Action\Shop;

use Payum\Core\Model\GatewayConfigInterface;
use Payum\Core\Payum;
use Payum\Core\Security\GenericTokenFactoryInterface;
use Payum\Core\Security\TokenInterface;
use Sylius\Bundle\ResourceBundle\Controller\RequestConfigurationFactoryInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Sylius\Component\Order\Repository\OrderRepositoryInterface;
use Sylius\Component\Resource\Metadata\MetadataInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\RouterInterface;

final class PayumController
{
    public function __construct(
        private Payum $payum,
        private OrderRepositoryInterface $orderRepository,
        private MetadataInterface $orderMetadata,
        private RequestConfigurationFactoryInterface $requestConfigurationFactory,
        private RouterInterface $router
    ) {
    }

    public function __invoke(Request $request): Response
    {
        $configuration = $this->requestConfigurationFactory->create($this->orderMetadata, $request);
        $orderId = $request->get('orderId');

        /** @var OrderInterface|null $order */
        $order = $this->orderRepository->findOneBy(['id' => $orderId]);

        if (null === $order) {
            throw new NotFoundHttpException(sprintf('Order with token "%s" does not exist.', $tokenValue));
        }

        $request->getSession()->set('sylius_order_id', $order->getId());
        $payment = $order->getLastPayment();

        if (null === $payment) {
            $url = $this->router->generate('sylius_shop_order_thank_you');

            return new RedirectResponse($url);
        }
        $redirectOptions = ['route' => 'sylius_shop_order_after_pay'];

        $token = $this->provideTokenBasedOnPayment($payment, $redirectOptions);
        $url = $token->getTargetUrl();
        $url = str_replace('http://127.0.0.1', 'https://a2c6-178-222-249-248.ngrok-free.app', $url);

        return new RedirectResponse($url);
    }

    private function provideTokenBasedOnPayment(PaymentInterface $payment, array $redirectOptions): TokenInterface
    {
        /** @var PaymentMethodInterface $paymentMethod */
        $paymentMethod = $payment->getMethod();

        /** @var GatewayConfigInterface $gatewayConfig */
        $gatewayConfig = $paymentMethod->getGatewayConfig();

        if (isset($gatewayConfig->getConfig()['use_authorize']) && true === (bool) $gatewayConfig->getConfig()['use_authorize']) {
            $token = $this->getTokenFactory()->createAuthorizeToken(
                $gatewayConfig->getGatewayName(),
                $payment,
                $redirectOptions['route']
                ?? null,
                $redirectOptions['parameters']
                ?? [],
            );
        } else {
            $token = $this->getTokenFactory()->createCaptureToken(
                $gatewayConfig->getGatewayName(),
                $payment,
                $redirectOptions['route']
                ?? null,
                $redirectOptions['parameters']
                ?? [],
            );
        }

        return $token;
    }

    private function getTokenFactory(): GenericTokenFactoryInterface
    {
        return $this->payum->getTokenFactory();
    }
}
