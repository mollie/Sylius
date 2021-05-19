<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Documentation;

use Symfony\Contracts\Translation\TranslatorInterface;

final class DocumentationLinks implements DocumentationLinksInterface
{
    public const DOCUMENTATION_LINKS = [
        'single_click' => 'https://help.mollie.com/hc/en-us/articles/115000671249-What-are-single-click-payments-and-how-does-it-work-',
        'mollie_components' => 'https://www.mollie.com/en/news/post/better-checkout-flows-with-mollie-components',
        'payment_methods' => 'https://docs.mollie.com/orders/why-use-orders',
        'profile_id' => 'https://www.mollie.com/dashboard/developers/api-keys',
        'api_key' => 'https://www.mollie.com/dashboard/developers/api-keys',
    ];

    /** @var TranslatorInterface */
    private $translator;

    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

    public function getSingleClickDoc(): string
    {
        $link = \sprintf(
            '<a target="_blank" href="%s"> %s </a>',
            self::DOCUMENTATION_LINKS['single_click'],
            $this->translator->trans('bitbag_sylius_mollie_plugin.ui.mollie_single_click')
        );

        return $this->translator->trans('bitbag_sylius_mollie_plugin.ui.read_more_single_click_enabled', [
            '%link%' => $link,
        ]);
    }

    public function getMollieComponentsDoc(): string
    {
        $link = \sprintf(
            '<a target="_blank" href="%s"> %s </a>',
            self::DOCUMENTATION_LINKS['mollie_components'],
            $this->translator->trans('bitbag_sylius_mollie_plugin.ui.mollie_components')
        );

        return $this->translator->trans('bitbag_sylius_mollie_plugin.ui.read_more_enable_components', [
            '%link%' => $link,
        ]);
    }

    public function getPaymentMethodDoc(): string
    {
        return \sprintf(
            '%s <a target="_blank" href="%s"> %s </a> %s',
            $this->translator->trans('bitbag_sylius_mollie_plugin.ui.click'),
            self::DOCUMENTATION_LINKS['payment_methods'],
            $this->translator->trans('bitbag_sylius_mollie_plugin.ui.here'),
            $this->translator->trans('bitbag_sylius_mollie_plugin.ui.payment_methods_doc')
        );
    }

    public function getProfileIdDoc(): string
    {
        return \sprintf(
            '%s <a target="_blank" href="%s"> %s </a>',
            $this->translator->trans('bitbag_sylius_mollie_plugin.ui.you_can_find_you_profile_id'),
            self::DOCUMENTATION_LINKS['profile_id'],
            $this->translator->trans('bitbag_sylius_mollie_plugin.ui.mollie_profile_id')
        );
    }

    public function getApiKeyDoc(): string
    {
        return \sprintf(
            '%s <a target="_blank" href="%s"> %s </a> %s',
            $this->translator->trans('bitbag_sylius_mollie_plugin.ui.find_you_api_key'),
            self::DOCUMENTATION_LINKS['api_key'],
            $this->translator->trans('bitbag_sylius_mollie_plugin.ui.mollie_profile'),
            $this->translator->trans('bitbag_sylius_mollie_plugin.ui.it_starts_with')
        );
    }
}
