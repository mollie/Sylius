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
use Sylius\Behat\NotificationType;
use Sylius\Behat\Service\NotificationCheckerInterface;
use Tests\BitBag\SyliusMolliePlugin\Behat\Mocker\MollieApiMocker;
use Tests\BitBag\SyliusMolliePlugin\Behat\Page\Shop\Account\Order\IndexPageInterface;

final class AccountContext implements Context
{
    /**
     * @var IndexPageInterface
     */
    private $orderIndexPage;

    /**
     * @var NotificationCheckerInterface
     */
    private $notificationChecker;

    /**
     * @var MollieApiMocker
     */
    private $mollieApiMocker;

    /**
     * @param IndexPageInterface $orderIndexPage
     * @param NotificationCheckerInterface $notificationChecker
     * @param MollieApiMocker $mollieApiMocker
     */
    public function __construct(
        IndexPageInterface $orderIndexPage,
        NotificationCheckerInterface $notificationChecker,
        MollieApiMocker $mollieApiMocker
    ) {
        $this->orderIndexPage = $orderIndexPage;
        $this->notificationChecker = $notificationChecker;
        $this->mollieApiMocker = $mollieApiMocker;
    }

    /**
     * @When I cancel this subscription
     */
    public function iCancelThisSubscription(): void
    {
        $this->mollieApiMocker->mockApiCancelledRecurringSubscription(function () {
            $this->orderIndexPage->cancelSubscription();
        });
    }

    /**
     * @Then I should be notified that it has been successfully canceled
     */
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyCanceled(): void
    {
        $this->notificationChecker->checkNotification(
            'Subscription has been cancelled.',
            NotificationType::success()
        );
    }
}
