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

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Form\Type\PaymentlinkType;
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

    public function __construct(
        OrderRepositoryInterface $orderRepository,
        Environment $twig,
        Session $session,
        UrlGeneratorInterface $router,
        FormFactoryInterface $formFactory,
        MollieApiClient $mollieApiClient,
        PaymentlinkResolverInterface $paymentlinkResolver
    ) {
        $this->twig = $twig;
        $this->session = $session;
        $this->orderRepository = $orderRepository;
        $this->router = $router;
        $this->formFactory = $formFactory;
        $this->mollieApiClient = $mollieApiClient;
        $this->paymentlinkResolver = $paymentlinkResolver;
    }

    public function __invoke(Request $request): Response
    {
        /** @var OrderInterface $order */
        $order = $this->orderRepository->findOneByNumber($request->attributes->get('orderNumber'));

        $form = $this->formFactory->create(PaymentlinkType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            try {
                $paymentlink = $this->paymentlinkResolver->resolve($order, $form->getData());

                $this->session->getFlashBag()->add('success', $paymentlink);
                return new RedirectResponse($this->router->generate('sylius_admin_order_show', ['id' => $order->getId()]));
            } catch (\ Exception $e){
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
