<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\PaymentProcessing;

use BitBag\SyliusMolliePlugin\Factory\DatePeriodFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionScheduleFactoryInterface;
use BitBag\SyliusMolliePlugin\Repository\MollieSubscriptionRepositoryInterface;
use BitBag\SyliusMolliePlugin\Transitions\MollieRecurringTransitions;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionPaymentProcessingTransitions;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionProcessingTransitions;
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

    public function handleSuccess(PaymentInterface $payment): void
    {
        $subscriptions = $this->subscriptionRepository->findByPayment($payment);

        foreach ($subscriptions as $subscription) {
            $graph = $this->graphFactory->get($subscription, MollieRecurringTransitions::GRAPH);
            $processingGraph = $this->graphFactory->get($subscription, MollieSubscriptionProcessingTransitions::GRAPH);
            $paymentGraph = $this->graphFactory->get(
                $subscription,
                MollieSubscriptionPaymentProcessingTransitions::GRAPH
            );

            if ($paymentGraph->can(MollieSubscriptionPaymentProcessingTransitions::TRANSITION_SUCCESS)) {
                $paymentGraph->apply(MollieSubscriptionPaymentProcessingTransitions::TRANSITION_SUCCESS);
                $subscription->resetFailedPaymentCount();
            }

            if ($graph->can(MollieRecurringTransitions::TRANSITION_ACTIVATE)) {
                $graph->apply(MollieRecurringTransitions::TRANSITION_ACTIVATE);

                $startedAt = new \DateTime();
                $subscription->setStartedAt($startedAt);
                $configuration = $subscription->getSubscriptionConfiguration();

                $datePeriods = $this->datePeriodFactory->createForSubscriptionConfiguration(
                    $startedAt,
                    $configuration->getNumberOfRepetitions(),
                    $configuration->getInterval()
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

                if ($processingGraph->can(MollieSubscriptionProcessingTransitions::TRANSITION_SCHEDULE)) {
                    $processingGraph->apply(MollieSubscriptionProcessingTransitions::TRANSITION_SCHEDULE);
                }

                $this->subscriptionRepository->add($subscription);
            }

            if ($graph->can(MollieRecurringTransitions::TRANSITION_COMPLETE)) {
                $graph->apply(MollieRecurringTransitions::TRANSITION_COMPLETE);

                $this->subscriptionRepository->add($subscription);
            }
        }
    }

    public function handleFailed(PaymentInterface $payment): void
    {
        $subscriptions = $this->subscriptionRepository->findByPayment($payment);

        foreach ($subscriptions as $subscription) {
            $graph = $this->graphFactory->get($subscription, MollieRecurringTransitions::GRAPH);
            $processingGraph = $this->graphFactory->get($subscription, MollieSubscriptionProcessingTransitions::GRAPH);
            $paymentGraph = $this->graphFactory->get(
                $subscription,
                MollieSubscriptionPaymentProcessingTransitions::GRAPH
            );

            if ($paymentGraph->can(MollieSubscriptionPaymentProcessingTransitions::TRANSITION_FAILURE)) {
                $paymentGraph->apply(MollieSubscriptionPaymentProcessingTransitions::TRANSITION_FAILURE);
            }

            $subscription->incrementFailedPaymentCounter();

            if ($graph->can(MollieRecurringTransitions::TRANSITION_ABORT_DUE_OF_FAILED_PAYMENTS)) {
                $graph->apply(MollieRecurringTransitions::TRANSITION_ABORT_DUE_OF_FAILED_PAYMENTS);
            }

            $this->subscriptionRepository->add($subscription);
        }
    }
}
