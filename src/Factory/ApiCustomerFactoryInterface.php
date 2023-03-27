<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Factory;

use SyliusMolliePlugin\Request\Api\CreateCustomer;

interface ApiCustomerFactoryInterface
{
    public function createNew(array $details): CreateCustomer;
}
