<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Helper;

use Sylius\Bundle\MoneyBundle\Templating\Helper\FormatMoneyHelper;
use Sylius\Component\Currency\Context\CurrencyContextInterface;
use Sylius\Component\Locale\Context\LocaleContextInterface;

final class ConvertPriceToAmount
{
    /** @var CurrencyContextInterface */
    private $currencyContext;

    /** @var LocaleContextInterface */
    private $localeContext;

    /** @var FormatMoneyHelper */
    private $formatMoneyHelper;

    public function __construct(
        CurrencyContextInterface $currencyContext,
        LocaleContextInterface $localeContext,
        FormatMoneyHelper $formatMoneyHelper
    ) {
        $this->currencyContext = $currencyContext;
        $this->localeContext = $localeContext;
        $this->formatMoneyHelper = $formatMoneyHelper;
    }

    public function convert(int $price): string
    {
        return $this->formatMoneyHelper->formatAmount(
            $price,
            $this->currencyContext->getCurrencyCode(),
            $this->localeContext->getLocaleCode()
        );
    }
}
