<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;

final class MolliePaymentMethodImageResolver implements MolliePaymentMethodImageResolverInterface
{
    /** @var string */
    private $rootDir;

    public function __construct(string $rootDir)
    {
        $this->rootDir = $rootDir;
    }

    public function resolve(MollieGatewayConfigInterface $paymentMethod): string
    {
        if (null !== $paymentMethod->getCustomizeMethodImage() &&
            null !== $paymentMethod->getCustomizeMethodImage()->getPath()) {
            return sprintf("%s%s", $this->rootDir, $paymentMethod->getCustomizeMethodImage()->getPath());
        }

        return $paymentMethod->getImage()['svg'];
    }
}
