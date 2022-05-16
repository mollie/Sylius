<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Preparer;

use BitBag\SyliusMolliePlugin\EmailSender\PaymentLinkEmailSenderInterface;
use BitBag\SyliusMolliePlugin\Entity\TemplateMollieEmailTranslationInterface;
use BitBag\SyliusMolliePlugin\Repository\TemplateMollieEmailTranslationRepositoryInterface;
use Liip\ImagineBundle\Exception\Config\Filter\NotFoundException;
use Sylius\Component\Core\Model\OrderInterface;

final class PaymentLinkEmailPreparer implements PaymentLinkEmailPreparerInterface
{
    /** @var TemplateMollieEmailTranslationRepositoryInterface */
    private $templateRepository;

    /** @var PaymentLinkEmailSenderInterface */
    private $emailSender;

    public function __construct(TemplateMollieEmailTranslationRepositoryInterface $templateRepository, PaymentLinkEmailSenderInterface $emailSender)
    {
        $this->templateRepository = $templateRepository;
        $this->emailSender = $emailSender;
    }

    public function prepare(OrderInterface $order, string $templateName): void
    {
        $locale = $order->getLocaleCode();

        if (null === $locale) {
            return;
        }
        /** @var ?TemplateMollieEmailTranslationInterface $template */
        $template = $this->templateRepository->findOneByLocaleCodeAdnType(
            $locale,
            $templateName
        );

        if (null === $template) {
            throw new NotFoundException(\sprintf('Not payment link template found, or not translation added'));
        }

        $this->emailSender->sendConfirmationEmail($order, $template);
    }
}
