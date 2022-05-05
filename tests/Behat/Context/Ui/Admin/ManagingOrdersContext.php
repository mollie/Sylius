<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Behat\Context\Ui\Admin;

use Behat\Behat\Context\Context;
use Sylius\Behat\Page\Admin\Order\IndexPageInterface;
use Sylius\Behat\Page\Admin\Order\ShowPageInterface;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Webmozart\Assert\Assert;

final class ManagingOrdersContext implements Context
{
    private IndexPageInterface $indexPage;

    private ShowPageInterface $showPage;

    public function __construct(IndexPageInterface $indexPage, ShowPageInterface $showPage)
    {
        $this->indexPage = $indexPage;
        $this->showPage = $showPage;
    }

    /**
     * @Given I am browsing orders
     * @When I browse orders
     */
    public function iBrowseOrders()
    {
        $this->indexPage->open();
    }

    /**
     * @Then /^it should have (\d+) items$/
     * @Then I should see :amount orders in the list
     */
    public function itShouldHaveAmountOfItems($amount = 1)
    {
        Assert::same($this->showPage->countItems(), (int) $amount);
    }

    /**
     * @Then I should see a single order from customer :customer
     */
    public function iShouldSeeASingleOrderFromCustomer(CustomerInterface $customer)
    {
        Assert::true($this->indexPage->isSingleResourceOnPage(['customer' => $customer->getEmail()]));
    }

    /**
     * @Given /^I am viewing the summary of (this order)$/
     * @When I view the summary of the order :order
     */
    public function iSeeTheOrder(OrderInterface $order)
    {
        $this->showPage->open(['id' => $order->getId()]);
    }

    /**
     * @Then /^the order's total should(?:| still) be "([^"]+)"$/
     */
    public function theOrdersTotalShouldBe($total)
    {
        Assert::eq($this->showPage->getTotal(), $total);
    }

    /**
     * @Then it should be paid with :paymentMethodName
     */
    public function itShouldBePaidWith($paymentMethodName)
    {
        Assert::true($this->showPage->hasPayment($paymentMethodName));
    }
}
