<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\PaymentProcessing;

use BitBag\SyliusMolliePlugin\Factory\DatePeriodFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionScheduleFactoryInterface;
use BitBag\SyliusMolliePlugin\Repository\MollieSubscriptionRepositoryInterface;
use BitBag\SyliusMolliePlugin\Transitions\MollieRecurringTransitions;
use SM\Factory\Factory;
use Sylius\Component\Core\Model\PaymentInterface;

final class SubscriptionPaymentCompletedHandler
{
    private MollieSubscriptionRepositoryInterface $subscriptionRepository;
    private Factory $graphFactory;
    private DatePeriodFactoryInterface $datePeriodFactory;
    private MollieSubscriptionScheduleFactoryInterface $scheduleFactory;

    public function __construct(
        MollieSubscriptionRepositoryInterface $subscriptionRepository,
        Factory $graphFactory,
        DatePeriodFactoryInterface $datePeriodFactory,
        MollieSubscriptionScheduleFactoryInterface $scheduleFactory
    )
    {
        $this->subscriptionRepository = $subscriptionRepository;
        $this->graphFactory = $graphFactory;
        $this->datePeriodFactory = $datePeriodFactory;
        $this->scheduleFactory = $scheduleFactory;
    }

    public function process(PaymentInterface $payment): void
    {
        $subscriptions = $this->subscriptionRepository->findByPayment($payment);

        foreach ($subscriptions as $subscription) {
            $graph = $this->graphFactory->get($subscription, MollieRecurringTransitions::GRAPH);
            if ($graph->can(MollieRecurringTransitions::TRANSITION_ACTIVATE)) {
                $graph->apply(MollieRecurringTransitions::TRANSITION_ACTIVATE);
                $startedAt = new \DateTime();
                $subscription->setStartedAt($startedAt);

                $datePeriods = $this->datePeriodFactory->createForSubscriptionConfiguration(
                    $startedAt,
                    $subscription->getNumberOfRepetitions(),
                    $subscription->getInterval()
                );

                foreach ($datePeriods as $index => $date) {
                    $schedule = $this->scheduleFactory->createConfiguredForSubscription(
                        $subscription,
                        $date,
                        $index,
                        0 === $index ? $startedAt : null
                    );

                    $subscription->addSchedule($schedule);
                }

                $this->subscriptionRepository->add($subscription);
                continue;
            }

            if ($graph->can(MollieRecurringTransitions::TRANSITION_FINISH_PROCESSING)) {
                $graph->apply(MollieRecurringTransitions::TRANSITION_FINISH_PROCESSING);
                $this->subscriptionRepository->add($subscription);
                continue;
            }
        }
    }
}
