<?php


declare(strict_types=1);

namespace spec\SyliusMolliePlugin\Cli;

use SyliusMolliePlugin\Cli\SendAbandonedPaymentLink;
use SyliusMolliePlugin\Creator\AbandonedPaymentLinkCreatorInterface;
use PhpSpec\ObjectBehavior;
use Symfony\Component\Console\Command\Command;

final class SendAbandonedPaymentLinkSpec extends ObjectBehavior
{
    function let(
        AbandonedPaymentLinkCreatorInterface $abandonedPaymentLinkCreator
    ): void {
        $this->beConstructedWith($abandonedPaymentLinkCreator);
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(SendAbandonedPaymentLink::class);
    }

    function it_should_have_extends_command(): void
    {
        $this->shouldBeAnInstanceOf(Command::class);
    }
}
