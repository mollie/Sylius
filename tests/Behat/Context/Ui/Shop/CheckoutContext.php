<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Behat\Context\Ui\Shop;

use Behat\Behat\Context\Context;
use Behat\MinkExtension\Context\RawMinkContext;
use Tests\BitBag\SyliusMolliePlugin\Behat\Page\Shop\Checkout\CompletePageInterface;

final class CheckoutContext extends RawMinkContext implements Context
{
    /** @var CompletePageInterface */
    private $summaryPage;

    public function __construct(
        CompletePageInterface $summaryPage
    ) {
        $this->summaryPage = $summaryPage;
    }

    /**
     * @When I select :paymentOptionName as my payment option
     */
    public function iSelectPaymentOption(string $paymentOptionName): void
    {
        $this->summaryPage->selectPaymentOption($paymentOptionName);
    }
}
