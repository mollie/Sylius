<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Validator\ApplePayDirect;

use Webmozart\Assert\Assert;

final class ApplePayAddressValidator implements ApplePayAddressValidatorInterface
{
    public function validate(array $data): void
    {
        Assert::true(isset($data['locality']), 'The locality want provide');
        Assert::true(isset($data['addressLines']), 'The addressLines want provide');
        Assert::true(isset($data['postalCode']), 'The postalCode want provide');
        Assert::true(isset($data['countryCode']), 'The countryCode want provide');
        Assert::true(isset($data['givenName']), 'The givenName want provide');
        Assert::true(isset($data['familyName']), 'The familyName want provide');
    }
}
