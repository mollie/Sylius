<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver\Address;

use Sylius\Component\Core\Model\AddressInterface;

interface AddressResolverInterface
{
    public function resolve(array $applePayDirectAddress): AddressInterface;
}
