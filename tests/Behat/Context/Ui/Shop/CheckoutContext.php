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
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use Sylius\Behat\Page\Admin\ProductVariant\CreatePage;
use Sylius\Behat\Page\Shop\Order\ShowPageInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Tests\BitBag\SyliusMolliePlugin\Behat\Mocker\MollieApiMocker;
use Tests\BitBag\SyliusMolliePlugin\Behat\Page\Admin\PaymentMethod\CreatePageInterface;
use Tests\BitBag\SyliusMolliePlugin\Behat\Page\External\PaymentPageInterface;
use Tests\BitBag\SyliusMolliePlugin\Behat\Page\Shop\Checkout\CompletePageInterface;

final class CheckoutContext implements Context
{
    /**
     * @var CompletePageInterface
     */
    private $summaryPage;

    /**
     * @var ShowPageInterface
     */
    private $orderDetails;

    /**
     * @var MollieApiMocker
     */
    private $mollieApiMocker;

    /**
     * @var PaymentPageInterface
     */
    private $paymentPage;

    /**
     * @param CompletePageInterface $summaryPage
     * @param ShowPageInterface $orderDetails
     * @param MollieApiMocker $mollieApiMocker
     * @param PaymentPageInterface $paymentPage
     */
    public function __construct(
        CompletePageInterface $summaryPage,
        ShowPageInterface $orderDetails,
        MollieApiMocker $mollieApiMocker,
        PaymentPageInterface $paymentPage
    ) {
        $this->summaryPage = $summaryPage;
        $this->orderDetails = $orderDetails;
        $this->mollieApiMocker = $mollieApiMocker;
        $this->paymentPage = $paymentPage;
    }

    /**
     * @When I confirm my order with Mollie payment
     * @Given I have confirmed my order with Mollie payment
     */
    public function iConfirmMyOrderWithMolliePayment(): void
    {
        $this->mollieApiMocker->mockApiCreatePayment(function () {
            $this->summaryPage->confirmOrder();
        });
    }

    /**
     * @When I sign in to Mollie and pay successfully
     */
    public function iSignInToMollieAndPaySuccessfully(): void
    {
        $this->mollieApiMocker->mockApiSuccessfulPayment(function () {
            $this->paymentPage->notify(['id' => 1]);
            $this->paymentPage->capture();
        });
    }

    /**
     * @When I cancel my Mollie payment
     * @Given I have cancelled Mollie payment
     */
    public function iCancelMyMolliePayment(): void
    {
        $this->mollieApiMocker->mockApiCancelledPayment(function () {
            $this->paymentPage->notify(['id' => 1]);
            $this->paymentPage->capture();
        });
    }

    /**
     * @When I try to pay again Mollie payment
     */
    public function iTryToPayAgainMolliePayment(): void
    {
        $this->mollieApiMocker->mockApiCreatePayment(function () {
            $this->orderDetails->pay();
        });
    }

    /**
     * @Given I specify the direct debit for :consumerName, :iban
     */
    public function iSpecifyTheDirectDebitFor(string $consumerName, string $iban): void
    {
        $this->summaryPage->specifyDirectDebit($consumerName, $iban);
    }

    /**
     * @When I confirm my order with Mollie Subscription
     */
    public function iConfirmMyOrderWithMollieSubscription(): void
    {
        $this->mollieApiMocker->mockApiCreateRecurringSubscription(function () {
            $this->summaryPage->confirmOrder();
        });
    }

    /**
     * @Given the product :$productName has recurring payment option available
     */
    public function theProductHasRecurringPaymentOptionAvailable($productName)
    {
        $this->createPage->open(['/variants']);
    }


}
