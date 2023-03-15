<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Action;

use SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use SyliusMolliePlugin\Entity\OrderInterface;
use SyliusMolliePlugin\Helper\ConvertOrderInterface;
use SyliusMolliePlugin\Helper\PaymentDescriptionInterface;
use SyliusMolliePlugin\Request\Api\CreateCustomer;
use SyliusMolliePlugin\Resolver\PaymentLocaleResolverInterface;
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
use Webmozart\Assert\Assert;

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
    ) {
        $this->paymentDescription = $paymentDescription;
        $this->session = $session;
        $this->mollieMethodsRepository = $mollieMethodsRepository;
        $this->orderConverter = $orderConverter;
        $this->customerContext = $customerContext;
        $this->paymentLocaleResolver = $paymentLocaleResolver;
    }

    /** @param Convert|mixed $request */
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

        Assert::notNull($payment->getCurrencyCode());
        $this->gateway->execute($currency = new GetCurrency($payment->getCurrencyCode()));

        $divisor = 10 ** $currency->exp;

        Assert::notNull($payment->getAmount());
        $amount = number_format(abs($payment->getAmount() / $divisor), 2, '.', '');
        $paymentOptions = $payment->getDetails();

        $cartToken = $paymentOptions['cartToken'];
        $sequenceType = array_key_exists(
            'recurring',
            $paymentOptions
        ) && true === $paymentOptions['recurring'] ? 'recurring' : 'first';

        if (isset($paymentOptions['metadata'])) {
            $paymentMethod = $paymentOptions['metadata']['molliePaymentMethods'] ?? null;
        } else {
            $paymentMethod = $paymentOptions['molliePaymentMethods'] ?? null;
        }
        $selectedIssuer = PaymentMethod::IDEAL === $paymentMethod ? $paymentOptions['issuers']['id'] : null;

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
                'sequenceType' => $sequenceType,
                'gateway' => $request->getToken()->getGatewayName(),
                'selected_issuer' => $selectedIssuer ?? null,
            ],
            'full_name' => $customer->getFullName() ?? null,
            'email' => $customer->getEmail() ?? null,
        ];
        $details['metadata'] = array_merge($details['metadata'], $paymentOptions['metadata'] ?? []);

        if (isset($paymentOptions['mandateId'])) {
            $details['mandateId'] = $paymentOptions['mandateId'];
        }

        $this->gateway->execute($mollieCustomer = new CreateCustomer($details));
        $model = $mollieCustomer->getModel();
        $details['customerId'] = $model['customer_mollie_id'];

        $request->setResult($details);
    }

    public function supports($request): bool
    {
        return
            $request instanceof Convert
            && $request->getSource() instanceof PaymentInterface
            && $request->getSource()->getOrder() instanceof OrderInterface
            && 'array' === $request->getTo();
    }
}
