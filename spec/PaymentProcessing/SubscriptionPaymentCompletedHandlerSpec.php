<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\PaymentProcessing;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionConfigurationInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionScheduleInterface;
use BitBag\SyliusMolliePlugin\Factory\DatePeriodFactoryInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionScheduleFactoryInterface;
use BitBag\SyliusMolliePlugin\PaymentProcessing\SubscriptionPaymentCompletedHandler;
use BitBag\SyliusMolliePlugin\Repository\MollieSubscriptionRepositoryInterface;
use BitBag\SyliusMolliePlugin\Transitions\MollieRecurringTransitions;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionPaymentProcessingTransitions;
use BitBag\SyliusMolliePlugin\Transitions\MollieSubscriptionProcessingTransitions;
use PhpSpec\ObjectBehavior;
use SM\Factory\Factory;
use SM\StateMachine\StateMachineInterface;
use Sylius\Component\Core\Model\PaymentInterface;

final class SubscriptionPaymentCompletedHandlerSpec extends ObjectBehavior
{
    function let(
        MollieSubscriptionRepositoryInterface $subscriptionRepository,
        Factory $graphFactory,
        DatePeriodFactoryInterface $datePeriodFactory,
        MollieSubscriptionScheduleFactoryInterface $scheduleFactory
    ): void {
        $this->beConstructedWith(
            $subscriptionRepository,
            $graphFactory,
            $datePeriodFactory,
            $scheduleFactory
        );
    }
    function it_is_initializable(): void
    {
        $this->shouldHaveType(SubscriptionPaymentCompletedHandler::class);
    }

    function it_handle_success(
        PaymentInterface $payment,
        MollieSubscriptionRepositoryInterface $subscriptionRepository,
        MollieSubscriptionInterface $subscription1,
        MollieSubscriptionInterface $subscription2,
        Factory $graphFactory,
        StateMachineInterface $graph,
        StateMachineInterface $processingGraph,
        StateMachineInterface $paymentGraph,
        MollieSubscriptionConfigurationInterface $configuration,
        DatePeriodFactoryInterface $datePeriodFactory,
        MollieSubscriptionScheduleFactoryInterface $scheduleFactory,
        MollieSubscriptionScheduleInterface $schedule
    ): void {
        $subscriptionRepository->findByPayment($payment)->willReturn([
            $subscription1,
            $subscription2,
        ]);


        $graphFactory->get($subscription1, MollieRecurringTransitions::GRAPH)
            ->willReturn($graph);
        $graphFactory->get($subscription1, MollieSubscriptionProcessingTransitions::GRAPH)
            ->willReturn($processingGraph);
        $graphFactory->get($subscription1, MollieSubscriptionPaymentProcessingTransitions::GRAPH)
            ->willReturn($paymentGraph);

        $paymentGraph->can(MollieSubscriptionPaymentProcessingTransitions::TRANSITION_SUCCESS)
            ->willReturn(true);
        $paymentGraph->apply(MollieSubscriptionPaymentProcessingTransitions::TRANSITION_SUCCESS);

        $subscription1->resetFailedPaymentCount();

        $graph->can(MollieRecurringTransitions::TRANSITION_ACTIVATE)->willReturn(true);
        $graph->apply(MollieRecurringTransitions::TRANSITION_ACTIVATE);

        $startedAt = new \DateTime();
        $fulfilledDate = new \DateTime();
        $fulfilledDate->setDate(2023,12,12);

        $subscription1->getStartedAt()->willReturn($startedAt);
        $subscription1->getSubscriptionConfiguration()->willReturn($configuration);

        $configuration->getNumberOfRepetitions()->willReturn(12);
        $configuration->getInterval()->willReturn('1 months');

        $datePeriodFactory->createForSubscriptionConfiguration(
            $startedAt,
            12,
            '1 months'
        )->willReturn([]);

        $scheduleFactory->createConfiguredForSubscription(
            $subscription1,
            $startedAt,
            0,
            $fulfilledDate,
        )->willReturn($schedule);
        $subscription1->addSchedule($schedule);

        $this->handleSuccess($payment);
        $subscriptionRepository->add($subscription1)->shouldBeCalledOnce();
    }
}
