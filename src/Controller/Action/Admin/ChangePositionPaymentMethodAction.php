<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Controller\Action\Admin;

use BitBag\SyliusMolliePlugin\Creator\ChangePositionPaymentMethodCreatorInterface;
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
