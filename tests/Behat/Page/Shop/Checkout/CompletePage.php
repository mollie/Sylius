<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Behat\Page\Shop\Checkout;

use Behat\Mink\Element\NodeElement;
use Sylius\Behat\Page\Shop\Checkout\CompletePage as BaseCompletePage;
use Webmozart\Assert\Assert;

final class CompletePage extends BaseCompletePage implements CompletePageInterface
{
    public function selectPaymentOption(string $paymentOptionName): void
    {
        $paymentOptionElements = $this->getDocument()->findAll('css', '[data-test-payment-method-payment-item]');

        /** @var NodeElement $paymentOptionElement */
        foreach ($paymentOptionElements as $paymentOptionElement) {
            if ($paymentOptionElement->getAttribute('value') === $paymentOptionName) {
                $elementNameAttribute = $paymentOptionElement->getAttribute('name');

                Assert::notNull($elementNameAttribute);
                $this->getDocument()->selectFieldOption($elementNameAttribute, $paymentOptionName);
            }
        }
    }
}
