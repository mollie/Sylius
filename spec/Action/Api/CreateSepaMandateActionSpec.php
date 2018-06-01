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
use BitBag\SyliusMolliePlugin\Action\Api\CreateSepaMandateAction;
use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Request\Api\CreateSepaMandate;
use Mollie\Api\Endpoints\CustomerEndpoint;
use Mollie\Api\Resources\Customer;
use Mollie\Api\Resources\Mandate;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayInterface;
use PhpSpec\ObjectBehavior;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

final class CreateSepaMandateActionSpec extends ObjectBehavior
{
    function let(SessionInterface $session): void
    {
        $this->beConstructedWith(
            $session
        );
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(CreateSepaMandateAction::class);
    }

    function it_implements_action_interface(): void
    {
        $this->shouldHaveType(ActionInterface::class);
    }

    function it_implements_api_aware_interface(): void
    {
        $this->shouldHaveType(ApiAwareInterface::class);
    }

    function it_implements_gateway_aware_interface(): void
    {
        $this->shouldHaveType(GatewayAwareInterface::class);
    }

    function it_extends_base_api_aware(): void
    {
        $this->shouldHaveType(BaseApiAwareAction::class);
    }

    function it_executes(
        CreateSepaMandate $request,
        MollieApiClient $mollieApiClient,
        ArrayObject $arrayObject,
        GatewayInterface $gateway,
        SessionInterface $session,
        CustomerEndpoint $customerEndpoint,
        Customer $customer,
        Mandate $mandate
    ): void {
        $this->setApi($mollieApiClient);
        $this->setGateway($gateway);
        $mollieApiClient->customers = $customerEndpoint;
        $mandate->id = 'id_1';
        $customer->createMandate([
            'consumerAccount' => '57357086404',
            'consumerName' => 'Example',
            'method' => 'directdebit',
        ])->willReturn($mandate);
        $customerEndpoint->get('id_1')->willReturn($customer);
        $session->get('mollie_direct_debit_data', null)->willReturn([
            'iban' => '57357086404',
            'consumerName' => 'Example',
        ]);
        $arrayObject->offsetGet('customer_mollie_id')->willReturn('id_1');
        $request->getModel()->willReturn($arrayObject);

        $arrayObject->offsetSet('mandate_mollie_id', 'id_1')->shouldBeCalled();

        $this->execute($request);
    }

    function it_supports_only_create_sepa_mandate_request_and_array_access(
        CreateSepaMandate $request,
        \ArrayAccess $arrayAccess
    ): void {
        $request->getModel()->willReturn($arrayAccess);

        $this->supports($request)->shouldReturn(true);
    }
}
