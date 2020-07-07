<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.io and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Menu;

use Sylius\Bundle\UiBundle\Menu\Event\MenuBuilderEvent;

final class MollieEmailTemplateMenuListener
{
    public function buildMenu(MenuBuilderEvent $menuBuilderEvent): void
    {
        $menu = $menuBuilderEvent->getMenu();
        $cmsRootMenuItem =
            $menu
                ->getChild('mollie');
        $cmsRootMenuItem
            ->addChild('mollie_email_template', [
                'route' => 'bitbag_sylius_mollie_plugin_admin_template_mollie_email_index',
            ])
            ->setLabel('bitbag_sylius_mollie_plugin.ui.template_mollie_emails')
            ->setLabelAttribute('icon', 'envelope');
    }
}
