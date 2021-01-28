<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\EmailSender;

use BitBag\SyliusMolliePlugin\Entity\TemplateMollieEmailTranslationInterface;
use BitBag\SyliusMolliePlugin\Mailer\Emails;
use BitBag\SyliusMolliePlugin\Twig\Parser\ContentParserInterface;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Mailer\Sender\SenderInterface;

final class PaymentLinkEmailSender implements PaymentLinkEmailSenderInterface
{
    /** @var SenderInterface */
    private $emailSender;

    /** @var ContentParserInterface */
    private $contentParser;

    public function __construct(
        SenderInterface $emailSender,
        ContentParserInterface $contentParser
    ) {
        $this->emailSender = $emailSender;
        $this->contentParser = $contentParser;
    }

    public function sendConfirmationEmail(OrderInterface $order, TemplateMollieEmailTranslationInterface $template): void
    {
        /** @var PaymentInterface $payment */
        $payment = $order->getPayments()->last();

        if (empty($payment->getDetails())) {
            return;
        }

        $paymentLink = $payment->getDetails()['payment_mollie_link'];
        $content = $this->contentParser->parse($template->getContent(), $paymentLink);

        /** @var CustomerInterface $customer */
        $customer = $order->getCustomer();

        $this->emailSender->send(Emails::PAYMENT_LINK, [$customer->getEmail()], [
            'order' => $order,
            'template' => $template,
            'content' => $content,
        ]);
    }
}
