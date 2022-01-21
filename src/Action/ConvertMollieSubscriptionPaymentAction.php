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
use Mollie\Api\Types\PaymentMethod;
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
        $order->setRecurringSequenceIndex(0);

        /** @var CustomerInterface $customer */
        $customer = $order->getCustomer();

        $this->gateway->execute($currency = new GetCurrency($payment->getCurrencyCode()));

        $divisor = 10 ** $currency->exp;

        $amount = number_format(abs($payment->getAmount() / $divisor), 2, '.', '');
        $paymentOptions = $payment->getDetails();

        $paymentMethod = $paymentOptions['molliePaymentMethods'];
        $cartToken = $paymentOptions['cartToken'];
        $selectedIssuer = $paymentMethod === PaymentMethod::IDEAL ? $paymentOptions['issuers']['id'] : null;

        /** @var MollieGatewayConfigInterface $method */
        $method = $this->mollieMethodsRepository->findOneBy(
            ['methodId' => $paymentMethod, 'gateway' => $payment->getMethod()]
        );
        $gatewayConfig = $method->getGateway()->getConfig();

        $details = [
            'method' => $method->getMethodId(),
            'amount' => [
                'value' => "$amount",
                'currency' => $currency->code,
            ],
            'description' => $this->paymentDescription->getPaymentDescription($payment, $method, $order),
            'sequenceType' => 'first',
            'metadata' => [
                'order_id' => $order->getId(),
                'customer_id' => $customer->getId() ?? null,
                'molliePaymentMethods' => $paymentMethod ?? null,
                'cartToken' => $cartToken ?? null,
                'selected_issuer' => $selectedIssuer ?? null,
                'methodType' => Options::SUBSCRIPTIONS_API,
                'items' => [],
            ],
            'full_name' => $customer->getFullName() ?? null,
            'email' => $customer->getEmail() ?? null,
        ];

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

        $config = $this->mollieApiClient->getConfig();

        $details['times'] = $config['times'];
        $details['interval'] = $config['interval'];

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
