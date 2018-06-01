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
use BitBag\SyliusMolliePlugin\Action\Api\CreateCustomerAction;
use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Request\Api\CreateCustomer;
use Mollie\Api\Endpoints\CustomerEndpoint;
use Mollie\Api\Resources\Customer;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use PhpSpec\ObjectBehavior;

final class CreateCustomerActionSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(CreateCustomerAction::class);
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
        CreateCustomer $request,
        MollieApiClient $mollieApiClient,
        CustomerEndpoint $customerEndpoint,
        Customer $customer,
        ArrayObject $arrayObject
    ): void {
        $mollieApiClient->customers = $customerEndpoint;
        $this->setApi($mollieApiClient);
        $customer->id = 'id_1';
        $arrayObject->offsetGet('fullName')->willReturn('Jan Kowalski');
        $arrayObject->offsetGet('email')->willReturn('shop@example.com');
        $request->getModel()->willReturn($arrayObject);
        $customerEndpoint->create(['name' => 'Jan Kowalski', 'email' => 'shop@example.com'])->willReturn($customer);

        $arrayObject->offsetSet('customer_mollie_id', 'id_1')->shouldBeCalled();

        $this->execute($request);
    }

    function it_supports_only_create_customer_request_and_array_access(
        CreateCustomer $request,
        \ArrayAccess $arrayAccess
    ): void {
        $request->getModel()->willReturn($arrayAccess);

        $this->supports($request)->shouldReturn(true);
    }
}
