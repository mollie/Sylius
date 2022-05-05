<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Behat\Context\Setup;

use Behat\Behat\Context\Context;
use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\MollieCustomer;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionScheduleInterface;
use BitBag\SyliusMolliePlugin\Processor\SubscriptionScheduleProcessorInterface;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\Assert;
use Sylius\Behat\Service\SharedStorageInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Order\Model\OrderItemInterface;
use Sylius\Component\Payment\Model\PaymentInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class SubscriptionContext implements Context
{
    /** @var EntityManagerInterface */
    private $entityManagerSubscription;

    /** @var FactoryInterface */
    private $subscriptionFactory;

    private SharedStorageInterface $sharedStorage;

    private SubscriptionScheduleProcessorInterface $subscriptionScheduleProcessor;

    private string $output = '';

    private MollieApiClient $mollieApiClient;

    public function __construct(
        EntityManagerInterface $entityManagerSubscription,
        FactoryInterface $subscriptionFactory,
        SharedStorageInterface $sharedStorage,
        SubscriptionScheduleProcessorInterface $subscriptionScheduleProcessor,
        MollieApiClient $mollieApiClient
    ) {
        $this->entityManagerSubscription = $entityManagerSubscription;
        $this->subscriptionFactory = $subscriptionFactory;
        $this->sharedStorage = $sharedStorage;
        $this->subscriptionScheduleProcessor = $subscriptionScheduleProcessor;
        $this->mollieApiClient = $mollieApiClient;
    }

    /**
     * @Given /^(this order) has an active mollie subscription$/
     */
    public function thisOrderHasAnActiveMollieSubscription(OrderInterface $order): void
    {
        /** @var PaymentInterface $firstPayment */
        $firstPayment = $order->getPayments()->first();
        $mollieCustomer = new MollieCustomer();
        $mollieCustomer->setEmail('sylius@example.com');
        $mollieCustomer->setProfileId('cst_profile');
        $paymentDetails = [
            'email' => 'sylius@example.com',
            'amount' => [
                'value' => '1.00',
                'currency' => 'USD',
            ],
            'backurl' => 'http://127.0.0.1:8080/payment/capture/token',
            'metadata' => [
                'gateway' => 'mollie_subscription',
                'order_id' => $order->getId(),
                'cartToken' => null,
                'customer_id' => $order->getCustomer()->getId(),
                'refund_token' => 'refundToken',
                'sequenceType' => 'first',
                'selected_issuer' => null,
                'molliePaymentMethods' => 'creditcard',
            ],
            'full_name' => 'First Last',
            'customerId' => $mollieCustomer->getProfileId(),
            'webhookUrl' => 'http://127.0.0.1:8080/payment/notify/token',
            'description' => 'Description',
            'cancel_token' => 'cancelToken',
            'sequenceType' => 'first',
            'payment_mollie_id' => 'tr_abc123',
            'customer_mollie_id' => $mollieCustomer->getProfileId(),
        ];

        $firstPayment->setDetails($paymentDetails);
        /** @var MollieSubscriptionInterface $subscription */
        $subscription = $this->subscriptionFactory->createNew();

        $subscription->addOrder($order);
        $subscription->setState(MollieSubscriptionInterface::STATE_ACTIVE);
        $subscriptionConfiguration = $subscription->getSubscriptionConfiguration();
        $subscriptionConfiguration->setInterval('10 days');

        $orderItem = $order->getItems()->first();
        Assert::assertInstanceOf(OrderItemInterface::class, $orderItem);
        $subscription->setOrderItem($orderItem);
        $subscription->setPaymentState(MollieSubscriptionInterface::PAYMENT_STATE_OK);
        $subscriptionConfiguration = $subscription->getSubscriptionConfiguration();
        $subscriptionConfiguration->setInterval('1 days');
        $subscriptionConfiguration->setNumberOfRepetitions(3);
        $subscriptionConfiguration->setPaymentDetailsConfiguration($paymentDetails);

        $this->entityManagerSubscription->persist($subscription);
        $this->entityManagerSubscription->persist($subscriptionConfiguration);
        $this->entityManagerSubscription->persist($mollieCustomer);
        $this->entityManagerSubscription->flush();

        $this->sharedStorage->set('subscription', $subscription);
    }

    /**
     * @Given /^(this subscription) has an active schedule$/
     */
    public function thisSubscriptionHasAnActiveSchedule(MollieSubscriptionInterface $subscription): void
    {
        $this->subscriptionScheduleProcessor
            ->processScheduleGeneration($subscription);

        /** @var MollieSubscriptionScheduleInterface $schedule */
        foreach ($subscription->getSchedules() as $schedule) {
            $schedule->setScheduledDate(new \DateTime());
        }

        $this->entityManagerSubscription->persist($subscription);
        $this->entityManagerSubscription->flush();
    }

    /**
     * @When I run command :command
     */
    public function iRunCommand(string $command): void
    {
        $this->output = shell_exec($command);
    }

    /**
     * @Then I should see :output in the output
     */
    public function iShouldSeeInTheOutput(string $output): void
    {
        if (!str_contains($this->output, $output)) {
            throw new \Exception(sprintf('Did not see "%s" in output "%s"', $output, $this->output));
        }
    }
}
