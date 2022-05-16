<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Creator;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use Doctrine\ORM\EntityManagerInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\HttpFoundation\Request;

final class ChangePositionPaymentMethodCreator implements ChangePositionPaymentMethodCreatorInterface
{
    /** @var RepositoryInterface */
    private $mollieGatewayRepository;

    /** @var EntityManagerInterface */
    private $mollieGatewayEntityManager;

    public function __construct(
        RepositoryInterface $mollieGatewayRepository,
        EntityManagerInterface $mollieGatewayObjectManager
    ) {
        $this->mollieGatewayRepository = $mollieGatewayRepository;
        $this->mollieGatewayEntityManager = $mollieGatewayObjectManager;
    }

    public function createFromRequest(Request $request): void
    {
        $positions = $this->emptyPositionFilter($request->get('data', []));

        foreach ($positions as $position) {
            $method = $this->mollieGatewayRepository->findOneBy([
                'methodId' => $position['name'],
                'id' => $position['identifier'],
            ]);
            if ($method instanceof MollieGatewayConfigInterface && isset($position['id'])) {
                $method->setPosition((int) $position['id']);

                $this->mollieGatewayEntityManager->persist($method);
            }
        }

        $this->mollieGatewayEntityManager->flush();
    }

    private function emptyPositionFilter(array $positions): array
    {
        return array_filter($positions, function (array $position): bool {
            return isset($position['id']) && '' !== $position['id'];
        });
    }
}
