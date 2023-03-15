<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Helper;

use SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;

interface PaymentDescriptionInterface
{
    public const PAYPAL_DESCRIPTION = 'Order';

    public function getPaymentDescription(
        PaymentInterface $payment,
        MollieGatewayConfigInterface $methodConfig,
        OrderInterface $order
    ): string;
}
