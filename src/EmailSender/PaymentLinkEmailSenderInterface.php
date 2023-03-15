<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\EmailSender;

use SyliusMolliePlugin\Entity\TemplateMollieEmailTranslationInterface;
use Sylius\Component\Core\Model\OrderInterface;

interface PaymentLinkEmailSenderInterface
{
    public function sendConfirmationEmail(OrderInterface $order, TemplateMollieEmailTranslationInterface $template): void;
}
