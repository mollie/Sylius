<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Processor;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Generator\SubscriptionScheduleGeneratorInterface;
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
        /** @var OrderInterface $lastOrder */
        $lastOrder = $subscription->getLastOrder();
        $payment = $lastOrder->getLastPayment(PaymentInterface::STATE_COMPLETED);
        if (null !== $payment) {
            $schedule = $subscription->getScheduleByIndex($lastOrder->getRecurringSequenceIndex());
            $schedule->setFulfilledDate($payment->getUpdatedAt());

            $this->scheduleRepository->add($schedule);
        }
    }

    public function processScheduleGeneration(MollieSubscriptionInterface $subscription): void
    {
        foreach ($this->scheduleGenerator->generate($subscription) as $schedule) {
            $subscription->addSchedule($schedule);
        }
        $subscription->setStartedAt(new \DateTime());
    }
}
