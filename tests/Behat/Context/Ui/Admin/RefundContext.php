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

final class RefundContext implements Context
{
    /** @var ManagingOrdersContext */
    private $managingOrdersContext;

    public function __construct(
        ManagingOrdersContext $managingOrdersContext
    ) {
        $this->managingOrdersContext = $managingOrdersContext;
    }

    /**
     * @When /^I mark (this order)'s mollie payment as refunded$/
     */
    public function iMarkThisOrdersMolliePaymentAsRefunded(OrderInterface $order): void
    {
        $this->managingOrdersContext->iMarkThisOrderSPaymentAsRefunded($order);
    }
}
