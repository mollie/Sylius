<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Controller\Action\Admin;

use BitBag\SyliusMolliePlugin\Factory\MollieOrderGatewayFactory;
use BitBag\SyliusMolliePlugin\Request\Api\GetMethods;
use Payum\Core\Payum;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

final class Methods extends AbstractController
{
    /** @var Payum */
    private $payum;

    public function __construct(Payum $payum)
    {
        $this->payum = $payum;
    }

    public function __invoke(Request $request): Response
    {
        $gateway = $this->payum->getGateway(MollieOrderGatewayFactory::FACTORY_NAME);
        $gateway->execute(new GetMethods([]));

        return new Response('Ok', Response::HTTP_ACCEPTED);
    }
}
