<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Controller\Action\Admin;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\TemplateMollieEmailInterface;
use BitBag\SyliusMolliePlugin\Form\Type\PaymentlinkType;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Resolver\PaymentlinkResolverInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Repository\OrderRepositoryInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Twig\Environment;

final class GeneratePaymentlinkAction
{
    /** @var OrderRepositoryInterface */
    private $orderRepository;

    /** @var Environment */
    private $twig;

    /** @var Session */
    private $session;

    /** @var UrlGeneratorInterface */
    private $router;

    /** @var FormFactoryInterface */
    private $formFactory;

    /** @var MollieApiClient */
    private $mollieApiClient;

    /** @var PaymentlinkResolverInterface */
    private $paymentlinkResolver;

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    public function __construct(
        OrderRepositoryInterface $orderRepository,
        Environment $twig,
        Session $session,
        UrlGeneratorInterface $router,
        FormFactoryInterface $formFactory,
        MollieApiClient $mollieApiClient,
        PaymentlinkResolverInterface $paymentlinkResolver,
        MollieLoggerActionInterface $loggerAction
    ) {
        $this->twig = $twig;
        $this->session = $session;
        $this->orderRepository = $orderRepository;
        $this->router = $router;
        $this->formFactory = $formFactory;
        $this->mollieApiClient = $mollieApiClient;
        $this->paymentlinkResolver = $paymentlinkResolver;
        $this->loggerAction = $loggerAction;
    }

    public function __invoke(Request $request): Response
    {
        /** @var OrderInterface $order */
        $order = $this->orderRepository->findOneByNumber($request->attributes->get('orderNumber'));

        $form = $this->formFactory->create(PaymentlinkType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            try {
                $paymentlink = $this->paymentlinkResolver->resolve($order, $form->getData(), TemplateMollieEmailInterface::PAYMENT_LINK);

                $this->session->getFlashBag()->add('success', $paymentlink);

                $this->loggerAction->addLog(sprintf('Created payment link to order with id = %s', $order->getId()));

                return new RedirectResponse($this->router->generate('sylius_admin_order_show', ['id' => $order->getId()]));
            } catch (\ Exception $e) {
                $this->loggerAction->addNegativeLog(sprintf('Error with generate payment link with : %s', $e->getMessage()));

                $this->session->getFlashBag()->add('error', $e->getMessage());
            }
        }

        return new Response(
            $this->twig->render('@BitBagSyliusMolliePlugin/Admin/Paymentlink/_form.html.twig', [
                'order' => $order,
                'form' => $form->createView(),
            ])
        );
    }
}
