<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Behat\Context\Ui\Admin;

use Behat\Behat\Context\Context;
use Sylius\Behat\Context\Ui\Admin\ManagingOrdersContext;
use Sylius\Component\Core\Model\OrderInterface;
use Tests\BitBag\SyliusMolliePlugin\Behat\Mocker\MollieApiMocker;

final class RefundContext implements Context
{
    /**
     * @var MollieApiMocker
     */
    private $mollieApiMocker;

    /**
     * @var ManagingOrdersContext
     */
    private $managingOrdersContext;

    /**
     * @param MollieApiMocker $mollieApiMocker
     * @param ManagingOrdersContext $managingOrdersContext
     */
    public function __construct(
        MollieApiMocker $mollieApiMocker,
        ManagingOrdersContext $managingOrdersContext
    ) {
        $this->mollieApiMocker = $mollieApiMocker;
        $this->managingOrdersContext = $managingOrdersContext;
    }

    /**
     * @When /^I mark (this order)'s mollie payment as refunded$/
     */
    public function iMarkThisOrdersMolliePaymentAsRefunded(OrderInterface $order): void
    {
        $this->mollieApiMocker->mockApiRefundedPayment(function () use ($order) {
            $this->managingOrdersContext->iMarkThisOrderSPaymentAsRefunded($order);
        });
    }
}
