<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

use Sylius\Component\Core\Model\ProductVariantInterface as BaseProductVariantInterface;

interface ProductVariantInterface extends BaseProductVariantInterface
{
    public function isRecurring(): bool;
    public function setRecurring(bool $recurring): void;

    public function getTimes(): ?int;
    public function setTimes(?int $times): void;

    public function getInterval(): ?string;
    public function setInterval(string $interval): void;
}
