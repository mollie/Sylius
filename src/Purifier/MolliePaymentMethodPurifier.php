<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Purifier;

use BitBag\SyliusMolliePlugin\Creator\MollieMethodsCreatorInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class MolliePaymentMethodPurifier implements MolliePaymentMethodPurifierInterface
{
    /** @var RepositoryInterface */
    private $repository;

    public function __construct(RepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function removeAllNoLongerSupportedMethods(): void
    {
        foreach (MollieMethodsCreatorInterface::UNSUPPORTED_METHODS as $methodId) {
            $this->removeMethod($methodId);
        }
    }

    public function removeMethod(string $methodId): void
    {
        $methodConfig = $this->repository->findOneBy(['methodId' => $methodId]);

        if ($methodConfig instanceof MollieGatewayConfigInterface) {
            $this->repository->remove($methodConfig);
        }
    }
}
