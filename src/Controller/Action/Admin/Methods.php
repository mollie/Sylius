<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Controller\Action\Admin;

use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Request\Api\GetMethods;
use Payum\Core\Payum;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

final class Methods
{
    /** @var Payum */
    private $payum;

    public function __construct(Payum $payum)
    {
        $this->payum = $payum;
    }

    public function __invoke(Request $request): Response
    {
        $gateway = $this->payum->getGateway(MollieGatewayFactory::FACTORY_NAME);

        $gateway->execute(new GetMethods([]));

        return new Response('Ok', Response::HTTP_ACCEPTED);
    }
}
