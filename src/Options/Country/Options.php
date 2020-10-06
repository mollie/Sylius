<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Options\Country;

use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;

final class Options
{
    const ALL_COUNTRIES = 'bitbag_sylius_mollie_plugin.ui.all_countries';
    const SELECTED_COUNTRIES = 'bitbag_sylius_mollie_plugin.ui.selected_countries';

    public static function getCountriesConfigOptions()
    {
        return [
            self::ALL_COUNTRIES => MollieGatewayConfigInterface::ALL_COUNTRIES,
            self::SELECTED_COUNTRIES => MollieGatewayConfigInterface::SELECTED_COUNTRIES,
        ];
    }
}
