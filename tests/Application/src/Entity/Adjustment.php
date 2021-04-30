<?php

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Entity;

use Sylius\Component\Order\Model\Adjustment as BaseAdjustment;
use Sylius\RefundPlugin\Entity\AdjustmentInterface as RefundAdjustmentInterface;
use Sylius\RefundPlugin\Entity\AdjustmentTrait;
use Doctrine\ORM\Mapping as ORM;

class Adjustment extends BaseAdjustment implements RefundAdjustmentInterface
{
    use AdjustmentTrait;
}