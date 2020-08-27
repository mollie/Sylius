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

use Sylius\Component\Resource\Model\ResourceInterface;

class PaymentSurchargeFee implements ResourceInterface, PaymentSurchargeFeeInterface
{
    /** @var int */
    protected $id;

    /** @var string */
    protected $type;

    /** @var float */
    protected $fixedAmount;

    /** @var float */
    protected $percentage;

    /** @var float */
    protected $surchargeLimit;

    /** @var MollieGatewayConfigInterface */
    protected $mollieGatewayConfig;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): void
    {
        $this->type = $type;
    }

    public function getFixedAmount(): ?float
    {
        return $this->fixedAmount;
    }

    public function setFixedAmount(?float $fixedAmount): void
    {
        $this->fixedAmount = $fixedAmount;
    }

    public function getPercentage(): ?float
    {
        return $this->percentage;
    }

    public function setPercentage(?float $percentage): void
    {
        $this->percentage = $percentage;
    }

    public function getSurchargeLimit(): ?float
    {
        return $this->surchargeLimit;
    }

    public function setSurchargeLimit(?float $surchargeLimit): void
    {
        $this->surchargeLimit = $surchargeLimit;
    }

    public function getMollieGatewayConfig(): ?MollieGatewayConfigInterface
    {
        return $this->mollieGatewayConfig;
    }

    public function setMollieGatewayConfig(?MollieGatewayConfigInterface $mollieGatewayConfig): void
    {
        $this->mollieGatewayConfig = $mollieGatewayConfig;
    }
}
