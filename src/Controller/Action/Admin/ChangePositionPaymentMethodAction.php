<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Controller\Action\Admin;

use SyliusMolliePlugin\Creator\ChangePositionPaymentMethodCreatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

final class ChangePositionPaymentMethodAction
{
    /** @var ChangePositionPaymentMethodCreatorInterface */
    private $changePositionPaymentMethodCreator;

    public function __construct(ChangePositionPaymentMethodCreatorInterface $changePositionPaymentMethodCreator)
    {
        $this->changePositionPaymentMethodCreator = $changePositionPaymentMethodCreator;
    }

    public function __invoke(Request $request): Response
    {
        $this->changePositionPaymentMethodCreator->createFromRequest($request);

        return new Response('OK');
    }
}
