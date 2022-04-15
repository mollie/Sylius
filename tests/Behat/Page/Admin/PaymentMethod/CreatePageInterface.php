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

use Sylius\Behat\Page\Admin\Crud\CreatePageInterface as BaseCreatePageInterface;

interface CreatePageInterface extends BaseCreatePageInterface
{
    public function setApiKey(string $apiKey): void;

    public function setProfileId(string $profileId): void;

    public function setTimes(int $times): void;

    public function setInterval(string $interval): void;

    public function loadPaymentMethods(): void;

    public function enablePaymentMethod(string $paymentMethodName): void;

    public function containsErrorWithMessage(string $message, bool $strict = true): bool;

    public function containsSuccessMessage(string $message): bool;
}
