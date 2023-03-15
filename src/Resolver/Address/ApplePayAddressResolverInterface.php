<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver\Address;

use Sylius\Component\Core\Model\OrderInterface;

interface ApplePayAddressResolverInterface
{
    public function resolve(OrderInterface $order, array $applePayData): void;
}
