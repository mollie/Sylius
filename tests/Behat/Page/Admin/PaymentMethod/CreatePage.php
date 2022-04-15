<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Behat\Page\Admin\PaymentMethod;

use Behat\Mink\Element\NodeElement;
use Sylius\Behat\Page\Admin\Crud\CreatePage as BaseCreatePage;

final class CreatePage extends BaseCreatePage implements CreatePageInterface
{
    /**
     * @inheritdoc
     */
    public function setApiKey(string $apiKey): void
    {
        $this->getDocument()->fillField('Test API Key *', $apiKey);
    }

    /**
     * @inheritdoc
     */
    public function setProfileId(string $profileId): void
    {
        $this->getDocument()->fillField('Profile ID', $profileId);
    }

    /**
     * @inheritdoc
     */
    public function setTimes(int $times): void
    {
        $this->getDocument()->fillField('Times', $times);
    }

    /**
     * @inheritdoc
     */
    public function setInterval(string $interval): void
    {
        $this->getDocument()->fillField('Interval', $interval);
    }

    public function loadPaymentMethods(): void
    {
        $this->getDocument()->find('css', '#get_methods')->click();
        $time = 10000;
        $this->getSession()->wait($time, '(0 === jQuery.active)');
    }

    public function enablePaymentMethod(string $paymentMethodName): void
    {
        $this->getDocument()->checkField($paymentMethodName);
    }

    /**
     * @inheritdoc
     */
    public function containsErrorWithMessage(string $message, bool $strict = true): bool
    {
        $validationMessageElements = $this->getDocument()->findAll('css', '.sylius-validation-error');
        $result = false;

        /** @var NodeElement $validationMessageElement */
        foreach ($validationMessageElements as $validationMessageElement) {
            if (true === $strict && $message === $validationMessageElement->getText()) {
                return true;
            }

            if (false === $strict && strstr($validationMessageElement->getText(), $message)) {
                return true;
            }
        }

        return $result;
    }

    public function containsSuccessMessage(string $message): bool
    {
        $successMessages = $this->getDocument()->findAll('css', '.sylius-flash-message p');

        foreach ($successMessages as $successMessage) {
            if ($successMessage->getText() === $message) {
                return true;
            }
        }

        return false;
    }
}
