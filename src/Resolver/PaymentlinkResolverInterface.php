<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver;

use Mollie\Api\Types\PaymentMethod;
use Sylius\Component\Core\Model\OrderInterface;

interface PaymentlinkResolverInterface
{
    public const NO_AVAILABLE_METHODS = [
        PaymentMethod::KLARNA_PAY_LATER,
        PaymentMethod::KLARNA_SLICE_IT,
    ];

    public function resolve(
        OrderInterface $order,
        array $data,
        string $templateName
    ): string;
}
