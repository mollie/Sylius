<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Entity;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionConfiguration;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use PhpSpec\ObjectBehavior;

final class MollieSubscriptionConfigurationSpec extends ObjectBehavior
{
    function let(MollieSubscriptionInterface $subscription): void
    {
        $this->beConstructedWith($subscription);
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieSubscriptionConfiguration::class);
    }

    function it_has_null_id_by_default(): void
    {
        $this->getId()->shouldReturn(null);
    }

    function it_gets_host_name(): void
    {
        $this->setHostName('test_host');
        $this->getHostName()->shouldReturn('test_host');
    }

    function it_gets_port(): void
    {
        $this->setPort(3308);
        $this->getPort()->shouldReturn(3308);
    }

    function it_gets_subscription_id(): void
    {
        $this->setSubscriptionId('id_1');
        $this->getSubscriptionId()->shouldReturn('id_1');
    }

    function it_gets_customer_id(): void
    {
        $this->setCustomerId('id_1');
        $this->getCustomerId()->shouldReturn('id_1');
    }

    function it_gets_mandate_id(): void
    {
        $this->setMandateId('id_1');
        $this->getMandateId()->shouldReturn('id_1');
    }

    function it_gets_interval(): void
    {
        $this->setInterval('60');
        $this->getInterval()->shouldReturn('60');
    }

    function it_gets_number_of_repetitions(): void
    {
        $this->setNumberOfRepetitions(69);
        $this->getNumberOfRepetitions()->shouldReturn(69);
    }

    function it_gets_payment_details_configuration(): void
    {
        $this->setPaymentDetailsConfiguration([
            'id' => 1,
            'code' => 'test_code',
            'status' => 'open',
        ]);
        $this->getPaymentDetailsConfiguration()->shouldReturn([
            'id' => 1,
            'code' => 'test_code',
            'status' => 'open',
        ]);
    }

}
