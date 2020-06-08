<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\EmailSender;

use BitBag\SyliusMolliePlugin\Entity\TemplateMollieEmailInterface;
use BitBag\SyliusMolliePlugin\Mailer\Emails;
use BitBag\SyliusMolliePlugin\Twig\Parser\ContentParserInterface;
use Liip\ImagineBundle\Exception\Config\Filter\NotFoundException;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Mailer\Sender\SenderInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class PaymentLinkEmailSender implements PaymentLinkEmailSenderInterface
{
    /** @var SenderInterface */
    private $emailSender;

    /** @var RepositoryInterface */
    private $templateRepository;

    /** @var ContentParserInterface */
    private $contentParser;

    public function __construct(
        SenderInterface $emailSender,
        RepositoryInterface $templateRepository,
        ContentParserInterface $contentParser
    ) {
        $this->emailSender = $emailSender;
        $this->templateRepository = $templateRepository;
        $this->contentParser = $contentParser;
    }

    public function sendConfirmationEmail(OrderInterface $order): void
    {
        /** @var TemplateMollieEmailInterface $template */
        $template = $this->templateRepository->findOneBy(['type' => TemplateMollieEmailInterface::PAYMENT_LINK]);

        if (null === $template) {
            throw new NotFoundException(\sprintf('Not payment link template found'));
        }

        /** @var PaymentInterface $payment */
        $payment = $order->getPayments()->last();
        $paymentLink = $payment->getDetails()['payment_mollie_link'];

        $templateToTwig = $this->contentParser->parse($template->getContent(), $paymentLink);

        $this->emailSender->send(Emails::PAYMENT_LINK, [$order->getCustomer()->getEmail()], [
            'order' => $order,
            'template' => $templateToTwig,
        ]);
    }
}
