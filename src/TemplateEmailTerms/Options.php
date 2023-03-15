<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\TemplateEmailTerms;

use SyliusMolliePlugin\Entity\TemplateMollieEmailInterface;

final class Options
{
    public const PAYMENT_LINK = 'sylius_mollie_plugin.ui.paymentlink';

    public const PAYMENT_LINK_ABANDONED = 'sylius_mollie_plugin.ui.paymentlinkAbandoned';

    public static function getAvailableEmailTemplate(): array
    {
        return [
            self::PAYMENT_LINK => TemplateMollieEmailInterface::PAYMENT_LINK,
            self::PAYMENT_LINK_ABANDONED => TemplateMollieEmailInterface::PAYMENT_LINK_ABANDONED,
        ];
    }
}
