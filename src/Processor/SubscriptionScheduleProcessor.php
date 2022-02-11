<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Processor;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Generator\SubscriptionScheduleGeneratorInterface;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionTransitions;
use SM\Factory\Factory;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Resource\Repository\RepositoryInterface;

final class SubscriptionScheduleProcessor implements SubscriptionScheduleProcessorInterface
{
    private RepositoryInterface $scheduleRepository;
    private SubscriptionScheduleGeneratorInterface $scheduleGenerator;

    public function __construct(
        RepositoryInterface $scheduleRepository,
        SubscriptionScheduleGeneratorInterface $scheduleGenerator
    )
    {
        $this->scheduleRepository = $scheduleRepository;
        $this->scheduleGenerator = $scheduleGenerator;
    }

    public function process(MollieSubscriptionInterface $subscription): void
    {
        $payment = $subscription->getLastPayment();

        if (null !== $payment) {
            $order = $payment->getOrder();
            $schedule = $subscription->getScheduleByIndex($order->getRecurringSequenceIndex());

            if (false === $schedule->isFulfilled()) {
                $schedule->setFulfilledDate($payment->getUpdatedAt());
            }

            $this->scheduleRepository->add($schedule);
        }
    }

    public function processScheduleGeneration(MollieSubscriptionInterface $subscription): void
    {
        if (0 !== $subscription->getSchedules()->count()) {
            return;
        }

        foreach ($this->scheduleGenerator->generate($subscription) as $schedule) {
            $subscription->addSchedule($schedule);
        }
        $subscription->setStartedAt(new \DateTime());
    }
}
