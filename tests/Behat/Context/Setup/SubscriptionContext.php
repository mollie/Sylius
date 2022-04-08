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
use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use Doctrine\ORM\EntityManagerInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class SubscriptionContext implements Context
{
    /** @var EntityManagerInterface */
    private $entityManagerSubscription;

    /** @var FactoryInterface */
    private $subscriptionFactory;

    public function __construct(EntityManagerInterface $entityManagerSubscription, FactoryInterface $subscriptionFactory)
    {
        $this->entityManagerSubscription = $entityManagerSubscription;
        $this->subscriptionFactory = $subscriptionFactory;
    }

    /**
     * @Given /^(this order) has an active mollie subscription$/
     */
    public function thisOrderHasAnActiveMollieSubscription(OrderInterface $order): void
    {
        /** @var MollieSubscriptionInterface $subscription */
        $subscription = $this->subscriptionFactory->createNew();

        $subscription->setSubscription();
        $subscription->setCustomerId('id_1');
        $subscription->addOrder($order);
        $subscription->setState(MollieSubscriptionInterface::STATE_ACTIVE);

        $this->entityManagerSubscription->persist($subscription);
        $this->entityManagerSubscription->flush();
    }
}
