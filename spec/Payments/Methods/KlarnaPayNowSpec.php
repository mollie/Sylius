<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Payments\Methods;

use BitBag\SyliusMolliePlugin\Payments\Methods\AbstractMethod;
use BitBag\SyliusMolliePlugin\Payments\Methods\KlarnaPayNow;
use Mollie\Api\Types\PaymentMethod;
use PhpSpec\ObjectBehavior;

final class KlarnaPayNowSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(KlarnaPayNow::class);
    }

    function it_should_extends_abstract_method(): void
    {
        $this->shouldHaveType(AbstractMethod::class);
    }

    function it_gets_method_id(): void
    {
        $this->getMethodId()->shouldReturn(PaymentMethod::KLARNA_PAY_NOW);
    }

    function it_gets_payment_type(): void
    {
        $this->getPaymentType()->shouldReturn(AbstractMethod::ORDER_API);
    }
}
