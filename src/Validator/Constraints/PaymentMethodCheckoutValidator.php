<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Validator\Constraints;

use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Resolver\Order\PaymentCheckoutOrderResolverInterface;
use Payum\Core\Model\GatewayConfigInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

final class PaymentMethodCheckoutValidator extends ConstraintValidator
{
    /** @var Session */
    private $session;

    /** @var PaymentCheckoutOrderResolverInterface */
    private $paymentCheckoutOrderResolver;

    public function __construct(
        PaymentCheckoutOrderResolverInterface $paymentCheckoutOrderResolver,
        Session $session
    ) {
        $this->session = $session;
        $this->paymentCheckoutOrderResolver = $paymentCheckoutOrderResolver;
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

        if (MollieGatewayFactory::FACTORY_NAME !== $gateway->getFactoryName() || null !== $value) {
            return;
        }

        $this->session->getFlashBag()->add('error', 'bitbag_sylius_mollie_plugin.empty_payment_method_checkout');
        if (!property_exists($constraint, 'message')) {
            throw new \InvalidArgumentException();
        }
        $this->context->buildViolation($constraint->message)->setTranslationDomain('messages')->addViolation();
    }
}
