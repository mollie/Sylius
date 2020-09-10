<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Repository;

use Sylius\Bundle\CoreBundle\Doctrine\ORM\OrderRepository as BaseOrderRepository;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\OrderPaymentStates;

final class OrderRepository extends BaseOrderRepository implements OrderRepositoryInterface
{
    public function findAbandonedByDateTime(\DateTime $dateTime): array
    {
        return $this->createQueryBuilder('o')
            ->where('o.paymentState = :paymentState')
            ->andWhere('o.state = :state')
            ->andWhere('o.createdAt <= :createdAt')
            ->setParameter('state', OrderInterface::STATE_NEW)
            ->setParameter('paymentState', OrderPaymentStates::STATE_AWAITING_PAYMENT)
            ->setParameter('createdAt', $dateTime)
            ->setMaxResults(20)
            ->getQuery()
            ->getResult()
            ;
    }
}
