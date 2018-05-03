<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Action\Api;

use BitBag\SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use BitBag\SyliusMolliePlugin\Action\Api\CancelRecurringSubscriptionAction;
use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\SubscriptionInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CancelRecurringSubscription;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use PhpSpec\ObjectBehavior;

final class CancelRecurringSubscriptionActionSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(CancelRecurringSubscriptionAction::class);
    }

    function it_implements_action_interface(): void
    {
        $this->shouldHaveType(ActionInterface::class);
    }

    function it_implements_api_aware_interface(): void
    {
        $this->shouldHaveType(ApiAwareInterface::class);
    }

    function it_extends_base_api_aware(): void
    {
        $this->shouldHaveType(BaseApiAwareAction::class);
    }

    function it_executes(
        CancelRecurringSubscription $request,
        MollieApiClient $mollieApiClient,
        SubscriptionInterface $subscription,
        \Mollie_API_Resource_Base $mollieApiResourceBase,
        \Mollie_API_Resource_Customers_Subscriptions $subscriptions
    ): void {
        $mollieApiClient->customers_subscriptions = $mollieApiResourceBase;
        $this->setApi($mollieApiClient);
        $mollieApiResourceBase->withParentId('id_1')->willReturn($subscriptions);
        $subscription->getSubscriptionId()->willReturn('id_1');
        $subscription->getCustomerId()->willReturn('id_1');
        $request->getModel()->willReturn($subscription);

        $subscriptions->cancel('id_1')->shouldBeCalled();

        $this->execute($request);
    }

    function it_supports_cancel_recurring_subscription_request_and_subscription_model(
        CancelRecurringSubscription $request,
        SubscriptionInterface $subscription
    ): void {
        $request->getModel()->willReturn($subscription);

        $this->supports($request)->shouldReturn(true);
    }
}
