<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Provider\Apple;

use SyliusMolliePlugin\Entity\OrderInterface;

interface ApplePayDirectPaymentProviderInterface
{
    public function provideApplePayPayment(OrderInterface $order, array $applePayPaymentToken): void;
}
