<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Controller\Action\Admin;

use BitBag\SyliusMolliePlugin\Controller\Action\Admin\Refund;
use Doctrine\ORM\EntityManagerInterface;
use Payum\Core\Payum;
use PhpSpec\ObjectBehavior;
use SM\Factory\FactoryInterface;
use SM\StateMachine\StateMachineInterface;
use Sylius\Bundle\PayumBundle\Model\GatewayConfig;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Sylius\Component\Core\Repository\PaymentRepositoryInterface;
use Sylius\Component\Payment\PaymentTransitions;
use Symfony\Component\HttpFoundation\HeaderBag;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\HttpFoundation\Session\Session;

final class RefundSpec extends ObjectBehavior
{
    function let(
        PaymentRepositoryInterface $paymentRepository,
        Payum $payum,
        Session $session,
        FactoryInterface $stateMachineFactory,
        EntityManagerInterface $paymentEntityManager
    ): void {
        $this->beConstructedWith(
            $paymentRepository,
            $payum,
            $session,
            $stateMachineFactory,
            $paymentEntityManager
        );
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(Refund::class);
    }

    function it_refunds(
        Request $request,
        PaymentRepositoryInterface $paymentRepository,
        PaymentInterface $payment,
        PaymentMethodInterface $paymentMethod,
        GatewayConfig $gatewayConfig,
        FactoryInterface $stateMachineFactory,
        StateMachineInterface $stateMachine,
        Session $session,
        FlashBagInterface $flashBag,
        HeaderBag $headerBag
    ): void {
        $request->get('id')->willReturn(1);

        $headerBag->get('referer', null, true)->willReturn('wwww.example.com');

        $request->headers = $headerBag;

        $paymentMethod->getGatewayConfig()->willReturn($gatewayConfig);

        $payment->getMethod()->willReturn($paymentMethod);

        $paymentRepository->find(1)->willReturn($payment);

        $stateMachine->can(PaymentTransitions::TRANSITION_REFUND)->willReturn(true);

        $stateMachine->apply(PaymentTransitions::TRANSITION_REFUND)->shouldBeCalled();

        $session->getFlashBag()->willReturn($flashBag);

        $stateMachineFactory->get($payment, PaymentTransitions::GRAPH)->willReturn($stateMachine);

        $this->__invoke($request);
    }
}
