<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Payments;

use BitBag\SyliusMolliePlugin\Payments\Methods\MethodInterface;
use Mollie\Api\Resources\Method;

final class Methods implements MethodsInterface
{
    /** @var array */
    private $methods;

    public function add(Method $mollieMethod): void
    {
        /** @var MethodInterface $payment */
        foreach (self::GATEWAYS as $gateway) {
            $payment = new $gateway();

            if ($mollieMethod->id === $payment->getMethodId()) {
                $payment->setName($mollieMethod->description);
                $payment->setMinimumAmount((array) $mollieMethod->minimumAmount);
                $payment->setMaximumAmount((array) $mollieMethod->maximumAmount);
                $payment->setImage((array) $mollieMethod->image);
                $payment->setIssuers((array) $mollieMethod->issuers);

                $this->methods[] = $payment;
            }
        }
    }

    public function getAllEnabled(): array
    {
        $methods = [];

        /** @var MethodInterface $method */
        foreach ($this->methods as $method) {
            $methods[] = $method->isEnabled() ?: $method;
        }

        return $methods;
    }
}
