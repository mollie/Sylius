<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Action\StateMachine\Applicator;

use SyliusMolliePlugin\Entity\MollieSubscriptionInterface;

interface SubscriptionAndPaymentIdApplicatorInterface
{
    public function execute(MollieSubscriptionInterface $subscription, string $paymentId): void;
}
