<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action;

use BitBag\SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use BitBag\SyliusMolliePlugin\MollieGatewayFactoryInterface;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Request\Convert;
use Payum\Core\Request\GetCurrency;
use Sylius\Bundle\PayumBundle\Provider\PaymentDescriptionProviderInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;

final class ConvertPaymentAction extends BaseApiAwareAction implements ActionInterface, GatewayAwareInterface, ApiAwareInterface
{
    use GatewayAwareTrait;

    /**
     * @var PaymentDescriptionProviderInterface
     */
    private $paymentDescriptionProvider;

    /**
     * @param PaymentDescriptionProviderInterface $paymentDescriptionProvider
     */
    public function __construct(PaymentDescriptionProviderInterface $paymentDescriptionProvider)
    {
        $this->paymentDescriptionProvider = $paymentDescriptionProvider;
    }

    /**
     * {@inheritdoc}
     *
     * @param Convert $request
     */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        /** @var PaymentInterface $payment */
        $payment = $request->getSource();

        /** @var OrderInterface $order */
        $order = $payment->getOrder();

        $customer = $order->getCustomer();

        $this->gateway->execute($currency = new GetCurrency($payment->getCurrencyCode()));

        $divisor = 10 ** $currency->exp;

        $amount = $payment->getAmount() / $divisor;

        $details = [
            'amount' => [
                'value' => "$amount",
                'currency' => $currency->code,
            ],
            'description' => $this->paymentDescriptionProvider->getPaymentDescription($payment),
            'metadata' => [
                'order_id' => $order->getId(),
                'customer_id' => $customer->getId() ?? null,
            ],
            'full_name' => $customer->getFullName() ?? null,
            'email' => $customer->getEmail() ?? null,
        ];

        if (true === $this->mollieApiClient->isRecurringSubscription()) {
            $config = $this->mollieApiClient->getConfig();

            $details['times'] = $config['times'];
            $details['interval'] = $config['interval'];
        }

        if (false === $this->mollieApiClient->isRecurringSubscription()) {
            $details['locale'] = true === in_array($order->getLocaleCode(), MollieGatewayFactoryInterface::LOCALES_AVAILABLE) ? $order->getLocaleCode() : 'en_US';
        }

        $request->setResult($details);
    }

    /**
     * {@inheritdoc}
     */
    public function supports($request): bool
    {
        return
            $request instanceof Convert &&
            $request->getSource() instanceof PaymentInterface &&
            $request->getTo() === 'array'
        ;
    }
}
