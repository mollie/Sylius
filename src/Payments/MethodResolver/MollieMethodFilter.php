<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Payments\MethodResolver;

use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use Sylius\Component\Core\Model\PaymentMethodInterface;

final class MollieMethodFilter implements MollieMethodFilterInterface
{
    /** @return PaymentMethodInterface[] */
    public function nonRecurringFilter(array $paymentMethods): array
    {
        $filteredMethods = [];
        /** @var PaymentMethodInterface $method */
        foreach ($paymentMethods as $method)
        {
           if ($method->getGatewayConfig()->getFactoryName() !== MollieSubscriptionGatewayFactory::FACTORY_NAME)
            {
                $filteredMethods[] = $method;
            }
        }
        return $filteredMethods;
    }

    /** @return PaymentMethodInterface[] */
    public function recurringFilter(array $paymentMethods): array
    {
        $filteredMethods = [];

        /** @var PaymentMethodInterface $method */
        foreach ($paymentMethods as $method)
        {
            if ($method->getGatewayConfig()->getFactoryName() !== MollieGatewayFactory::FACTORY_NAME)
            {
                $filteredMethods[] = $method;
            }
        }

        return $filteredMethods;
    }
}
