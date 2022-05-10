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
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use Sylius\Component\Core\Repository\PaymentRepositoryInterface;
use Sylius\Component\Payment\Model\PaymentInterface;
use Tests\BitBag\SyliusMolliePlugin\Behat\Page\Admin\Order\IndexPageInterface;
use Tests\BitBag\SyliusMolliePlugin\Behat\Page\Admin\Order\ShowPageInterface;
use Webmozart\Assert\Assert;

final class OrderContext implements Context
{
    private IndexPageInterface $indexPage;

    private PaymentRepositoryInterface $paymentRepository;

    private ShowPageInterface $showPage;

    public function __construct(
        IndexPageInterface $indexPage,
        PaymentRepositoryInterface $paymentRepository,
        ShowPageInterface $showPage
    ) {
        $this->indexPage = $indexPage;
        $this->paymentRepository = $paymentRepository;
        $this->showPage = $showPage;
    }

    /**
     * @Then all orders have same total set to :total
     */
    public function bothOrdersShouldHaveSameTotal(string $total): void
    {
        Assert::true($this->indexPage->allOrdersHaveSameTotal($total));
    }

    /**
     * @When /^(this order) is incomplete$/
     */
    public function thisOrderIsIncomplete(OrderInterface $order): void
    {
        /** @var PaymentInterface $firstPayment */
        $firstPayment = $order->getPayments()->first();
        $firstPayment->setDetails([]);

        $this->paymentRepository->add($firstPayment);
    }

    /**
     * @When I view summary of last order
     */
    public function viewSummaryOfLastOrder(): void
    {
        $this->showPage->openLastOrderPage();
    }
}
