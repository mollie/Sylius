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

use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Order\OrderPaymentRefundInterface;
use Sylius\RefundPlugin\Creator\RefundUnitsCommandCreatorInterface;
use Sylius\RefundPlugin\Exception\InvalidRefundAmountException;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Messenger\Exception\HandlerFailedException;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

final class RefundUnitsAction
{
    /** @var MessageBusInterface */
    private $commandBus;

    /** @var Session */
    private $session;

    /** @var UrlGeneratorInterface */
    private $router;

    /** @var RefundUnitsCommandCreatorInterface */
    private $commandCreator;

    /** @var OrderPaymentRefundInterface */
    private $orderPaymentRefund;

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    public function __construct(
        MessageBusInterface $commandBus,
        Session $session,
        UrlGeneratorInterface $router,
        RefundUnitsCommandCreatorInterface $commandCreator,
        OrderPaymentRefundInterface $orderPaymentRefund,
        MollieLoggerActionInterface $loggerAction
    ) {
        $this->commandBus = $commandBus;
        $this->session = $session;
        $this->router = $router;
        $this->commandCreator = $commandCreator;
        $this->orderPaymentRefund = $orderPaymentRefund;
        $this->loggerAction = $loggerAction;
    }

    public function __invoke(Request $request): Response
    {
        try {
            $refundUnits = $this->commandCreator->fromRequest($request);

            $this->commandBus->dispatch($refundUnits);
            $this->orderPaymentRefund->refund($refundUnits);

            $this->session->getFlashBag()->add('success', 'sylius_refund.units_successfully_refunded');
        } catch (InvalidRefundAmountException $exception) {
            $this->session->getFlashBag()->add('error', $exception->getMessage());

            $this->loggerAction->addNegativeLog($exception->getMessage());
        } catch (HandlerFailedException $exception) {
            /** @var \Exception $previousException */
            $previousException = $exception->getPrevious();

            $this->provideErrorMessage($previousException);

            $this->loggerAction->addNegativeLog($previousException->getMessage());
        }

        return new RedirectResponse($this->router->generate(
            'sylius_refund_order_refunds_list', ['orderNumber' => $request->attributes->get('orderNumber')]
        ));
    }

    private function provideErrorMessage(\Exception $previousException): void
    {
        if ($previousException instanceof InvalidRefundAmountException) {
            $this->session->getFlashBag()->add('error', $previousException->getMessage());

            return;
        }

        $this->session->getFlashBag()->add('error', 'sylius_refund.error_occurred');
    }
}
