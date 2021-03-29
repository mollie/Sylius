<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Controller\Action\Admin;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

final class ChangePositionPaymentMethodAction
{
    /** @var RepositoryInterface */
    private $mollieGatewayRepository;

    /** @var ObjectManager */
    private $mollieGatewayObjectManager;

    public function __construct(
        RepositoryInterface $mollieGatewayRepository,
        ObjectManager $mollieGatewayObjectManager
    ) {
        $this->mollieGatewayRepository = $mollieGatewayRepository;
        $this->mollieGatewayObjectManager = $mollieGatewayObjectManager;
    }

    public function __invoke(Request $request): Response
    {
        $positions = $this->emptyPositionFilter($request->get('data', []));

        foreach ($positions as $position) {
            $method = $this->mollieGatewayRepository->findOneBy(['methodId' => $position['name']]);
            if ($method instanceof MollieGatewayConfigInterface and isset($position['id'])) {
                $method->setPosition((int) $position['id']);

                $this->mollieGatewayObjectManager->persist($method);
            }
        }

        $this->mollieGatewayObjectManager->flush();

        return new Response('OK');
    }

    private function emptyPositionFilter(array $positions): array
    {
        return array_filter($positions, function (array $position): bool {
            return isset($position['id']) && $position['id'] !== '';
        });
    }
}
