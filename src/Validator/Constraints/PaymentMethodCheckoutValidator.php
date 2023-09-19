<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Validator\Constraints;

use Mollie\Api\Types\PaymentMethod;
use SyliusMolliePlugin\Checker\Gateway\MollieGatewayFactoryCheckerInterface;
use SyliusMolliePlugin\Resolver\Order\PaymentCheckoutOrderResolverInterface;
use Payum\Core\Model\GatewayConfigInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

final class PaymentMethodCheckoutValidator extends ConstraintValidator
{
    /** @var RequestStack */
    private $requestStack;

    /** @var PaymentCheckoutOrderResolverInterface */
    private $paymentCheckoutOrderResolver;

    private MollieGatewayFactoryCheckerInterface $mollieGatewayFactoryChecker;

    public function __construct(
        PaymentCheckoutOrderResolverInterface $paymentCheckoutOrderResolver,
        RequestStack $requestStack,
        MollieGatewayFactoryCheckerInterface $mollieGatewayFactoryChecker
    ) {
        $this->requestStack = $requestStack;
        $this->paymentCheckoutOrderResolver = $paymentCheckoutOrderResolver;
        $this->mollieGatewayFactoryChecker = $mollieGatewayFactoryChecker;
    }

    public function validate($value, Constraint $constraint): void
    {
        $order = $this->paymentCheckoutOrderResolver->resolve();

        /** @var PaymentInterface|null $payment */
        $payment = $order->getPayments()->last();

        if(null === $payment || false === $payment)
        {
            return;
        }

        /** @var ?PaymentMethodInterface $paymentMethod */
        $paymentMethod = $payment->getMethod();
        if (null === $paymentMethod) {
            return;
        }

        /** @var GatewayConfigInterface $gateway */
        $gateway = $paymentMethod->getGatewayConfig();

        if ($value === null && $this->mollieGatewayFactoryChecker->isMollieGateway($gateway)) {
            $this->flashMessage($constraint, 'error', 'sylius_mollie_plugin.empty_payment_method_checkout');
        }

        if ($value === PaymentMethod::BILLIE && empty($order->getBillingAddress()->getCompany())) {
            $this->flashMessage($constraint, 'error', 'sylius_mollie_plugin.billie.error.company_missing');
        }
    }

    /**
     * @param Constraint $constraint
     * @param string $type
     * @param string $messageKey
     * @return void
     */
    private function flashMessage(Constraint $constraint, string $type, string $messageKey)
    {
        $this->requestStack->getSession()->getFlashBag()->add($type, $messageKey);
        if (!property_exists($constraint, 'message')) {
            throw new \InvalidArgumentException();
        }

        $this->context->buildViolation($constraint->message)->setTranslationDomain('messages')->addViolation();
    }
}
