<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Context\Admin;

use Sylius\Component\Core\Model\AdminUserInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

final class AdminUserContext implements AdminUserContextInterface
{
    /** @var TokenStorageInterface $tokenStorage */
    private $tokenStorage;

    public function __construct(TokenStorageInterface $tokenStorage)
    {
        $this->tokenStorage = $tokenStorage;
    }

    public function getAdminUser(): ?AdminUserInterface
    {
        if (null === $token = $this->tokenStorage->getToken()) {
            return null;
        }

        if ($token->getUser() instanceof AdminUserInterface) {
            return $token->getUser();
        }

        return null;
    }
}
