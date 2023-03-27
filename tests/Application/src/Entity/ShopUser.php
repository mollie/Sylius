<?php


declare(strict_types=1);

namespace Tests\SyliusMolliePlugin\Entity;

use Sylius\Component\Core\Model\ShopUser as BaseShopUser;
use Symfony\Component\PasswordHasher\Hasher\PasswordHasherAwareInterface;

/**
 * @method string getUserIdentifier()
 */
class ShopUser extends BaseShopUser implements PasswordHasherAwareInterface
{
    public function getPasswordHasherName(): ?string
    {
        return $this->encoderName;
    }

}
