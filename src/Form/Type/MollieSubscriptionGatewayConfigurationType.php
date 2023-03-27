<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Form\Type;

use Symfony\Component\Form\AbstractType;

final class MollieSubscriptionGatewayConfigurationType extends AbstractType
{
    public function getParent(): string
    {
        return MollieGatewayConfigurationType::class;
    }
}
