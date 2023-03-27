<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Factory;

use SyliusMolliePlugin\Request\Api\CreateCustomer;

final class ApiCustomerFactory implements ApiCustomerFactoryInterface
{
    public function createNew(array $details): CreateCustomer
    {
        return new CreateCustomer($details);
    }
}
