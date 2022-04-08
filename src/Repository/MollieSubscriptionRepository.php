<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Repository;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionInterface;
use Sylius\Bundle\ResourceBundle\Doctrine\ORM\EntityRepository;
use Sylius\Component\Core\Model\PaymentInterface;

final class MollieSubscriptionRepository extends EntityRepository implements MollieSubscriptionRepositoryInterface
{
    public function findOneByOrderId(int $orderId): ?MollieSubscriptionInterface
    {
        $qb = $this->createQueryBuilder('q');

        $qb->leftJoin('q.orders', 'o');
        $qb->andWhere('o.id = :orderId');
        $qb->setParameter('orderId', $orderId);

        return $qb->getQuery()->getOneOrNullResult()
        ;
    }

    public function findByOrderId(int $orderId): array
    {
        $qb = $this->createQueryBuilder('q');

        $qb->leftJoin('q.orders', 'o');
        $qb->andWhere('o.id = :orderId');
        $qb->setParameter('orderId', $orderId);

        return $qb->getQuery()->getResult()
        ;
    }

    public function findByPayment(PaymentInterface $payment): array
    {
        $qb = $this->createQueryBuilder('q');
        $qb->andWhere(':payment MEMBER OF q.payments');
        $qb->setParameter('payment', $payment);

        return $qb->getQuery()->getResult();
    }

    public function findScheduledSubscriptions(): array
    {
        $qb = $this->createQueryBuilder('q');
        $qb->andWhere('q.state = :state');
        $qb->setParameter('state', MollieSubscriptionInterface::STATE_ACTIVE);
        $qb->leftJoin('q.schedules', 's');
        $qb->andWhere('s.scheduledDate < :date');
        $qb->setParameter('date', new \DateTime());
        $qb->andWhere('s.fulfilledDate IS NULL');

        return $qb->getQuery()->getResult();
    }

    public function findProcessableSubscriptions(): array
    {
        $qb = $this->createQueryBuilder('q');
        $qb->andWhere('q.state = :state');
        $qb->setParameter('state', MollieSubscriptionInterface::STATE_PROCESSING);
        $qb->andWhere('q.processingState = :processingState');
        $qb->setParameter('processingState', MollieSubscriptionInterface::PROCESSING_STATE_PENDING);

        return $qb->getQuery()->getResult();
    }
}
