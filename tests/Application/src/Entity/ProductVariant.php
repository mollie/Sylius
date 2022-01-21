<?php
declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Entity;

use BitBag\SyliusMolliePlugin\Entity\ProductVariantInterface;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Core\Model\ChannelPricingInterface;
use Sylius\Component\Core\Model\ProductVariant as BaseProductVariant;

class ProductVariant extends BaseProductVariant implements ProductVariantInterface
{
    private bool $recurring = false;
    private ?int $times = null;
    private ?string $interval = null;
    private bool $completeRecurringPrice = false;

    public function hasCompleteRecurringPrice(): bool
    {
        return $this->completeRecurringPrice;
    }

    public function setCompleteRecurringPrice(bool $completeRecurringPrice): void
    {
        $this->completeRecurringPrice = $completeRecurringPrice;
    }

    public function isRecurring(): bool
    {
        return $this->recurring;
    }

    public function setRecurring(bool $recurring): void
    {
        $this->recurring = $recurring;
    }

    public function getTimes(): ?int
    {
        return $this->times;
    }

    public function setTimes(?int $times): void
    {
        $this->times = $times;
    }

    public function getInterval(): ?string
    {
        return $this->interval;
    }

    public function setInterval(?string $interval): void
    {
        $this->interval = $interval;
    }
}
