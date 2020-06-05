<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\TemplateEmailTerms;

use BitBag\SyliusMolliePlugin\Entity\TemplateMollieEmailInterface;

final class Options
{
    public const PAYMENT_LINK = 'bitbag_sylius_mollie_plugin.ui.paymentlink';

    public static function getAvailableEmailTemplate(): array
    {
        return [
            self::PAYMENT_LINK => TemplateMollieEmailInterface::PAYMENT_LINK,
        ];
    }
}
