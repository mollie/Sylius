<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\DTO;

final class PartialRefundItem
{
    /** @var int */
    private $id;

    /** @var string */
    private $type;

    /** @var int */
    private $amountTotal = 0;

    /** @var int */
    private $amountRefunded = 0;

    /** @var int */
    private $quantity = 1;

    /** @var int */
    private $amountToRefund = 0;

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function setType(string $type): void
    {
        $this->type = $type;
    }

    public function getAmountTotal(): int
    {
        return $this->amountTotal;
    }

    public function setAmountTotal(int $amountTotal): void
    {
        $this->amountTotal = $amountTotal;
    }

    public function getAmountRefunded(): int
    {
        return $this->amountRefunded;
    }

    public function setAmountRefunded(int $amountRefunded): void
    {
        $this->amountRefunded += $amountRefunded;
    }

    public function getQuantity(): int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): void
    {
        $this->quantity = $quantity;
    }

    public function getAvailableAmountToRefund(): int
    {
        return $this->getAmountTotal() - $this->getAmountRefunded() - $this->getAmountToRefund();
    }

    public function setAmountToRefund(int $amount): int
    {
        $value = $this->getAvailableAmountToRefund() - $amount;

        if ($value < 0) {
            $this->amountToRefund = $this->getAvailableAmountToRefund();

            return abs($value);
        }

        $this->amountToRefund = $amount;

        return 0;
    }

    public function getAmountToRefund()
    {
        return $this->amountToRefund;
    }
}
