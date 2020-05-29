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

use BitBag\SyliusMolliePlugin\Payments\Methods\MethodInterface;

interface MollieGatewayConfigInterface extends MethodInterface
{
    public function setMethodId(string $methodId): void;

    public function getGateway(): GatewayConfigInterface;

    public function setGateway(GatewayConfigInterface $gateway): void;

    public function getPaymentSurchargeFee(): ?PaymentSurchargeFeeInterface;

    public function setPaymentSurchargeFee(?PaymentSurchargeFeeInterface $paymentSurchargeFee): void;

    public function getCustomizeMethodImage(): ?MollieMethodImageInterface;

    public function setCustomizeMethodImage(?MollieMethodImageInterface $customizeMethodImage): void;

    public function getCountryLevel(): ?array;

    public function setCountryLevel(?array $countryLevel): void;

    public function getOrderExpiration(): ?int;

    public function setOrderExpiration(?int $orderExpiration): void;
}
