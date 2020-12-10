<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Webmozart\Assert\Assert;

final class PaymentMethodConfigResolver implements PaymentMethodConfigResolverInterface
{
    /** @var RepositoryInterface */
    private $mollieMethodRepository;

    public function __construct(RepositoryInterface $mollieMethodRepository)
    {
        $this->mollieMethodRepository = $mollieMethodRepository;
    }

    public function getConfigFromMethodId(string $methodId): MollieGatewayConfigInterface
    {
        $paymentMethod = $this->mollieMethodRepository->findOneBy(['methodId' => $methodId]);

        Assert::notNull($paymentMethod, sprintf('Cannot find payment method config with method id %s', $methodId));

        return $paymentMethod;
    }
}
