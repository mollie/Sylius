<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Payments\Methods;

trait ConfigTrait
{
    /** @var array */
    protected $image;

    /** @var array */
    protected $minimumAmount;

    /** @var array */
    protected $maximumAmount;

    /** @var string */
    protected $paymentType = 'online';

    /** @var array */
    protected $country;

    /** @var boolean */
    protected $canRefunded = true;

    /** @var array */
    protected $issuers = [];

    public function getImage(): array
    {
        return $this->image;
    }

    public function setImage(array $image): void
    {
        $this->image = $image;
    }

    public function getMinimumAmount(): array
    {
        return $this->minimumAmount;
    }

    public function setMinimumAmount(array $minimumAmount): void
    {
        $this->minimumAmount = $minimumAmount;
    }

    public function getMaximumAmount(): array
    {
        return $this->maximumAmount;
    }

    public function setMaximumAmount(array $maximumAmount): void
    {
        $this->maximumAmount = $maximumAmount;
    }

    public function getPaymentType(): string
    {
        return $this->paymentType;
    }

    public function setPaymentType(string $paymentType): void
    {
        $this->paymentType = $paymentType;
    }

    public function getCountry(): array
    {
        return $this->country;
    }

    public function setCountry(array $country): void
    {
        $this->country = $country;
    }

    public function isCanRefunded(): bool
    {
        return $this->canRefunded;
    }

    public function setCanRefunded(bool $canRefunded): void
    {
        $this->canRefunded = $canRefunded;
    }

    public function getIssuers(): array
    {
        return $this->issuers;
    }

    public function setIssuers(array $issuers): void
    {
        $this->issuers = $issuers;
    }
}
