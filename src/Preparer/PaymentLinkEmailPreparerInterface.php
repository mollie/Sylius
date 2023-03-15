<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Preparer;

use Sylius\Component\Core\Model\OrderInterface;

interface PaymentLinkEmailPreparerInterface
{
    public function prepare(OrderInterface $order, string $templateName): void;
}
