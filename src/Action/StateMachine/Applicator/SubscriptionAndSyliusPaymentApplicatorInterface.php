<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Action\StateMachine\Applicator;

use SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use Sylius\Component\Core\Model\PaymentInterface;

interface SubscriptionAndSyliusPaymentApplicatorInterface
{
    public function execute(MollieSubscriptionInterface $subscription, PaymentInterface $payment): void;
}
