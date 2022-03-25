<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Context\Channel;

use BitBag\SyliusMolliePlugin\Context\Channel\CurrencyOrFirstChannelContext;
use BitBag\SyliusMolliePlugin\Entity\ChannelInterface;
use Doctrine\Common\Collections\ArrayCollection;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Channel\Context\ChannelContextInterface;
use Sylius\Component\Channel\Repository\ChannelRepositoryInterface;
use Sylius\Component\Currency\Model\CurrencyInterface;

final class CurrencyOrFirstChannelContextSpec extends ObjectBehavior
{
    public function let(
        ChannelRepositoryInterface $channelRepository
    ): void {
        $this->beConstructedWith(
            $channelRepository
        );
    }

    public function it_is_initializable(): void
    {
        $this->shouldHaveType(CurrencyOrFirstChannelContext::class);
        $this->shouldImplement(ChannelContextInterface::class);
    }

    public function it_returns_first_channel_with_euro_in_currencies(
        ChannelRepositoryInterface $channelRepository,
        ChannelInterface $channel,
        ChannelInterface $channel2,
        CurrencyInterface $dollarCurrency,
        CurrencyInterface $euroCurrency
    ): void {
        $euroCurrencyCode = 'EUR';
        $dollarCurrencyCode = 'USD';

        $channelRepository->findAll()
            ->willReturn([
                $channel->getWrappedObject(),
                $channel2->getWrappedObject(),
            ]);

        $dollarCurrency->getCode()
            ->willReturn($dollarCurrencyCode);

        $euroCurrency->getCode()
            ->willReturn($euroCurrencyCode);

        $channel->getAllCurrencies()
            ->willReturn(new ArrayCollection([
                $dollarCurrency->getWrappedObject(),
            ]));

        $channel2->getAllCurrencies()
            ->willReturn(new ArrayCollection([
                $euroCurrency->getWrappedObject(),
            ]));

        $this->getChannel()
            ->shouldReturn($channel2);
    }

    public function it_returns_first_channel_from_collection_if_any_has_euro_currency(
        ChannelRepositoryInterface $channelRepository,
        ChannelInterface $channel,
        ChannelInterface $channel2,
        CurrencyInterface $dollarCurrency
    ): void {
        $dollarCurrencyCode = 'USD';

        $channelRepository->findAll()
            ->willReturn([
                $channel->getWrappedObject(),
                $channel2->getWrappedObject(),
            ]);

        $dollarCurrency->getCode()
            ->willReturn($dollarCurrencyCode);

        $channel->getAllCurrencies()
            ->willReturn(new ArrayCollection([
                $dollarCurrency->getWrappedObject(),
            ]));

        $channel2->getAllCurrencies()
            ->willReturn(new ArrayCollection([
                $dollarCurrency->getWrappedObject(),
            ]));

        $this->getChannel()
            ->shouldReturn($channel);
    }
}
