<?php

namespace SyliusMolliePlugin\DTO\MolliePayment;

class Metadata
{
    /**
     * @var int|null
     */
    private $orderId;
    /**
     * @var int|null
     */
    private $customerId;
    /**
     * @var string|null
     */
    private $molliePaymentMethods;
    /**
     * @var string|null
     */
    private $cartToken;
    /**
     * @var bool|null
     */
    private $saveCardInfo;
    /**
     * @var bool|null
     */
    private $useSavedCards;
    /**
     * @var string|null
     */
    private $selectedIssuer;
    /**
     * @var string|null
     */
    private $methodType;

    /**
     * @param int|null $orderId
     * @param int|null $customerId
     * @param string|null $molliePaymentMethods
     * @param string|null $cartToken
     * @param bool|null $saveCardInfo
     * @param bool|null $useSavedCards
     * @param string|null $selectedIssuer
     * @param string|null $methodType
     */
    public function __construct(?int $orderId, ?int $customerId, ?string $molliePaymentMethods, ?string $cartToken,
                                ?bool $saveCardInfo, ?bool $useSavedCards, ?string $selectedIssuer, ?string $methodType)
    {
        $this->orderId = $orderId;
        $this->customerId = $customerId;
        $this->molliePaymentMethods = $molliePaymentMethods;
        $this->cartToken = $cartToken;
        $this->saveCardInfo = $saveCardInfo;
        $this->useSavedCards = $useSavedCards;
        $this->selectedIssuer = $selectedIssuer;
        $this->methodType = $methodType;
    }

    /**
     * @return int|null
     */
    public function getOrderId(): ?int
    {
        return $this->orderId;
    }

    /**
     * @param int|null $orderId
     * @return void
     */
    public function setOrderId(?int $orderId): void
    {
        $this->orderId = $orderId;
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
    public function getMolliePaymentMethods(): ?string
    {
        return $this->molliePaymentMethods;
    }

    /**
     * @param string|null $molliePaymentMethods
     * @return void
     */
    public function setMolliePaymentMethods(?string $molliePaymentMethods): void
    {
        $this->molliePaymentMethods = $molliePaymentMethods;
    }

    /**
     * @return string|null
     */
    public function getCartToken(): ?string
    {
        return $this->cartToken;
    }

    /**
     * @param string|null $cartToken
     * @return void
     */
    public function setCartToken(?string $cartToken): void
    {
        $this->cartToken = $cartToken;
    }

    /**
     * @return bool|null
     */
    public function getSaveCardInfo(): ?bool
    {
        return $this->saveCardInfo;
    }

    /**
     * @param bool|null $saveCardInfo
     * @return void
     */
    public function setSaveCardInfo(?bool $saveCardInfo): void
    {
        $this->saveCardInfo = $saveCardInfo;
    }

    /**
     * @return bool|null
     */
    public function getUseSavedCards(): ?bool
    {
        return $this->useSavedCards;
    }

    /**
     * @param bool|null $useSavedCards
     * @return void
     */
    public function setUseSavedCards(?bool $useSavedCards): void
    {
        $this->useSavedCards = $useSavedCards;
    }

    /**
     * @return string|null
     */
    public function getSelectedIssuer(): ?string
    {
        return $this->selectedIssuer;
    }

    /**
     * @param string|null $selectedIssuer
     * @return void
     */
    public function setSelectedIssuer(?string $selectedIssuer): void
    {
        $this->selectedIssuer = $selectedIssuer;
    }

    /**
     * @return string|null
     */
    public function getMethodType(): ?string
    {
        return $this->methodType;
    }

    /**
     * @param string|null $methodType
     * @return void
     */
    public function setMethodType(?string $methodType): void
    {
        $this->methodType = $methodType;
    }

    /**
     * @return array
     */
    public function toArray()
    {
        return [
            'order_id' => $this->getOrderId(),
            'customer_id' => $this->getCustomerId(),
            'molliePaymentMethods' => $this->getMolliePaymentMethods(),
            'cartToken' => $this->getCartToken(),
            'saveCardInfo' => $this->getSaveCardInfo(),
            'useSavedCards' => $this->getUseSavedCards(),
            'selected_issuer' => $this->getSelectedIssuer(),
            'methodType' => $this->getMethodType()
        ];
    }
}
