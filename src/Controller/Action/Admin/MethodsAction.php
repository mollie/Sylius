<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Controller\Action\Admin;

use BitBag\SyliusMolliePlugin\Creator\MollieMethodsCreatorInterface;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Purifier\MolliePaymentMethodPurifierInterface;
use Mollie\Api\Exceptions\ApiException;
use Sylius\Bundle\ResourceBundle\Doctrine\ORM\EntityRepository;
use Sylius\Component\Resource\Exception\UpdateHandlingException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;

final class MethodsAction
{
    /** @var Session */
    private $session;

    /** @var MollieMethodsCreatorInterface */
    private $mollieMethodsCreator;

    /** @var MolliePaymentMethodPurifierInterface */
    private $methodPurifier;

    /** @var EntityRepository */
    private $gatewayConfigRepository;

    public function __construct(
        Session $session,
        MollieMethodsCreatorInterface $mollieMethodsCreator,
        MolliePaymentMethodPurifierInterface $methodPurifier,
        EntityRepository $gatewayConfigRepository
    ) {
        $this->session = $session;
        $this->mollieMethodsCreator = $mollieMethodsCreator;
        $this->methodPurifier = $methodPurifier;
        $this->gatewayConfigRepository = $gatewayConfigRepository;
    }

    public function __invoke(int $id, Request $request): Response
    {
        $gateway = $this->gatewayConfigRepository->find($id);
        $this->mollieMethodsCreator->createForGateway($gateway);

        $this->methodPurifier->removeAllNoLongerSupportedMethods();

        $this->session->getFlashBag()->add('success', 'bitbag_sylius_mollie_plugin.admin.success_got_methods');

        return new Response('OK', Response::HTTP_OK);
    }
}
