<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Context\Channel;

use BitBag\SyliusMolliePlugin\Entity\ChannelInterface;
use Sylius\Component\Channel\Context\ChannelContextInterface;
use Sylius\Component\Channel\Repository\ChannelRepositoryInterface;
use Sylius\Component\Currency\Model\CurrencyInterface;

final class CurrencyOrFirstChannelContext implements ChannelContextInterface
{
    private ChannelRepositoryInterface $channelRepository;

    private const EURO_CURRENCY_CODE = 'EUR';

    public function __construct(ChannelRepositoryInterface $channelRepository)
    {
        $this->channelRepository = $channelRepository;
    }

    public function getChannel(): ChannelInterface
    {
        $channels = $this->channelRepository->findAll();

        /** @var ChannelInterface $channel */
        foreach ($channels as $channel) {
            /** @var CurrencyInterface $currency */
            foreach ($channel->getAllCurrencies() as $currency) {
                if (self::EURO_CURRENCY_CODE === $currency->getCode()) {
                    return $channel;
                }
            }
        }

        return current($channels);
    }
}
