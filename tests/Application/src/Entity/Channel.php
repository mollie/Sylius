<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Entity;

use BitBag\SyliusMolliePlugin\Entity\ChannelInterface;
use BitBag\SyliusMolliePlugin\Entity\ChannelTrait;
use Sylius\Component\Core\Model\Channel as BaseChannel;

final class Channel extends BaseChannel implements ChannelInterface
{
    use ChannelTrait;
}
