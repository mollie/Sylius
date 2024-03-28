<?php

namespace SyliusMolliePlugin\DTO\MolliePayment;

class Amount
{
    /**
     * @var float|null
     */
    private $value;
    /**
     * @var string|null
     */
    private $currency;

    /**
     * @param float|null $value
     * @param string|null $currency
     */
    public function __construct(?float $value, ?string $currency)
    {
        $this->value = $value;
        $this->currency = $currency;
    }

    public function getValue(): ?float
    {
        return $this->value;
    }

    public function setValue(?float $value): void
    {
        $this->value = $value;
    }

    public function getCurrency(): ?string
    {
        return $this->currency;
    }

    public function setCurrency(?string $currency): void
    {
        $this->currency = $currency;
    }

    public function toArray()
    {
        return [
            'value' => $this->getValue(),
            'currency' => $this->getCurrency()
        ];
    }
}
