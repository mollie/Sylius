<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Factory;

use BitBag\SyliusMolliePlugin\Factory\ApiCustomerFactory;
use BitBag\SyliusMolliePlugin\Factory\ApiCustomerFactoryInterface;
use BitBag\SyliusMolliePlugin\Request\Api\CreateCustomer;
use PhpSpec\ObjectBehavior;

final class ApiCustomerFactorySpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(ApiCustomerFactory::class);
        $this->shouldImplement(ApiCustomerFactoryInterface::class);
    }

    function it_creates_new(
        CreateCustomer $customer
    ): void
    {
        $details = [
            'amount' => [
                'value' => '445535.00',
                'currency' => 'EUR',
            ],
            'description' => 'description',
            'metadata' => [
                'order_id' => 1,
                'customer_id' => 1,
                'molliePaymentMethods' => 'ideal',
                'cartToken' => 'carttoken',
                'selected_issuer' => 'issuer',
                'methodType' => 'ORDER_API',
                'customer_mollie_id' => 15
            ],
            'full_name' => 'Jan Kowalski',
            'email' => 'shop@example.com'
        ];

        $this->createNew($details)->shouldHaveType(CreateCustomer::class);

    }

}
