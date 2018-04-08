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
use Sylius\Behat\Page\Shop\Checkout\CompletePageInterface;
use Sylius\Behat\Page\Shop\Order\ShowPageInterface;
use Tests\BitBag\SyliusMolliePlugin\Behat\Mocker\MollieApiMocker;
use Tests\BitBag\SyliusMolliePlugin\Behat\Page\External\PaymentPageInterface;

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
}
