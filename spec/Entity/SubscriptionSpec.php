<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Entity;

use BitBag\SyliusMolliePlugin\Entity\Subscription;
use BitBag\SyliusMolliePlugin\Entity\SubscriptionInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Core\Model\OrderInterface;

class SubscriptionSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(Subscription::class);
    }

    function it_implements_subscription_interface(): void
    {
        $this->shouldHaveType(SubscriptionInterface::class);
    }

    function it_has_null_id_by_default(): void
    {
        $this->getId()->shouldReturn(null);
    }

    function it_gets_order(OrderInterface $order): void
    {
        $this->setOrder($order);
        $this->getOrder()->shouldReturn($order);
    }

    function it_gets_state(): void
    {
        $this->setState('active');
        $this->getState()->shouldReturn('active');
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
}
