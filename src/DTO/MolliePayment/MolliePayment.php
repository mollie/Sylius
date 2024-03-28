<?php

namespace SyliusMolliePlugin\DTO\MolliePayment;

class MolliePayment
{
    /**
     * @var Amount $amount
     */
    private $amount;
    /**
     * @var string|null
     */
    private $description;
    /**
     * @var Metadata $metadata
     */
    private $metadata;
    /**
     * @var string|null
     */
    private $fullName;
    /**
     * @var string|null
     */
    private $email;
    /**
     * @var int|null
     */
    private $customerId;
    /**
     * @var string|null
     */
    private $locale;

    /**
     * @return Amount
     */
    public function getAmount(): Amount
    {
        return $this->amount;
    }

    /**
     * @param Amount $amount
     * @return void
     */
    public function setAmount(Amount $amount): void
    {
        $this->amount = $amount;
    }

    /**
     * @return string|null
     */
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * @param string|null $description
     * @return void
     */
    public function setDescription(?string $description): void
    {
        $this->description = $description;
    }

    /**
     * @return Metadata
     */
    public function getMetadata(): Metadata
    {
        return $this->metadata;
    }

    /**
     * @param Metadata $metadata
     * @return void
     */
    public function setMetadata(Metadata $metadata): void
    {
        $this->metadata = $metadata;
    }

    /**
     * @return string|null
     */
    public function getFullName(): ?string
    {
        return $this->fullName;
    }

    /**
     * @param string|null $fullName
     * @return void
     */
    public function setFullName(?string $fullName): void
    {
        $this->fullName = $fullName;
    }

    /**
     * @return string|null
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * @param string|null $email
     * @return void
     */
    public function setEmail(?string $email): void
    {
        $this->email = $email;
    }

    /**
     * @return int|null
     */
    public function getCustomerId(): ?int
    {
        return $this->customerId;
    }

    /**
     * @param int|null $customerId
     * @return void
     */
    public function setCustomerId(?int $customerId): void
    {
        $this->customerId = $customerId;
    }

    /**
     * @return string|null
     */
    public function getLocale(): ?string
    {
        return $this->locale;
    }

    /**
     * @param string|null $locale
     * @return void
     */
    public function setLocale(?string $locale): void
    {
        $this->locale = $locale;
    }

    /**
     * @return array
     */
    public function toArray()
    {
        return [
            'amount' => $this->getAmount()->toArray(),
            'description' => $this->getDescription(),
            'metadata' => $this->getMetadata()->toArray(),
            'full_name' => $this->getFullName(),
            'email' => $this->getEmail(),
            'customerId' => $this->getCustomerId(),
            'locale' => $this->getLocale()
        ];
    }
}
