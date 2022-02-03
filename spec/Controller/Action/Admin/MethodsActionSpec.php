<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Controller\Action\Admin;

use BitBag\SyliusMolliePlugin\Controller\Action\Admin\MethodsAction;
use BitBag\SyliusMolliePlugin\Creator\MollieMethodsCreatorInterface;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Purifier\MolliePaymentMethodPurifierInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Bundle\ResourceBundle\Doctrine\ORM\EntityRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\HttpFoundation\Session\Session;

final class MethodsActionSpec extends ObjectBehavior
{
    function let(
        Session $session,
        MollieMethodsCreatorInterface $mollieMethodsCreator,
        MolliePaymentMethodPurifierInterface $methodPurifier,
        EntityRepository $gatewayConfigRepository
    ):void {
        $this->beConstructedWith(
            $session,
            $mollieMethodsCreator,
            $methodPurifier,
            $gatewayConfigRepository
        );
    }

    function it_is_initializable(): void
    {
        $this->shouldBeAnInstanceOf(MethodsAction::class);
    }

    function it_invokes(
        Request $request,
        EntityRepository $gatewayConfigRepository,
        MollieMethodsCreatorInterface $mollieMethodsCreator,
        MolliePaymentMethodPurifierInterface $methodPurifier,
        GatewayConfigInterface $gateway,
        Session $session,
        FlashBagInterface $flashBag
    ): void {
        $id = 1;
        $gatewayConfigRepository->find($id)->willReturn($gateway);
        $mollieMethodsCreator->createForGateway($gateway);
        $methodPurifier->removeAllNoLongerSupportedMethods();
        $session->getFlashBag()->willReturn($flashBag);
        $flashBag->add('success', 'bitbag_sylius_mollie_plugin.admin.success_got_methods');

        $response = $this->__invoke($id, $request);
        $response->shouldReturnAnInstanceOf(Response::class);
        $response->getStatusCode()->shouldReturn(200);
        $response->getContent()->shouldReturn('OK');
    }

}
