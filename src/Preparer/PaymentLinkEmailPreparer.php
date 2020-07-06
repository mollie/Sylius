<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Preparer;

use BitBag\SyliusMolliePlugin\EmailSender\PaymentLinkEmailSenderInterface;
use BitBag\SyliusMolliePlugin\Entity\TemplateMollieEmailTranslationInterface;
use Liip\ImagineBundle\Exception\Config\Filter\NotFoundException;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class PaymentLinkEmailPreparer implements PaymentLinkEmailPreparerInterface
{
    /** @var RepositoryInterface */
    private $templateRepository;

    /** @var PaymentLinkEmailSenderInterface */
    private $emailSender;

    public function __construct(RepositoryInterface $templateRepository, PaymentLinkEmailSenderInterface $emailSender)
    {
        $this->templateRepository = $templateRepository;
        $this->emailSender = $emailSender;
    }

    public function prepare(OrderInterface $order, string $templateName): void
    {
        $locale = $order->getLocaleCode();

        /** @var TemplateMollieEmailTranslationInterface $template */
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
