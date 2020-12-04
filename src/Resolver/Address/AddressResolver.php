<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver\Address;

use BitBag\SyliusMolliePlugin\Validator\ApplePayDirect\ApplePayAddressValidatorInterface;
use Sylius\Component\Core\Model\Address;
use Sylius\Component\Core\Model\AddressInterface;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class AddressResolver implements AddressResolverInterface
{
    /** @var ApplePayAddressValidatorInterface */
    private $addressValidator;

    /** @var RepositoryInterface */
    private $customerRepository;

    public function __construct(
        ApplePayAddressValidatorInterface $addressValidator,
        RepositoryInterface $customerRepository
    ) {
        $this->addressValidator = $addressValidator;
        $this->customerRepository = $customerRepository;
    }

    public function resolve(array $applePayDirectAddress): AddressInterface
    {
        $this->addressValidator->validate($applePayDirectAddress);

        $address = new Address();
        $address->setCity($applePayDirectAddress['locality']);
        $address->setStreet(implode(' ', $applePayDirectAddress['addressLines']));
        $address->setPostcode($applePayDirectAddress['postalCode']);
        $address->setCountryCode($applePayDirectAddress['countryCode']);
        $address->setFirstName($applePayDirectAddress['givenName']);
        $address->setLastName($applePayDirectAddress['familyName']);

        /** @var CustomerInterface $customer */
        $customer = $this->customerRepository->findOneBy(['email' => $applePayDirectAddress['emailAddress']]);

        if (null !== $customer) {
            $address->setCustomer($customer);
        }

        return $address;
    }
}
