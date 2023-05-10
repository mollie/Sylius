<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Applicator;

use Sylius\Component\Core\Model\OrderInterface;

interface UnitsPromotionAdjustmentsApplicatorInterface
{
    public function apply(OrderInterface $order, array $promotionAmount): void;
}
