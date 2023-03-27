<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Creator;

use Symfony\Component\HttpFoundation\Request;

interface ChangePositionPaymentMethodCreatorInterface
{
    public function createFromRequest(Request $request): void;
}
