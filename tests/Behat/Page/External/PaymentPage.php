<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Behat\Page\External;

use Behat\Mink\Session;
use FriendsOfBehat\PageObjectExtension\Page\Page;
use FriendsOfBehat\SymfonyExtension\Mink\MinkParameters;
use Payum\Core\Security\TokenInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\BrowserKit\AbstractBrowser;

final class PaymentPage extends Page implements PaymentPageInterface
{
    /**
     * @var RepositoryInterface
     */
    private $securityTokenRepository;

    /**
     * @var AbstractBrowser
     */
    private $client;

    /**
     * @param Session $session
     * @param MinkParameters $parameters
     * @param RepositoryInterface $securityTokenRepository
     * @param AbstractBrowser $client
     */
    public function __construct(
        Session $session,
        MinkParameters $parameters,
        RepositoryInterface $securityTokenRepository,
        AbstractBrowser $client
    ) {
        parent::__construct($session, $parameters);

        $this->securityTokenRepository = $securityTokenRepository;
        $this->client = $client;
    }

    /**
     * {@inheritdoc}
     */
    public function capture(): void
    {
        $captureToken = $this->findToken();

        $this->getDriver()->visit($captureToken->getTargetUrl());
    }

    /**
     * {@inheritdoc}
     */
    public function notify(array $postData): void
    {
        $notifyToken = $this->findToken('notify');

        $this->client->request('POST', $notifyToken->getTargetUrl(), $postData);
    }

    /**
     * @param array $urlParameters
     *
     * @return string
     */
    protected function getUrl(array $urlParameters = []): string
    {
        return 'https://api.mollie.nl';
    }

    /**
     * @param string $type
     *
     * @return TokenInterface
     */
    private function findToken(string $type = 'capture'): TokenInterface
    {
        $tokens = [];

        /** @var TokenInterface $token */
        foreach ($this->securityTokenRepository->findAll() as $token) {
            if (strpos($token->getTargetUrl(), $type)) {
                $tokens[] = $token;
            }
        }

        if (count($tokens) > 0) {
            return end($tokens);
        }

        throw new \RuntimeException('Cannot find capture token, check if you are after proper checkout steps');
    }
}
