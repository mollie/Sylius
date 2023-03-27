<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Creator;

use SyliusMolliePlugin\Entity\GatewayConfigInterface;
use Mollie\Api\Resources\MethodCollection;

interface MollieMethodsCreatorInterface
{
    public function createMethods(MethodCollection $allMollieMethods, GatewayConfigInterface $gateway): void;
}
