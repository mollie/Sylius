<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action\Api;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CreateOrder;
use BitBag\SyliusMolliePlugin\Resolver\PaymentMethodConfigResolverInterface;
use Mollie\Api\Exceptions\ApiException;
use Payum\Core\Action\ActionInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Reply\HttpRedirect;
use Webmozart\Assert\Assert;

final class CreateOrderAction extends BaseApiAwareAction implements ActionInterface
{
    use GatewayAwareTrait;

    /** @var PaymentMethodConfigResolverInterface */
    private $methodConfigResolver;

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    public function __construct(
        PaymentMethodConfigResolverInterface $methodConfigResolver,
        MollieLoggerActionInterface $loggerAction
    ) {
        $this->methodConfigResolver = $methodConfigResolver;
        $this->loggerAction = $loggerAction;
    }

    public function execute($request): void
    {
        $details = ArrayObject::ensureArrayObject($request->getModel());

        $issuer = $details['metadata']['selected_issuer'] ?? null;
        $customerId = $details['metadata']['customer_mollie_id'] ?? null;
        $method = $details['metadata']['molliePaymentMethods'] ?? '';

        if (null !== $method) {
            /** @var MollieGatewayConfigInterface $paymentMethod */
            $paymentMethod = $this->methodConfigResolver->getConfigFromMethodId($method);

            $orderExpiredTime = $paymentMethod->getOrderExpiration();
            $interval = new \DateInterval('P' . $orderExpiredTime . 'D');
            $dateExpired = new \DateTimeImmutable('now');
            $dateExpired = $dateExpired->add($interval);
        }

        try {
            $order = $this->mollieApiClient->orders->create([
                'method' => $method,
                'payment' => [
                    'issuer' => $issuer,
                    'cardToken' => $details['metadata']['cartToken'],
                    'customerId' => $customerId,
                    'webhookUrl' => $details['webhookUrl'],
                ],
                'amount' => $details['amount'],
                'billingAddress' => $details['billingAddress'],
                'shippingAddress' => $details['shippingAddress'],
                'metadata' => $details['metadata'],
                'locale' => $details['locale'],
                'orderNumber' => $details['orderNumber'],
                'redirectUrl' => $details['backurl'],
                'webhookUrl' => $details['webhookUrl'],
                'lines' => $details['lines'],
                'expiresAt' => isset($dateExpired) ?
                    $dateExpired->format('Y-m-d') :
                    (new \DateTimeImmutable('now'))->format('Y-m-d'),
            ]);
        } catch (\Exception $e) {
            $this->loggerAction->addNegativeLog(sprintf('Error with create order with: %s', $e->getMessage()));

            throw new ApiException(sprintf('Error with create order with: %s', $e->getMessage()));
        }

        $details['order_mollie_id'] = $order->id;

        $this->loggerAction->addLog(sprintf('Create new order in mollie with id: %s', $order->id));

        Assert::notNull($order->getCheckoutUrl());

        throw new HttpRedirect($order->getCheckoutUrl());
    }

    public function supports($request): bool
    {
        return
            $request instanceof CreateOrder &&
            $request->getModel() instanceof \ArrayAccess;
    }
}
