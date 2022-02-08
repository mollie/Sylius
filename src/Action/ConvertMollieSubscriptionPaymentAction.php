<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action;

use BitBag\SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Entity\ProductVariantInterface;
use BitBag\SyliusMolliePlugin\Helper\ConvertOrderInterface;
use BitBag\SyliusMolliePlugin\Helper\PaymentDescriptionInterface;
use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use BitBag\SyliusMolliePlugin\Request\Api\CreateCustomer;
use BitBag\SyliusMolliePlugin\Resolver\PaymentLocaleResolverInterface;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Request\Convert;
use Payum\Core\Request\GetCurrency;
use Sylius\Bundle\CoreBundle\Context\CustomerContext;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

final class ConvertMollieSubscriptionPaymentAction extends BaseApiAwareAction implements ActionInterface, GatewayAwareInterface, ApiAwareInterface
{
    use GatewayAwareTrait;

    /** @var PaymentDescriptionInterface */
    private $paymentDescription;

    /** @var SessionInterface */
    private $session;

    /** @var RepositoryInterface */
    private $mollieMethodsRepository;

    /** @var ConvertOrderInterface */
    private $orderConverter;

    /** @var CustomerContext */
    private $customerContext;

    /** @var PaymentLocaleResolverInterface */
    private $paymentLocaleResolver;

    public function __construct(
        PaymentDescriptionInterface $paymentDescription,
        SessionInterface $session,
        RepositoryInterface $mollieMethodsRepository,
        ConvertOrderInterface $orderConverter,
        CustomerContext $customerContext,
        PaymentLocaleResolverInterface $paymentLocaleResolver
    )
    {
        $this->paymentDescription = $paymentDescription;
        $this->session = $session;
        $this->mollieMethodsRepository = $mollieMethodsRepository;
        $this->orderConverter = $orderConverter;
        $this->customerContext = $customerContext;
        $this->paymentLocaleResolver = $paymentLocaleResolver;
    }

    /** @param Convert $request */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        /** @var PaymentInterface $payment */
        $payment = $request->getSource();

        /** @var OrderInterface $order */
        $order = $payment->getOrder();
        if (null === $order->getRecurringSequenceIndex()) {
            $order->setRecurringSequenceIndex(0);
        }

        /** @var CustomerInterface $customer */
        $customer = $order->getCustomer();

        $this->gateway->execute($currency = new GetCurrency($payment->getCurrencyCode()));

        $divisor = 10 ** $currency->exp;

        $amount = number_format(abs($payment->getAmount() / $divisor), 2, '.', '');
        $paymentOptions = $payment->getDetails();

        $paymentMethod = $paymentOptions['molliePaymentMethods'];
        $cartToken = $paymentOptions['cartToken'];
        $sequenceType = array_key_exists('recurring', $paymentOptions) && true === $paymentOptions['recurring'] ? 'recurring' : 'first';

        $details = [
            'amount' => [
                'value' => "$amount",
                'currency' => $currency->code,
            ],
            'description' => $order->getNumber(),
            'sequenceType' => $sequenceType,
            'metadata' => [
                'order_id' => $order->getId(),
                'customer_id' => $customer->getId() ?? null,
                'molliePaymentMethods' => $paymentMethod ?? null,
                'cartToken' => $cartToken ?? null,
                'selected_issuer' => null,
                'methodType' => Options::SUBSCRIPTIONS_API,
                'items' => [],
                'sequenceType' => $sequenceType,
                'gateway' => $payment->getMethod()->getName()
            ],
            'full_name' => $customer->getFullName() ?? null,
            'email' => $customer->getEmail() ?? null,
        ];
        $details['metadata'] = array_merge($details['metadata'], $paymentOptions['metadata'] ?? []);

        $this->gateway->execute($mollieCustomer = new CreateCustomer($details));
        $model = $mollieCustomer->getModel();
        $details['customerId'] = $model['customer_mollie_id'];

        foreach ($order->getItems() as $item) {
            /** @var ProductVariantInterface $variant */
            $variant = $item->getVariant();
            $details['metadata']['items'][] = [
                'itemId' => $item->getId(),
                'variant' => $variant->getId(),
                'interval' => $variant->getInterval(),
                'times' => $variant->getTimes(),
                'total' => $item->getTotal(),
                'currency' => $order->getCurrencyCode(),

            ];
        }

        $request->setResult($details);
    }

    public function supports($request): bool
    {
        return
            $request instanceof Convert
            && $request->getSource() instanceof PaymentInterface
            && $request->getSource()->getOrder() instanceof OrderInterface
            && $request->getTo() === 'array';
    }
}
