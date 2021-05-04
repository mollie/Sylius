<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Checker\ApplePay;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use Mollie\Api\Types\PaymentMethod;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class ApplePayEnabledChecker implements ApplePayEnabledCheckerInterface
{
    /** @var RepositoryInterface */
    private $mollieGatewayConfigurationRepository;

    public function __construct(RepositoryInterface $mollieGatewayConfigurationRepository)
    {
        $this->mollieGatewayConfigurationRepository = $mollieGatewayConfigurationRepository;
    }

    public function isEnabled(): bool
    {
        $applePayConfig = $this->mollieGatewayConfigurationRepository->findOneBy([
            'methodId' => PaymentMethod::APPLEPAY,
        ]);

        if ($applePayConfig instanceof MollieGatewayConfigInterface) {
            return $applePayConfig->isApplePayDirectButton() && $applePayConfig->isEnabled();
        }

        return false;
    }
}
