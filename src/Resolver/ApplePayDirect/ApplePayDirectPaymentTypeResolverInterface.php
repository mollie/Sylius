<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver\ApplePayDirect;

use SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use Sylius\Component\Core\Model\PaymentInterface;

interface ApplePayDirectPaymentTypeResolverInterface
{
    public function resolve(
        MollieGatewayConfigInterface $mollieGatewayConfig,
        PaymentInterface $payment,
        array $applePayDirectToken
    ): void;
}
