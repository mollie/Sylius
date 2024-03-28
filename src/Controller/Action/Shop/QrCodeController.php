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
use Symfony\Component\HttpFoundation\Request;

class QrCodeController
{
    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    /** @var CartContextInterface */
    private $cartContext;

    /** @var MollieApiClient */
    private $mollieApiClient;

    /**
     * @param MollieLoggerActionInterface $loggerAction
     * @param CartContextInterface $cartContext
     * @param MollieApiClient $mollieApiClient
     */
    public function __construct(MollieLoggerActionInterface $loggerAction, CartContextInterface $cartContext, MollieApiClient $mollieApiClient)
    {
        $this->loggerAction = $loggerAction;
        $this->cartContext = $cartContext;
        $this->mollieApiClient = $mollieApiClient;
    }

    /**
     * @param Request $request
     *
     * @return void
     * @throws ApiException
     */
    public function createMolliePayment(Request $request)
    {
        $order = $this->cartContext->getCart();
        $molliePayment = $this->buildPaymentObject($request, $order);

        try {
            /** @var Payment $payment */
            $payment = $this->mollieApiClient->payments->create($molliePayment->toArray());
        } catch (\Exception $e) {
            $this->loggerAction->addNegativeLog(sprintf('Error with payment creation: %s', $e->getMessage()));

            throw new ApiException(sprintf('Error with payment creation: %s', $e->getMessage()));
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
    private function buildPaymentObject(Request $request, OrderInterface $order): MolliePayment
    {
        $molliePayment = new MolliePayment();
        $molliePayment->setAmount(new Amount($order->getTotal(), $order->getCurrencyCode()));
        $molliePayment->setDescription($order->getNumber());
        $metadata = new Metadata(
            $order->getId(),
            $order->getCustomer()->getId(),
            $request->get('paymentMethod'),
            null,
            null,
            null,
            $request->get('issuer'),
            AbstractMethod::PAYMENT_API
        );
        $molliePayment->setMetadata($metadata);
        $molliePayment->setFullName($order->getCustomer()->getFullName());
        $molliePayment->setEmail($order->getCustomer()->getEmail());
        $molliePayment->setCustomerId($order->getCustomer()->getId());
        $molliePayment->setLocale($order->getLocaleCode());

        return $molliePayment;
    }
}
