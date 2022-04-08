<?php

/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Guard;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionScheduleInterface;
use BitBag\SyliusMolliePlugin\Guard\SubscriptionGuard;
use BitBag\SyliusMolliePlugin\Guard\SubscriptionGuardInterface;
use Doctrine\Common\Collections\ArrayCollection;
use PhpSpec\ObjectBehavior;

final class SubscriptionGuardSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(SubscriptionGuard::class);
    }

    function it_should_implement_subscription_guard_interface(): void
    {
        $this->shouldImplement(SubscriptionGuardInterface::class);
    }

    function it_is_eligible_for_payments_abort(MollieSubscriptionInterface $subscription): void
    {
        $subscription->getRecentFailedPaymentsCount()->willReturn(3);
        $this->isEligibleForPaymentsAbort($subscription)->shouldReturn(true);

        $subscription->getRecentFailedPaymentsCount()->willReturn(0);
        $this->isEligibleForPaymentsAbort($subscription)->shouldReturn(false);
    }

    function it_is_completable_with_fulfilled_date(
        MollieSubscriptionInterface $subscription,
        MollieSubscriptionScheduleInterface $schedule
    ): void {
        $subscription->getSchedules()->willReturn(new ArrayCollection([
           $schedule->getWrappedObject()
        ]));

        $schedule->isFulfilled()->willReturn(true);

        $this->isCompletable($subscription)->shouldReturn(true);
    }

    function it_is_completable_without_fulfilled_date(
        MollieSubscriptionInterface $subscription,
        MollieSubscriptionScheduleInterface $schedule
    ): void {
        $subscription->getSchedules()->willReturn(new ArrayCollection([
            $schedule->getWrappedObject()
        ]));

        $schedule->isFulfilled()->willReturn(false);

        $this->isCompletable($subscription)->shouldReturn(false);
    }
}
