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
use Webmozart\Assert\Assert;

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

    public function loadPaymentMethods(): void
    {
        $getMethodsButton = $this->getDocument()->find('css', '#get_methods');
        Assert::notNull($getMethodsButton);

        $getMethodsButton->click();
        $time = 5000;
        $this->getSession()->wait($time);
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

            if (false === $strict && str_contains($validationMessageElement->getText(), $message)) {
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
