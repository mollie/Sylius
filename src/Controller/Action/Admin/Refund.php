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

use BitBag\SyliusMolliePlugin\MollieGatewayFactory;
use Doctrine\ORM\EntityManagerInterface;
use Payum\Core\Payum;
use Payum\Core\Request\Refund as RefundAction;
use Payum\Core\Security\TokenInterface;
use SM\Factory\FactoryInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Sylius\Component\Core\Repository\PaymentRepositoryInterface;
use Sylius\Component\Payment\PaymentTransitions;
use Sylius\Component\Resource\Exception\UpdateHandlingException;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

final class Refund
{
    /**
     * @var PaymentRepositoryInterface
     */
    private $paymentRepository;

    /**
     * @var Payum
     */
    private $payum;

    /**
     * @var Session
     */
    private $session;

    /**
     * @var FactoryInterface
     */
    private $stateMachineFactory;

    /**
     * @var EntityManagerInterface
     */
    private $paymentEntityManager;

    /**
     * @param PaymentRepositoryInterface $paymentRepository
     * @param Payum $payum
     * @param Session $session
     * @param FactoryInterface $stateMachineFactory
     * @param EntityManagerInterface $paymentEntityManager
     */
    public function __construct(
        PaymentRepositoryInterface $paymentRepository,
        Payum $payum,
        Session $session,
        FactoryInterface $stateMachineFactory,
        EntityManagerInterface $paymentEntityManager
    ) {
        $this->paymentRepository = $paymentRepository;
        $this->payum = $payum;
        $this->session = $session;
        $this->stateMachineFactory = $stateMachineFactory;
        $this->paymentEntityManager = $paymentEntityManager;
    }

    /**
     * @param Request $request
     *
     * @return Response
     *
     * @throws \Payum\Core\Reply\ReplyInterface
     * @throws \SM\SMException
     */
    public function __invoke(Request $request): Response
    {
        /** @var PaymentInterface|null $payment */
        $payment = $this->paymentRepository->find($request->get('id'));

        if (null === $payment) {
            throw new NotFoundHttpException();
        }

        /** @var PaymentMethodInterface $paymentMethod */
        $paymentMethod = $payment->getMethod();

        $factoryName = $paymentMethod->getGatewayConfig()->getFactoryName() ?? null;

        if (MollieGatewayFactory::FACTORY_NAME !== $factoryName) {
            $this->applyStateMachineTransition($payment);

            $this->session->getFlashBag()->add('success', 'sylius.payment.refunded');

            return $this->redirectToReferer($request);
        }

        if (!isset($payment->getDetails()['payment_mollie_id']) || !isset($payment->getDetails()['metadata']['refund_token'])) {
            $this->applyStateMachineTransition($payment);

            $this->session->getFlashBag()->add('info', 'bitbag_sylius_mollie_plugin.ui.refunded_only_locally');

            return $this->redirectToReferer($request);
        }

        $hash = $payment->getDetails()['metadata']['refund_token'];

        /** @var TokenInterface|null $token */
        $token = $this->payum->getTokenStorage()->find($hash);

        if (null === $token || !$token instanceof TokenInterface) {
            throw new BadRequestHttpException(sprintf('A token with hash `%s` could not be found.', $hash));
        }

        $gateway = $this->payum->getGateway($token->getGatewayName());

        try {
            $gateway->execute(new RefundAction($token));

            $this->applyStateMachineTransition($payment);

            $this->session->getFlashBag()->add('success', 'sylius.payment.refunded');
        } catch (UpdateHandlingException $e) {
            $this->session->getFlashBag()->add('error', $e->getMessage());
        }

        return $this->redirectToReferer($request);
    }

    /**
     * @param PaymentInterface $payment
     *
     * @throws \SM\SMException
     */
    private function applyStateMachineTransition(PaymentInterface $payment): void
    {
        $stateMachine = $this->stateMachineFactory->get($payment, PaymentTransitions::GRAPH);

        if (!$stateMachine->can(PaymentTransitions::TRANSITION_REFUND)) {
            throw new BadRequestHttpException();
        }

        $stateMachine->apply(PaymentTransitions::TRANSITION_REFUND);

        $this->paymentEntityManager->flush();
    }

    /**
     * @param Request $request
     *
     * @return Response
     */
    private function redirectToReferer(Request $request): Response
    {
        /** @var string $url */
        $url = $request->headers->get('referer', null, true);

        return new RedirectResponse($url);
    }
}
