<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\TemplateEmailTerms;

use BitBag\SyliusMolliePlugin\Entity\TemplateMollieEmailInterface;

final class Options
{
    public const PAYMENT_LINK = 'bitbag_sylius_mollie_plugin.ui.paymentlink';
    public const PAYMENT_LINK_ABANDONED = 'bitbag_sylius_mollie_plugin.ui.paymentlinkAbandoned';

    public static function getAvailableEmailTemplate(): array
    {
        return [
            self::PAYMENT_LINK => TemplateMollieEmailInterface::PAYMENT_LINK,
            self::PAYMENT_LINK_ABANDONED => TemplateMollieEmailInterface::PAYMENT_LINK_ABANDONED,
        ];
    }
}
