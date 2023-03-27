<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Validator\Constraints;

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

        /** @var PaymentInterface $payment */
        $payment = $order->getPayments()->last();

        /** @var ?PaymentMethodInterface $paymentMethod */
        $paymentMethod = $payment->getMethod();
        if (null === $paymentMethod) {
            return;
        }

        /** @var GatewayConfigInterface $gateway */
        $gateway = $paymentMethod->getGatewayConfig();

        if ((null !== $value) || (!$this->mollieGatewayFactoryChecker->isMollieGateway($gateway))) {
            return;
        }

        $this->requestStack->getSession()->getFlashBag()->add('error', 'sylius_mollie_plugin.empty_payment_method_checkout');
        if (!property_exists($constraint, 'message')) {
            throw new \InvalidArgumentException();
        }
        $this->context->buildViolation($constraint->message)->setTranslationDomain('messages')->addViolation();
    }
}
