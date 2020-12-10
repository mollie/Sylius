<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

interface PaymentSurchargeFeeInterface
{
    public function getId(): ?int;

    public function getType(): ?string;

    public function setType(?string $type): void;

    public function getFixedAmount(): ?float;

    public function setFixedAmount(?float $fixedAmount): void;

    public function getPercentage(): ?float;

    public function setPercentage(?float $percentage): void;

    public function getSurchargeLimit(): ?float;

    public function setSurchargeLimit(?float $surchargeLimit): void;

    public function getMollieGatewayConfig(): ?MollieGatewayConfigInterface;

    public function setMollieGatewayConfig(?MollieGatewayConfigInterface $mollieGatewayConfig): void;
}
