<?php

namespace SyliusMolliePlugin\Controller\Action\Shop;

use Mollie\Api\Exceptions\ApiException;
use Mollie\Api\Resources\Payment;
use Sylius\Component\Order\Context\CartContextInterface;
use SyliusMolliePlugin\Client\MollieApiClient;
use SyliusMolliePlugin\DTO\MolliePayment\Amount;
use SyliusMolliePlugin\DTO\MolliePayment\Metadata;
use SyliusMolliePlugin\DTO\MolliePayment\MolliePayment;
use SyliusMolliePlugin\Entity\OrderInterface;
use SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use SyliusMolliePlugin\Payments\Methods\AbstractMethod;
use SyliusMolliePlugin\Resolver\MollieApiClientKeyResolverInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sylius\Component\Core\Repository\OrderRepositoryInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

final class QrCodeAction
{
    private const PAYMENT_API = 'Payments API';

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    /** @var CartContextInterface */
    private $cartContext;

    /** @var MollieApiClient */
    private $mollieApiClient;

    /** @var MollieApiClientKeyResolverInterface */
    private $apiClientKeyResolver;

    /** @var \Sylius\Component\Core\Repository\OrderRepositoryInterface */
    private $orderRepository;

    /** @var UrlGeneratorInterface */
    private $router;

    /**
     * QrCodeAction constructor
     */
    public function __construct(
        MollieLoggerActionInterface $loggerAction,
        CartContextInterface $cartContext,
        MollieApiClient $mollieApiClient,
        MollieApiClientKeyResolverInterface $apiClientKeyResolver,
        OrderRepositoryInterface $orderRepository,
        UrlGeneratorInterface $urlGenerator
    )
    {
        $this->loggerAction = $loggerAction;
        $this->cartContext = $cartContext;
        $this->mollieApiClient = $mollieApiClient;
        $this->apiClientKeyResolver = $apiClientKeyResolver;
        $this->orderRepository = $orderRepository;
        $this->urlGenerator = $urlGenerator;
    }

    /**
     * @param Request $request
     *
     * @return JsonResponse
     * @throws ApiException
     */
    public function createPayment(Request $request): Response
    {
        /** @var OrderInterface $order */
        $order = $this->cartContext->getCart();
        $molliePayment = $this->buildPaymentObject($request, $order);

        try {
            $this->mollieApiClient->setApiKey($this->apiClientKeyResolver->getClientWithKey()->getApiKey());
            /** @var Payment $payment */
            $payment = $this->mollieApiClient->payments->create($molliePayment->toArray(), ['include' => 'details.qrCode']);

            // save qr code to the db order
            $qrCodeObject = $payment->details->qrCode;
            $this->setQrCodeOnOrder($order, $qrCodeObject->src);
        } catch (\Exception $e) {
            $this->loggerAction->addNegativeLog(sprintf('Error with payment creation: %s', $e->getMessage()));

            throw new ApiException(sprintf('Error with payment creation: %s', $e->getMessage()));
        }

        return new JsonResponse(['qrCode' => $qrCodeObject], Response::HTTP_OK);
    }

    /**
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function fetchQrCodeFromOrder(Request $request)
    {
        /** @var OrderInterface $order */
        $order = $this->cartContext->getCart();
        $qrCode = null;

        if ($order && $order->getQrCode()) {
            $qrCode = $order->getQrCode();
        }

        return new JsonResponse(['qrCode' => $qrCode], Response::HTTP_OK);
    }

    /**
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function removeQrCodeFromOrder(Request $request)
    {
        /** @var OrderInterface $order */
        $order = $this->cartContext->getCart();
        $this->setQrCodeOnOrder($order);

        return new JsonResponse(['status' => Response::HTTP_OK]);
    }

    /**
     * @param OrderInterface $order
     * @param string|null $qrCode
     *
     * @return void
     */
    private function setQrCodeOnOrder(OrderInterface $order, ?string $qrCode = null)
    {
        try {
            $order->setQrCode($qrCode);
            $this->orderRepository->add($order);
        } catch (\Exception $exception) {
            $this->loggerAction->addNegativeLog(sprintf('Could not update qr code url on order: %s', $e->getMessage()));
        }
    }

    /**
     * Create mollie payment dto
     *
     * @param Request $request
     * @param OrderInterface $order
     *
     * @return MolliePayment
     */
    private function buildPaymentObject(Request $request, OrderInterface $order)
    {
        $molliePayment = new MolliePayment();
        $molliePayment->setAmount(new Amount((string)($order->getTotal() / 100), 'EUR'));
        $molliePayment->setMethod('ideal');
        $molliePayment->setDescription((string)$order->getId());
        $redirectUrl = $this->urlGenerator->generate('sylius_mollie_plugin_payum', [], UrlGeneratorInterface::ABSOLUTE_URL);
        $webhookUrl = $this->urlGenerator->generate('sylius_mollie_plugin_payment_webhook', [], UrlGeneratorInterface::ABSOLUTE_URL);
        $redirectUrl .= '?orderId=' . $order->getId();
        $webhookUrl .= '?orderId=' . $order->getId();
        $molliePayment->setWebhookUrl($webhookUrl);

        $molliePayment->setRedirectUrl($redirectUrl);
        $metadata = new Metadata(
            $order->getId(),
            (string)$order->getCustomer()->getId(),
            $request->get('paymentMethod') ?? 'ideal',
            null,
            null,
            null,
            $request->get('issuer') ?? '',
            self::PAYMENT_API,
        );
        $molliePayment->setMetadata($metadata);
        $molliePayment->setCustomerId(null);
        $molliePayment->setLocale($order->getLocaleCode());

        return $molliePayment;
    }
}
