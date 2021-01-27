<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Controller\Action\Admin;

use BitBag\SyliusMolliePlugin\Resolver\ApiKeysTestResolverInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

final class TestApiKeysAction
{
    /** @var ApiKeysTestResolverInterface */
    private $apiKeysTestResolver;

    /** @var Environment */
    private $twig;

    public function __construct(
        ApiKeysTestResolverInterface $apiKeysTestResolver,
        Environment $twig
    ) {
        $this->apiKeysTestResolver = $apiKeysTestResolver;
        $this->twig = $twig;
    }

    public function __invoke(Request $request): Response
    {
        try {
            $data = $this->apiKeysTestResolver->fromRequest($request);

            return new Response($this->twig->render(
                '@BitBagSyliusMolliePlugin/Admin/PaymentMethod/testApiKeys.html.twig',
                [
                    'tests' => $data,
                ]
            ));
        } catch (\Exception $exception) {
            return new Response($exception->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
