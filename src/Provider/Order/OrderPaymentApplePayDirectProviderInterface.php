<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Provider\Order;

use SyliusMolliePlugin\Entity\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;

interface OrderPaymentApplePayDirectProviderInterface
{
    public function provideOrderPayment(OrderInterface $order, string $targetState): ?PaymentInterface;
}
