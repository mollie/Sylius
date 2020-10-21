<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

use BitBag\SyliusMolliePlugin\Payments\Methods\AbstractMethod;
use Sylius\Component\Resource\Model\ResourceInterface;

class MollieGatewayConfig extends AbstractMethod implements ResourceInterface, MollieGatewayConfigInterface
{
    /** @var int */
    protected $id;

    /** @var string */
    protected $methodId;

    /** @var GatewayConfigInterface */
    protected $gateway;

    /** @var PaymentSurchargeFeeInterface */
    protected $paymentSurchargeFee;

    /** @var MollieMethodImageInterface */
    protected $customizeMethodImage;

    /** @var array */
    protected $countryLevel;

    /** @var array */
    protected $countryLevelAllowed;

    /** @var array */
    protected $countryLevelExcluded;

    /** @var int */
    protected $orderExpiration = 28;

    /** @var string */
    protected $paymentDescription;

    /** @var bool */
    protected $loggerEnabled;

    /** @var int */
    protected $loggerLevel;

    /** @var string|null */
    protected $countryRestriction;

    public function getId(): int
    {
        return $this->id;
    }

    public function getMethodId(): ?string
    {
        return $this->methodId;
    }

    public function setMethodId(?string $methodId): void
    {
        $this->methodId = $methodId;
    }

    public function getGateway(): GatewayConfigInterface
    {
        return $this->gateway;
    }

    public function setGateway(GatewayConfigInterface $gateway): void
    {
        $this->gateway = $gateway;
    }

    public function getPaymentSurchargeFee(): ?PaymentSurchargeFeeInterface
    {
        return $this->paymentSurchargeFee;
    }

    public function setPaymentSurchargeFee(?PaymentSurchargeFeeInterface $paymentSurchargeFee): void
    {
        $this->paymentSurchargeFee = $paymentSurchargeFee;
    }

    public function getCustomizeMethodImage(): ?MollieMethodImageInterface
    {
        return $this->customizeMethodImage;
    }

    public function setCustomizeMethodImage(?MollieMethodImageInterface $customizeMethodImage): void
    {
        $this->customizeMethodImage = $customizeMethodImage;
    }

    public function getCountryLevel(): ?array
    {
        return $this->countryLevel;
    }

    public function setCountryLevel(?array $countryLevel): void
    {
        $this->countryLevel = $countryLevel;
    }

    public function getOrderExpiration(): ?int
    {
        return $this->orderExpiration;
    }

    public function setOrderExpiration(?int $orderExpiration): void
    {
        $this->orderExpiration = $orderExpiration;
    }

    public function getPaymentDescription(): ?string
    {
        return $this->paymentDescription;
    }

    public function setPaymentDescription(?string $paymentDescription): void
    {
        $this->paymentDescription = $paymentDescription;
    }

    public function isLoggerEnabled(): ?bool
    {
        return $this->loggerEnabled;
    }

    public function setLoggerEnabled(?bool $loggerEnabled): void
    {
        $this->loggerEnabled = $loggerEnabled;
    }

    public function getLoggerLevel(): ?int
    {
        return $this->loggerLevel;
    }

    public function setLoggerLevel(?int $loggerLevel): void
    {
        $this->loggerLevel = $loggerLevel;
    }

    public function __toString(): string
    {
        return \sprintf('%s', $this->name);
    }

    public function getCountryLevelAllowed(): ?array
    {
        return $this->countryLevelAllowed;
    }

    public function setCountryLevelAllowed(?array $countryLevelAllowed): void
    {
        $this->countryLevelAllowed = $countryLevelAllowed;
    }

    public function getCountryLevelExcluded(): ?array
    {
        return $this->countryLevelExcluded;
    }

    public function setCountryLevelExcluded(?array $countryLevelExcluded): void
    {
        $this->countryLevelExcluded = $countryLevelExcluded;
    }

    public function getCountryRestriction(): ?string
    {
        return $this->countryRestriction;
    }

    public function setCountryRestriction(?string $countryRestriction): void
    {
        $this->countryRestriction = $countryRestriction;
    }
}
