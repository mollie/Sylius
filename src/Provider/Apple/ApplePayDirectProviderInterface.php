<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Provider\Apple;

use SyliusMolliePlugin\Entity\OrderInterface;
use Symfony\Component\HttpFoundation\Request;

interface ApplePayDirectProviderInterface
{
    public function provideOrder(OrderInterface $order, Request $request): void;
}
