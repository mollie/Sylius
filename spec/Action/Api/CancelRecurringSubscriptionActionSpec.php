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
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionConfigurationInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CancelRecurringSubscription;
use Mollie\Api\Endpoints\CustomerEndpoint;
use Mollie\Api\Exceptions\ApiException;
use Mollie\Api\Resources\Customer;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use PhpSpec\ObjectBehavior;

final class CancelRecurringSubscriptionActionSpec extends ObjectBehavior
{
    function let(MollieLoggerActionInterface $loggerAction): void
    {
        $this->beConstructedWith(
            $loggerAction
        );
    }

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
        MollieSubscriptionInterface $subscription,
        MollieSubscriptionConfigurationInterface $configuration,
        CustomerEndpoint $customerEndpoint,
        Customer $customer,
        MollieLoggerActionInterface $loggerAction
    ): void {
        $mollieApiClient->customers = $customerEndpoint;
        $this->setApi($mollieApiClient);
        $request->getModel()->willReturn($subscription);
        $subscription->getSubscriptionConfiguration()->willReturn($configuration);
        $configuration->getCustomerId()->willReturn('id_1');
        $configuration->getSubscriptionId()->willReturn('sub_id_1');
        $customerEndpoint->get('id_1')->willReturn($customer);
        $loggerAction->addLog('Cancel recurring subscription with id:  sub_id_1');


        $customer->cancelSubscription('sub_id_1')->shouldBeCalled();

        $this->execute($request);
    }

    function it_executes_and_throws_exception(
        CancelRecurringSubscription $request,
        MollieApiClient $mollieApiClient,
        MollieSubscriptionInterface $subscription,
        MollieSubscriptionConfigurationInterface $configuration,
        CustomerEndpoint $customerEndpoint,
        MollieLoggerActionInterface $loggerAction
    ): void {
        $mollieApiClient->customers = $customerEndpoint;
        $this->setApi($mollieApiClient);
        $request->getModel()->willReturn($subscription);
        $subscription->getSubscriptionConfiguration()->willReturn($configuration);
        $configuration->getCustomerId()->willReturn('id_1');
        $configuration->getSubscriptionId()->willReturn('sub_id_1');
        $e = new \Exception();
        $customerEndpoint->get('id_1')->willThrow($e);
        $loggerAction->addNegativeLog(sprintf(
            'Error with get customer in recurring subscription with: %s',
            $e->getMessage()))->shouldBeCalled();

        $this->shouldThrow(ApiException::class)
            ->during('execute', [$request]);
    }

    function it_supports_cancel_recurring_subscription_request_and_subscription_model(
        CancelRecurringSubscription $request,
        MollieSubscriptionInterface $subscription
    ): void {
        $request->getModel()->willReturn($subscription);

        $this->supports($request)->shouldReturn(true);
    }
}
